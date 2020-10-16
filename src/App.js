import React from "react";
import { v4 as uuidV4 } from "uuid";
import TaskListContainer from './TaskListContainer';
import AddTaskContainer from './AddTaskContainer';
import Header from './Header';


class App extends React.Component {
  state = {
    todos: [
      { id: uuidV4(), content: "Buy milk1", status: "pending" },
      { id: uuidV4(), content: "buy carrots1", status: "pending" },
      { id: uuidV4(), content: "Buy milk2", status: "done" },
      { id: uuidV4(), content: "buy carrots2", status: "deleted" }
    ]
  };

  onDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: "deleted"
            }
          : todo
      )
    }));
  };

  onChangeCheckbox = (id, checked) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: checked ? "done" : "pending"
            }
          : todo
      )
    }));
  };

  addTodo = (todo) => {
    if(todo.content ===''){
      alert("Task should not be empty !!");
    }
    else{
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        {
          ...todo,
          id: uuidV4(),
          status: "pending"
        }
      ]
    }));
  }
  };

  render() {
    return (
      <div style={{display: 'flex',flexDirection:'column', alignItems: 'center', flex:1, height: '100vh',justifyContent: 'center',backgroundColor:'#37ecba'}}>
        <Header/>
        <AddTaskContainer addTodo={this.addTodo} />
        <TaskListContainer 
          todos={this.state.todos}
          deleteTodo={this.onDelete}
          onChangeCheckbox={this.onChangeCheckbox}
        />
      </div>
    );
  }
}

export default App;
