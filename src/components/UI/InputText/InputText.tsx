import React, { useState } from 'react';

interface InputTextProps {
  placeholder: string;
}

function InputText(props: InputTextProps) {
  const { placeholder } = props;
  const [inputText, setInputText] = useState('');
  return (
    <input
      type='text'
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default InputText;
