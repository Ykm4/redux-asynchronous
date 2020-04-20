import React, { useEffect } from 'react';
import Todo from '../components/Todo';
import { useSelector } from 'react-redux';
import { useFetchData } from '../customHook';

const TodoList = () => {
  const { todoList } = useSelector((state) => state.todo);
  const getTodo = useFetchData();
  useEffect(() => {
    getTodo();
    // eslint-disable-next-line
  }, []);
  return <Todo todoList={todoList} />;
};

export default TodoList;
