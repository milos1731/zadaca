import React, {Component} from "react";
import "./Task7.css";
import TodoList from "./TodoList/TodoList";
import Header from "./Header/Header";
import InputTodo from "./InputTodo/InputTodo"



class Task7 extends Component {
    constructor(props){
        super(props);
        this.state = { 
            todos: [
                {
                    id:1,
                    title: "Setup development enviroment",
                    completed: true
                },
                {
                    id: 2,
                    title: "Develop website and add content",
                    completed: false
                  },
                  {
                    id: 3,
                    title: "Deploy to live server",
                    completed: false
                  }

            ]
         }
    }

    handleChange = (id) => {
        this.setState(prevState =>({
            todos:prevState.todos.map(a => {
                if (a.id === id ) {
                   return {
                       ...a,
                       completed: !a.completed
                   }
                }
                return a
            })
        }))
    }

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(a => { 
                    return a.id !== id;
                })
            ]
        })
    }
    addTodoItem = title => {
        console.log(title)
    }

    render() { 
        return ( 
        <div>
            <Header />
            <InputTodo
            addTodoProps={this.addTodoItem} />
            <TodoList 
                todos={this.state.todos}
                handleChange={this.handleChange}
                deleteTodoProps={this.delTodo}
            />

        </div>
        );
    }
}
 
export default Task7;