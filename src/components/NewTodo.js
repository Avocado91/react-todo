import React from 'react';

class NewTodo extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddItem}>
          <input type='text' name='todo'></input>
          <button type='submit'>+</button>
        </form>
      </div>
    )
  }
}

export default NewTodo;