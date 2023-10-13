import { FormEvent, Ref, forwardRef, useEffect, useState } from 'react';
import styles from './InputText.module.scss';

interface InputTextProps {
  placeholder: string;
  inputValue: string;
  inputLinkIcon: string;
  validationregex: RegExp
  errorMessageProp: string
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  returnIsInputValid: (isValid: boolean, inputValue?: string) => void;
}

const InputText = forwardRef((props: InputTextProps, ref:Ref<HTMLInputElement>) => {
  const {
    placeholder,
    inputValue,
    inputLinkIcon,
    returnIsInputValid,
    validationregex,
    errorMessageProp
  } = props;
  const [inputText, setInputText] = useState(inputValue);
  const [isInputValid, setIsInputValid] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const onValidateInput = function (text: string, textValid: boolean | null) {
    const isInputValidWithRegex = validationregex.test(text);
    if (!isInputValidWithRegex && text !== '') {
      setIsInputValid(false);
      setErrorMessage(errorMessageProp);
      returnIsInputValid(false);
    } else if (text.trim() !== '' && isInputValidWithRegex) {
      setIsInputValid(true);
      returnIsInputValid(true, inputText);
    } else if (text.trim() === '' && textValid !== null) {
      setIsInputValid(false);
      setErrorMessage("Can't be empty");
      returnIsInputValid(false);
    }
  };

  const onInputFocus = () => {
    onValidateInput(inputText, isInputValid);
  };

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      onValidateInput(inputText, isInputValid);
    }, 300);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [inputText, isInputValid]);

  const errorClass = isInputValid === false ? 'inputInvalid' : '';
  return (
    <div className={styles.inputContainer}>
      <label htmlFor='inputLink' className={styles.label}>
        Link:
      </label>
      <img
        src={inputLinkIcon}
        alt='link icon'
        className={styles.inputIcon}
        aria-hidden='true'
      />
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={placeholder}
        className={`${styles.inputText} ${styles[errorClass]}`}
        name='inputLink'
        onBlur={onInputFocus}
        ref={ref}
        aria-invalid={isInputValid === false ? 'true' : 'false'} // Set ARIA attributes
        aria-describedby={isInputValid === false ? 'error-message' : undefined}
        
      />
      {!isInputValid && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
})

export default InputText;
