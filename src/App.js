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
clearCompleted = () => {
  this.setState({todoList: this.state.todoList.filter(todo => !todo.completed)});
}

toggleCompleted = id => {
  this.setState({todoList: this.state.todoList.map(todo => {
    if (todo.id===id) { return {...todo, completed: !todo.completed}} else
    { return todo; }
  })
});
}

  render() {
    return (
      <div>
        <h2>To Do List!</h2>
        <TodoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>

      </div>
    );
  }
}

export default App;
