import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
const Todo = ({ todo, getTodo, deleteTodo }) => {
  const { todoList } = todo;
  useEffect(() => {
    getTodo();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </>
  );
};

export default Todo;
