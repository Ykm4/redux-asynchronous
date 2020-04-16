let nextId = 0;
export const addTodo = newTodo => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: ++nextId,
      text: newTodo
    }
  };
};

export const deleteTodo = todo => {
  return {
    type: 'DELETE_TODO',
    id: todo.id
  }
}



