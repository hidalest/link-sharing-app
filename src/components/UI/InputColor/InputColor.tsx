import { ChangeEvent, useState } from 'react';
import styles from './InputColor.module.scss';

interface InputColorProps {
  label: string;
  onColorChange: (inputEl: HTMLInputElement) => void;
  name: string;
}

export const InputColor = ({ label, onColorChange, name }: InputColorProps) => {
  const [inputColor, setInputColor] = useState('#333333');

  const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputColor(e.target.value);
    onColorChange(e.target);
  };

  return (
    <div className={styles.inputColor}>
      <input
        type='color'
        name={name}
        id='inputColor'
        value={inputColor}
        onChange={onChangeHandlerInput}
      />
      <label htmlFor='inputColor'>{label}</label>
    </div>
  );
};
