import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


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
this.addTodo = this.addTodo.bind(this);
 };
addTodo (todo){
  const newTodo={task:todo, id:Date.now(),completed:false};
  this.setState({todoList:[...this.state.todoList, newTodo]});
}


  render() {
    return (
      <div>
        <h2>To Do List!</h2>
        <TodoList todoList={this.state.todoList}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
