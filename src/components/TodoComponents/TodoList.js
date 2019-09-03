import React from 'react';
import Todo from './Todo';



class TodoList extends React.Component{
   
    render() {
        return <div>{this.props.todoList.map((todo,idx)=><div key={idx}>
            <Todo todo={todo} toggleCompleted={this.props.toggleCompleted}/>
        </div>)}
        </div>;
      }

}



export default TodoList