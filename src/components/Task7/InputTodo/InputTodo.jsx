import React, {Component} from "react";
import "./InputTodo.css";

class InputTodo extends Component {
    state={
        title: ""
    };

    onChange = e => {
        this.setState({
            title: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title)
    }

    render() { 
        return ( <form>
            <input 
            type="text" 
            placeholder="Add Todo..." 
            value={this.state.title}
            onChange={this.onChange}
            onSubmit={this.handleSubmit} />
        </form> );
    }
}
 
export default InputTodo;