import { FormEvent, Ref, forwardRef, useEffect, useState } from "react";
import styles from "./InputText.module.scss";
import { commonProps } from "../../../interfaces";

interface InputTextProps {
  placeholder: string;
  inputLinkIcon?: string;
  inputValue?: string;
  validationregex: RegExp;
  errorMessageProp: string;
  showLabel?: boolean;
  label: string;
  timeOnCheck?: number;
  className?: string;
  isRequired: boolean;
  maxLength?: number;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  returnIsInputValid: (isValid: boolean, inputValue: string) => void;
  id?: string;
}

const InputText = forwardRef(
  (props: InputTextProps, ref: Ref<HTMLInputElement>) => {
    const {
      placeholder,
      inputLinkIcon,
      returnIsInputValid,
      validationregex,
      errorMessageProp,
      inputValue,
      showLabel = false,
      label,
      timeOnCheck = 300,
      className,
      isRequired,
      maxLength = 50,
    } = props;
    const [inputText, setInputText] = useState(inputValue || "");
    const [isInputValid, setIsInputValid] = useState<boolean | null>(null);
    const [errorMessage, setErrorMessage] = useState("");

    const onValidateInput = function (text: string, textValid: boolean | null) {
      const isInputValidWithRegex = validationregex.test(text);

      if (!isInputValidWithRegex && text !== "") {
        setIsInputValid(false);
        setErrorMessage(errorMessageProp);
        returnIsInputValid(false, inputText);
      } else if (text.trim() !== "" && isInputValidWithRegex) {
        setIsInputValid(true);
        returnIsInputValid(true, inputText);
        setErrorMessage("");
      } else if (text.trim() === "" && textValid !== null && isRequired) {
        setIsInputValid(false);
        setErrorMessage("Can't be empty");
        returnIsInputValid(false, inputText);
      } else if (text.trim() === "" && !isRequired) {
        setIsInputValid(true);
        returnIsInputValid(true, inputText);
        setErrorMessage("");
      }
    };

    const onInputFocus = () => {
      onValidateInput(inputText, isInputValid);
    };

    useEffect(() => {
      const typingTimeout = setTimeout(() => {
        onValidateInput(inputText, isInputValid);
      }, timeOnCheck);

      return () => {
        clearTimeout(typingTimeout);
      };
    }, [inputText, isInputValid]);

    const errorClass = isInputValid === false ? "inputInvalid" : "";
    const showLabelClass = showLabel ? "showLabel" : "hideLabel";

    return (
      <div className={`${styles.inputContainer} ${className}`}>
        <label
          htmlFor="inputLink"
          className={`${styles.label} ${styles[showLabelClass]}`}
        >
          {label}
          {isRequired && <span className={styles.isRequiredStar}>*</span>}
        </label>
        {inputLinkIcon && (
          <img
            src={inputLinkIcon}
            alt="link icon"
            className={styles.inputIcon}
            aria-hidden="true"
          />
        )}
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={placeholder}
          className={`${styles.inputText} ${styles[errorClass]}`}
          name="inputLink"
          onBlur={onInputFocus}
          ref={ref}
          aria-invalid={isInputValid === false ? "true" : "false"} // Set ARIA attributes
          aria-describedby={
            isInputValid === false ? "error-message" : undefined
          }
          maxLength={maxLength}
        />
        {!isInputValid && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </div>
    );
  },
);

export default InputText;
