import React from "react";
import { todoContainer } from "./api/todo";
import ToDoList from "./ToDoList";

export default class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      todo: "",
    };
  }

  changeState() {
    this.setState({ count: this.state.count + 1 });
  }

  handleChange(e) {
    var todo = this.refs.input.value;
    this.setState({ todo: todo });
  }

  handleClick() {
    var todo = this.state.todo;
    var done = false;
    todoContainer.insert({ todo, done }, (err, done) => {
      console.log(err + " id = " + done);
    });
    this.setState({ todo: "" });
    this.refs.input.value = "";
  }

  render() {
    return (
      <div className="wrapper">
        <button onClick={this.changeState.bind(this)}>
          Click me to use state!
        </button>
        <h1 className="red">{this.state.count}</h1>
        <ToDoList />

        <label>Write your todos: &nbsp;</label>
        <input onChange={this.handleChange.bind(this)} ref="input" />

        <h1>{this.state.todo}</h1>
        <button onClick={this.handleClick.bind(this)}>Add</button>
      </div>
    );
  }
}
