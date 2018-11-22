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
      <li className='todo' key={todo.key}>
        <div className='todo__text'>
          {todo.text}
        </div> 
        <button className='button button--delete' onClick={() => this.delete(todo.key)}>-</button>
      </li>
    )
  }

  render() {
    const todoEntries = this.props.todoEntries;
    const listTodos = todoEntries.map(this.createTodo);
    return (
      <div>
        <ul className='todo-list'>{listTodos}</ul>
      </div>
    );
  }
};

export default Todo;