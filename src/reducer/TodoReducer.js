import { GET_TODO, ADD_TODO, DELETE_TODO } from '../actions/types';

const initialState = {
  todoList: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        todoList: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO:
      const todoList = state.todoList.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todoList,
      };
    case 'UPDATE_TODO':
      const target = state.todoList.map((todo) =>
        todo.id === action.id ? action.payload : todo
      );
      console.log(target);

      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};

export default TodoReducer;
