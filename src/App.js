import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !==  id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="">
        <h1 className="">Todo's</h1>
        <p>click on it to delete it, Write it then press ENTER to add it!</p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
