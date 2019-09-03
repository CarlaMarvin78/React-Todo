import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component{
   
    render() {
        return <div>{this.props.todoList.map((todo,idx)=><div key={idx}><Todo todo={todo}/>
        </div>)}
        </div>;
      }

}



export default TodoList