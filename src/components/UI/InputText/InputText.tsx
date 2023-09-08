import { useState } from 'react';
import styles from './InputText.module.scss';

interface InputTextProps {
  placeholder: string;
  inputValue: string;
  inputLinkIcon: string;
}

function InputText(props: InputTextProps) {
  const { placeholder, inputValue, inputLinkIcon } = props;
  const [inputText, setInputText] = useState(inputValue);
  return (
    <article className={styles.inputContainer}>
      <img src={inputLinkIcon} alt='link icon' className={styles.inputIcon} />
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={placeholder}
        className={styles.inputText}
      />
    </article>
  );
}

export default InputText;
