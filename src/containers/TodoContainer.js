import { connect } from "react-redux";
import Todo from "../components/Todo";
import { getTodo, deleteTodo } from "../actions/todoAction";

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { getTodo, deleteTodo })(Todo);
