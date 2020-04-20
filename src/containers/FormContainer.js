import React from 'react';
import Form from '../components/Form';
import { useForm, usePost } from '../customHook';

const FormContainer = () => {
  const addTodo = usePost();
  const { text, handleOnSubmit, handleOnChange } = useForm(addTodo);

  return (
    <Form
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleOnChange}
      text={text}
    />
  );
};

export default FormContainer;
