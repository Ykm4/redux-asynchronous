import React, { useState } from "react";
import { addTodo } from "../actions/todoAction";
import { connect } from "react-redux";

const Form = ({ dispatch }) => {
  const [text, setText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(text))
    // addTodo(text)
    setText("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label>
        Todoを入力
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button type="submit">追加</button>
    </form>
  );
};

export default connect()(Form);
