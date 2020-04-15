import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../actions/todoAction";

const TodoApp = (props) => {
  console.log(props);
  const { todoList, dispatch } = props;
  const [text, setText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log("handleAddTodo");
    dispatch(addTodo(text));
    setText("");
  };

  const handleRemoveTodo = (todo) => {
    console.log("handleRemoveTodo");
    dispatch(removeTodo(todo));
  };

  return (
    <>
      <form>
        <label>
          Todoを入力
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button onClick={handleAddTodo}>追加</button>
      </form>

      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleRemoveTodo(todo)} type="button">
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  console.log("1回目のレンダリング");
  return {
    todoList: state.todo.list,
  };
};

export default connect(mapStateToProps)(TodoApp);
