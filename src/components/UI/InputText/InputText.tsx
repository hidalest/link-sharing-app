import { FormEvent, useEffect, useState } from 'react';
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
    }, 500);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [inputText, isInputValid]);

  const errorClass = isInputValid === false ? 'inputInvalid' : '';
  return (
    <form className={styles.inputContainer} onSubmit={onSubmit}>
      <img src={inputLinkIcon} alt='link icon' className={styles.inputIcon} />
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={placeholder}
        className={`${styles.inputText} ${styles[errorClass]}`}
        name='inputLink'
        onBlur={onInputFocus}
      />
      {!isInputValid && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </form>
  );
}

export default InputText;
