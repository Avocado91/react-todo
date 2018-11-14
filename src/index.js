import React from 'react';
import ReactDOM from 'react-dom';
import ReactLogo from './images/react.png'; //logo

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items:[]
    }
    
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  handleDeleteItem(key) {
    const filteredTodos = this.state.items.filter(function(todo) {
      return (todo.key !== key);
    });

    this.setState({
      items: filteredTodos
    });
  }

  handleAddItem(e) {
    e.preventDefault();

    if (e.target.elements.todo.value !== '') {
      const newItem = {
        text: e.target.elements.todo.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      e.target.elements.todo.value = '';
    }

    console.log(this.state.items);

  }

  render() {
    return (
      <div>
        <Header></Header>
        <TodoList 
          todoEntries={this.state.items}
          deleteItem={this.handleDeleteItem}
        />
        <NewTodo handleAddItem={this.handleAddItem}></NewTodo>
      </div>
    )
  }
}

const Header = () => {
  return (
    <div>
      <h1>React To Do</h1>
    </div>
  )
}

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

ReactDOM.render(<App></App>, document.getElementById('root'));