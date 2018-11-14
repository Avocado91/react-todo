import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.createTodo = this.createTodo.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  createTodo(todo) {
    return (
      <li key={todo.key}>
        {todo.text}
        <button onClick={() => this.delete(todo.key)}>-</button>
      </li>)
  }

  render() {
    const todoEntries = this.props.todoEntries;
    const listTodos = todoEntries.map(this.createTodo);
    return (
      <div>
        <ul>{listTodos}</ul>
      </div>
    );
  }
};

export default Todo;