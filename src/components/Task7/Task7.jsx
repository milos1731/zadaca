import React, {Component} from "react";
import "./Task7.css";
import "./InputTodo/InputTodo.css"
import TodoList from "./TodoList/TodoList";
import Header from "./Header/Header";
import InputTodo from "./InputTodo/InputTodo";
import { v4 as uuidv4 } from "uuid";




class Task7 extends Component {
    constructor(props){
        super(props);
        this.state = { 
            todos: [
                {
                    id: uuidv4(),
                    title: "Setup development enviroment",
                    completed: true
                },
                {
                    id: uuidv4(),
                    title: "Develop website and add content",
                    completed: false
                  },
                  {
                    id: uuidv4(),
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
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
        };
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
      };
      

    render() { 
        return ( 
        <div className="container">
            <div className="inner">
            <Header />
            <InputTodo
                addTodoProps={this.addTodoItem} />
            <TodoList 
                todos={this.state.todos}
                handleChange={this.handleChange}
                deleteTodoProps={this.delTodo}
            />
            </div>
        </div>
        );
    }
}
 
export default Task7;