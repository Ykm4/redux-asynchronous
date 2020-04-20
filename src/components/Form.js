import React from 'react';
import styled from 'styled-components';

const Form = ({ text, handleOnSubmit, handleOnChange }) => {
  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <FormInput type='text' value={text} onChange={handleOnChange} />
      <Button type='submit'>追加</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const FormInput = styled.input`
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

const Button = styled.button`
  background-color: navy;
  border-radius: 12px;
  color: #ffffff;
  font-size: 1.1rem;
  margin-left: 10px;
  padding: 5px 18px;
  cursor: pointer;
`;

export default Form;
