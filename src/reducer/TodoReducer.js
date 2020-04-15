const initialState = {
  list: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action);
      const test = { ...state, list: [...state.list, action.payload] };
      console.log("todoReducer", test);

      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "DELETE_TODO":
      console.log(state);
      return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};

export default TodoReducer;
