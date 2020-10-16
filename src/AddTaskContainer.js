
import React from "react";

class AddTaskContainer extends React.Component {
  state = {
    content: ""
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div style={{width:700}}>
        <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'row'}}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
            placeholder="Enter todo"
            style= {{ width:380,
                        height: 40,
                        position: 'relative',
                        padding:'5 10',
                        border: 'none',
                        borderRadius: 4,
                        fontFamily: 'sans-serif',
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 'normal',
                        backgroundColor: '#2a9df4',
                        color: 'white'
                    }}
          />
          <input type="submit" value="Submit" value="ADD" style={{ marginLeft:18, width:100, padding: '5 10',fontSize: 20,backgroundColor: '#2a9df4', border: 'none', color: 'white', borderRadius:3}}/>
        </form>
      </div>
    );
  }
}
export default AddTaskContainer;
