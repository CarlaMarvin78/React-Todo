import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {todo: ''};
    }

    onSubmit = event => {
        event.preventDefault();
        if(this.state.todo!=='') {
            this.props.addTodo(this.state.todo);
            this.setState({todo: ''});
        }
    }

    onChange = event => {
        this.setState({todo: event.target.value});
    }

    render() {
        return (<form name="todoform" onSubmit={this.onSubmit}>
        <input name="todoitem" placeholder="Todo Item" value={this.state.todo} onChange={this.onChange}/>
        <button type="button" value="Submit" onClick={this.onSubmit}>Submit</button>
        <button type="button" value="Clear" onClick={this.props.clearCompleted}>Clear Completed</button>
        </form>)
    }
}

export default TodoForm;