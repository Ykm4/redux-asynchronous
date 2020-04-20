import React from 'react';
import TodoItem from './TodoItem';
const Todo = ({ todoList }) => {
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default Todo;
