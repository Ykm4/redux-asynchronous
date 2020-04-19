import React, { useState } from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const { id, task } = todo;
  const [text, setText] = useState(task);

  return (
    <StyledTodoItem>
      <Text>{text}</Text>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onBlur={() => {
          updateTodo(id, text);
        }}
      />
      <Button type='button' onClick={() => deleteTodo(id)}>
        削除
      </Button>
    </StyledTodoItem>
  );
};

export const StyledTodoItem = styled.li`
  border-bottom: 1px solid navy;
  margin-bottom: 5px;
  padding: 10px 0;
`;

export const Text = styled.p`
  display: inline;
  font-size: 1.6rem;
  &::before {
    content: 'Task:';
    font-weight: bold;
    margin-right: 5px;
  }
`;

export const Button = styled.button`
  background-color: firebrick;
  border: 1px solid firebrick;
  border-radius: 6px;
  color: #ffffff;
  margin-left: 10px;
  padding: 3px 9px;
  cursor: pointer;
`;

export default TodoItem;
