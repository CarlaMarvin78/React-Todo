import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor () {

  
super ();

this.state={
  todoList: [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ]
} 
 };
  render() {
    return (
      <div>
        <h2>To Do List!</h2>
        <TodoList todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
