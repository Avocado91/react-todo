import React from 'react';
import ReactDOM from 'react-dom';
import ReactLogo from './images/react.png';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <TodoList></TodoList>
        <NewTodo></NewTodo>
      </div>
    )
  }
}

const Header = () => {
  return (
    <div>
      <img src={ReactLogo} alt='React Logo'></img>
      <h1>React To Do</h1>
    </div>
  )
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        react list
        <Todo></Todo>
      </div>
    )
  }
}

class Todo extends React.Component {
  render() {
    return (
      <div>
        <p>Individual Todo</p>
        <button>-</button>
      </div>
    )
  }
}

class NewTodo extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' name='newTodo'></input>
          <button>+</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));