import React from 'react';

class Todo extends React.Component {

    render (){
        return (this.props.todo.task);
    }
}

export default Todo