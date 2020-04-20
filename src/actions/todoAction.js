import { GET_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';

export const GetTodo = (data) => ({ type: GET_TODO, payload: data });
export const AddTodo = (data) => ({ type: ADD_TODO, payload: data });
export const DeleteTodo = (id) => ({ type: DELETE_TODO, id });
export const UpdateTodo = (id, data) => ({
  type: UPDATE_TODO,
  payload: data,
  id,
});
