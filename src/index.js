import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
      <Header></Header>
      <TodoList></TodoList>
      <NewTodo></NewTodo>
      <AddTodo></AddTodo>
      </div>
    );
  }
};

const Header = () => (
  <div>
    <img src='./../images/react.png' alt='React Logo'></img>
    <h1>React To Do</h1>
  </div>
);

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>item 1 </li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    );
  }
};

const NewTodo = () => (
  <form>
    <input type='text'></input>
  </form>
);
      
    


class AddTodo extends React.Component {
  render() {
    return (
      <button>+</button>
    );
  }
};



ReactDOM.render(<App />, document.getElementById('root'));

