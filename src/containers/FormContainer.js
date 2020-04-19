import React, { useState } from 'react';
import Form from '../components/Form';
import { useAddData } from '../customHook';

const FormContainer = () => {
  const [text, setText] = useState('');
  const [addTodo] = useAddData();

  const handleAddTodo = (event) => {
    event.preventDefault();
    // 空文字・空白や改行に対してのvalidation
    if (!text || !text.match(/\S/g)) return;
    addTodo(text);
    setText('');
  };

  return <Form handleAddTodo={handleAddTodo} text={text} setText={setText} />;
};

export default FormContainer;
