

import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const TaskListContainer = ({ todos, deleteTodo, onChangeCheckbox }) => {
  const todoList = todos.length > 0 ? (
    todos
      .filter(({ status }) => status !== "deleted")
      .map((todo) => {
        return (
          <div key={todo.id} style={{marginLeft:-200,backgroundColor:'white',width:500}}>
            <div style = {{ display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
              <input
                type="checkbox"
                style={{height:20,width:30}}
                checked={todo.status === "done"}
                onChange={(event) =>
                  onChangeCheckbox(todo.id, event.target.checked)
                }
              />
              <p
                style={
                  todo.status === "pending"
                    ? { color: "black",fontSize:20 }
                    : { color: "grey", textDecoration: "line-through",fontSize:20 }
                }
              >
                {todo.content}
              </p>
              <button onClick={() => deleteTodo(todo.id)} style={{  padding: '5 20',fontSize: 20, border: 'none', color: 'grey', borderRadius:3,marginRight:10}}><DeleteIcon/></button>
            </div>
           
          </div>
           
        );
      })
  ) : (
    <p>You have no todos</p>
  );
  return <div style={{ marginBottom:30}}>{todoList}</div>;
};

export default TaskListContainer;
