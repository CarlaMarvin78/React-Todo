import React from 'react';
import './Todo.css';

const Todo = props => {
    let classes = '';
    if (props.todo.completed) {
        classes = 'todo completed';
    } else {
        classes = 'todo';
    }
    const onClick = () => {
        props.toggleCompleted(props.todo.id);
       // classes = 'todo completed';
    }
return (<div className={classes} onClick={onClick}>{props.todo.task}</div>)
}

export default Todo;