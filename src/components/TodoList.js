import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <Todo
          todoEntries={this.props.todoEntries}
          delete={this.props.deleteItem}
        />
      </div>
    )
  }
}

export default TodoList;