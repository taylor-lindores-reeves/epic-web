import React from "react";
import { todoContainer } from "./api/todo";
import ToDoItem from "./ToDoItem";

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentWillMount() {
    Tracker.autorun(() => {
      var todo = todoContainer.find({}).fetch();
      this.setState({ list: todo });
    });
  }

  render() {
    return (
      <div>
        {this.state.list.map((val, index) => {
          return (
            <ToDoItem
              done={val.done}
              key={index}
              id={val._id}
              todo={val.todo}
            />
          );
        })}
      </div>
    );
  }
}
