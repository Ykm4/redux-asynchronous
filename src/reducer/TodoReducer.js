const initialState = {
  todoList: [],
  loading: false,
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "DELETE_TODO":
      console.log(state);
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default TodoReducer;
