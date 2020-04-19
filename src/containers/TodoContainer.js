import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { getTodo, deleteTodo, updateTodo } from '../actions/todoAction';

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { getTodo, deleteTodo, updateTodo })(
  Todo
);
