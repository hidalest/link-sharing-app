import { FormEvent, useEffect, useState } from 'react';
import styles from './InputText.module.scss';
import { httpRegex } from '../../../utils/regex';

interface InputTextProps {
  placeholder: string;
  inputValue: string;
  inputLinkIcon: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

function InputText(props: InputTextProps) {
  const { placeholder, inputValue, inputLinkIcon, onSubmit } = props;
  const [inputText, setInputText] = useState(inputValue);
  const [isInputValid, setIsInputValid] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const onInputFocus = () => {
    if (inputText.trim() !== '' || isInputValid) {
      setIsInputValid(true);
      setErrorMessage('');
    } else {
      setIsInputValid(false);
      setErrorMessage("Can't be empty");
    }
  };

  useEffect(() => {
    console.log('first render');
    if (inputText.trim() !== '') {
      setIsInputValid(true);
    }
    if (!httpRegex.test(inputText) && inputText !== '') {
      setIsInputValid(false);
      setErrorMessage('Enter a valid URL');
    }
  }, [inputText]);

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
