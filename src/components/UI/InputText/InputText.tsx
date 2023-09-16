import { FormEvent, useEffect, useRef, useState } from 'react';
import styles from './InputText.module.scss';
import { httpRegex } from '../../../utils/regex';

interface InputTextProps {
  placeholder: string;
  inputValue: string;
  inputLinkIcon: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  returnIsInputValid: (isValid: boolean) => void;
}

function InputText(props: InputTextProps) {
  const {
    placeholder,
    inputValue,
    inputLinkIcon,
    onSubmit,
    returnIsInputValid,
  } = props;
  const [inputText, setInputText] = useState(inputValue);
  const [isInputValid, setIsInputValid] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onValidateInput = function (text: string, textValid: boolean | null) {
    const isURLValid = httpRegex.test(text);
    if (!isURLValid && text !== '') {
      setIsInputValid(false);
      setErrorMessage('Enter a valid URL');
      returnIsInputValid(false);
    } else if (text.trim() !== '' && isURLValid) {
      setIsInputValid(true);
      returnIsInputValid(true);
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

  const onSubmitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
      if (isInputValid) {
        inputRef.current?.blur();
      }
    }
  };

  const errorClass = isInputValid === false ? 'inputInvalid' : '';
  return (
    <form className={styles.inputContainer} onSubmit={onSubmitFormHandler}>
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
        ref={inputRef}
        aria-invalid={isInputValid === false ? 'true' : 'false'} // Set ARIA attributes
        aria-describedby={isInputValid === false ? 'error-message' : undefined}
      />
      {!isInputValid && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </form>
  );
}

export default InputText;
