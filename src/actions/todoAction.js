import { GET_TODO, ADD_TODO, DELETE_TODO } from './types';

export const getTodo = () => async (dispatch) => {
  const res = await fetch('/list');
  const data = await res.json();
  dispatch({
    type: GET_TODO,
    payload: data,
  });
};

export const addTodo = (text) => async (dispatch) => {
  const res = await fetch('/list', {
    method: 'POST',
    body: JSON.stringify({ text }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  dispatch({
    type: ADD_TODO,
    payload: data,
  });
};

export const deleteTodo = (id) => async (dispatch) => {
  await fetch(`/list/${id}`, { method: 'DELETE' });
  dispatch({
    type: DELETE_TODO,
    id,
  });
};
