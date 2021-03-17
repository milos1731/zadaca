import React, {Component} from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";



class TodoList extends Component {

    render() { 

        return ( 
            <ul>
                {this.props.todos.map(todo => (
            <TodoItem 
            deleteTodoProps={this.props.deleteTodoProps}
            handleChange={this.props.handleChange}
            key={todo.id} 
            todo={todo} />
        ))
        }
            </ul>
             );
    }
}
 
export default TodoList;