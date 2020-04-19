import React, { useState } from 'react';
import styled from 'styled-components';
import { useDeleteData, useUpdateData } from '../customHook';

const TodoItem = ({ todo }) => {
  const { id, task } = todo;
  const [text, setText] = useState(task);
  const [deleteTodo] = useDeleteData();
  const [updateTodo] = useUpdateData();

  return (
    <StyledTodoItem>
      <UpdateInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={() => updateTodo(id, text)}
      />
      <Button type='button' onClick={() => deleteTodo(id)}>
        削除
      </Button>
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.li`
  border-bottom: 1px solid navy;
  margin-bottom: 5px;
  padding: 10px 0;
  &::before {
    content: 'Task:';
    font-weight: bold;
    margin-right: 5px;
  }
`;

const UpdateInput = styled.input`
  border: none;
  font-size: 1.6rem;
  padding: 5px;
  overflow: auto;
  width: 80%;
  &:focus {
    border-bottom: 1px dotted black;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: firebrick;
  border: 1px solid firebrick;
  border-radius: 6px;
  color: #ffffff;
  margin-left: 10px;
  padding: 3px 9px;
  cursor: pointer;
`;

export default TodoItem;
