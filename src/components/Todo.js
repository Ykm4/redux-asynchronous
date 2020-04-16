import React from "react";
const Todo = ({ todoList, deleteTodo }) => {
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo)} type="button">
              削除
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
