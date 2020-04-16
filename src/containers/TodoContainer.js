import { connect } from "react-redux";
import Todo from "../components/Todo";
import { deleteTodo } from "../actions/todoAction";

const mapStateToProps = (state) => ({
  todoList: state.todo.list
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: todo => dispatch(deleteTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
