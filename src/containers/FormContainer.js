import React, { useState } from 'react';
import Form from '../components/Form';
import { addTodo } from '../actions/todoAction';
import { connect } from 'react-redux';

const FormContainer = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return <Form handleAddTodo={handleAddTodo} text={text} setText={setText} />;
};

export default connect(null, { addTodo })(FormContainer);
