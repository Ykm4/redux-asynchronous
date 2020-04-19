import React from 'react';
import styled from 'styled-components';

const Form = ({ handleAddTodo, text, setText }) => {
  return (
    <StyledForm onSubmit={handleAddTodo}>
      <FormInput
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button type='submit'>追加</Button>
    </StyledForm>
  );
};

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const FormInput = styled.input`
  flex: 1 1 auto;
  border: 1px solid lightslategray;
  border-radius: 20px;
  font-size: 1.5rem;
  padding: 5px 20px;
  &:active,
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: navy;
  border-radius: 12px;
  color: #ffffff;
  font-size: 1.1rem;
  margin-left: 10px;
  padding: 5px 18px;
  cursor: pointer;
`;

export default Form;
