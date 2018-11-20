import React from 'react';

class NewTodo extends React.Component {
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.props.handleAddItem}>
          <input className='form__input' type='text' name='todo'></input>
          <button className='button' type='submit'>+</button>
        </form>
      </div>
    )
  }
}

export default NewTodo;