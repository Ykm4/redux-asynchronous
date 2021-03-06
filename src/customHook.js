import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { GetTodo, AddTodo, DeleteTodo, UpdateTodo } from './actions/todoAction';

export const useForm = (post) => {
  const [text, setText] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // 空文字・空白や改行に対してのvalidation
    if (!text || !text.match(/\S/g)) return;
    post(text);
    setText('');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return { text, handleOnSubmit, handleOnChange };
};

export const useFetchData = () => {
  const dispatch = useDispatch();
  const getTodo = async () => {
    const res = await axios.get('/list');
    const data = await res.data;
    dispatch(GetTodo(data));
  };
  return getTodo;
};

export const usePost = () => {
  const dispatch = useDispatch();
  const addTodo = async (text) => {
    const res = await axios.post('/list', { task: text });
    const data = await res.data;
    dispatch(AddTodo(data));
  };
  return addTodo;
};

export const useDeleteData = () => {
  const dispatch = useDispatch();
  const deleteTodo = async (id) => {
    await axios.delete(`/list/${id}`);
    dispatch(DeleteTodo(id));
  };
  return deleteTodo;
};

export const useUpdateData = () => {
  const dispatch = useDispatch();
  const updateTodo = async (id, text) => {
    const res = await axios.put(`/list/${id}`, { task: text });
    const data = res.data;
    dispatch(UpdateTodo(id, data));
  };
  return updateTodo;
};
