import React from 'react';
import '../App.css';
import styled from 'styled-components';
import TodoList from '../containers/TodoContainer';
import Form from '../containers/FormContainer';

const App = () => {
  return (
    <Wrapper>
      <Heading>TodoList</Heading>
      <Form />
      <TodoList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin: 80px 0;
  padding: 10px;
`;

const Heading = styled.h1`
  color: darkgrey;
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
`;

export default App;
