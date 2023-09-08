import { FormEvent, useState } from 'react';
import styles from './InputText.module.scss';

interface InputTextProps {
  placeholder: string;
  inputValue: string;
  inputLinkIcon: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

function InputText(props: InputTextProps) {
  const { placeholder, inputValue, inputLinkIcon, onSubmit } = props;
  const [inputText, setInputText] = useState(inputValue);
  return (
    <form className={styles.inputContainer} onSubmit={onSubmit}>
      <img src={inputLinkIcon} alt='link icon' className={styles.inputIcon} />
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={placeholder}
        className={styles.inputText}
        name='inputLink'
      />
    </form>
  );
}

export default InputText;
