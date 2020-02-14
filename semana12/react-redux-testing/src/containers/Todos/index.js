import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createTodoAction,
  completeTodoAction,
  deleteTodoAction
} from "../../actions/todos";
import { TodoItem } from "../../components/TodoItem";

export class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskValue: ""
    };
  }

  handleOnChangeNewTodo = event => {
    this.setState({ newTaskValue: event.target.value });
  };

  handleKeyPressNewTodo = event => {
    if (event.key === "Enter") {
      this.handleTodoCreation();
    }
  };

  clearNewTaskValue = () => {
    this.setState({ newTaskValue: "" });
  };

  handleTodoCreation = () => {
    const { newTaskValue } = this.state;
    const { createTodo } = this.props;

    createTodo(newTaskValue);
    this.clearNewTaskValue();
  };

  handleTodoCompletion = todoId => {
    const { completeTodo } = this.props;

    completeTodo(todoId);
  };

  handleTodoDeletion = todoId => {
    const { deleteTodo } = this.props;

    deleteTodo(todoId);
  };

  render() {
    return (
      <div>
        <label forhtml="newTodo">Nova Tarefa: </label>
        <input
          onChange={this.handleOnChangeNewTodo}
          onKeyPress={this.handleKeyPressNewTodo}
          type="text"
          id="newTodo"
          value={this.state.newTaskValue}
        />
        <hr />
        <ul>
          {this.props.allTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompleteTodo={this.handleTodoCompletion}
              onDeleteTodo={this.handleTodoDeletion}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allTodos: state.todos.allTodos
});

const mapDispatchToProps = dispatch => ({
  createTodo: text => dispatch(createTodoAction(text)),
  completeTodo: todoId => dispatch(completeTodoAction(todoId)),
  deleteTodo: todoId => dispatch(deleteTodoAction(todoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
