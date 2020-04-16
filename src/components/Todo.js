import React, {useEffect} from "react";
const Todo = ({ todo, getTodo , deleteTodo }) => {
  const {todoList, loading} = todo
  console.log(getTodo)
  useEffect(() => {
    getTodo()
  }, [])
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} type="button">
              削除
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
