import React from 'react';
import Header from './Header';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

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

export default App;