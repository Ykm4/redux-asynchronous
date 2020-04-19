import axios from 'axios';
import { GET_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';

export const getTodo = () => async (dispatch) => {
  const res = await axios.get('/list');
  const data = await res.data;
  dispatch({
    type: GET_TODO,
    payload: data,
  });
};

export const addTodo = (text) => async (dispatch) => {
  const res = await axios.post('/list', { task: text });
  const data = await res.data;
  dispatch({
    type: ADD_TODO,
    payload: data,
  });
};

export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`/list/${id}`);
  dispatch({
    type: DELETE_TODO,
    id,
  });
};

export const updateTodo = (id, text) => async (dispatch) => {
  const res = await axios.put(`/list/${id}`, { task: text });
  const data = res.data;
  dispatch({
    type: UPDATE_TODO,
    id,
    payload: data,
  });
};
