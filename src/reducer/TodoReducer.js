const initialState = {
  todoList: [],
  loading: false,
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODO':
      return {
        ...state,
        todoList: action.payload,
      };
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default TodoReducer;
