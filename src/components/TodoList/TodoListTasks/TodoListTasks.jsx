import React from "react";
import TodoListTask from "./TodoListTask/TodoListTask";


class TodoListTasks extends React.Component {
  render = () => {
    let tasksElements = this.props.tasks.map(task => {
      return (
        <TodoListTask
          task={task}
          changeStatus={this.props.changeStatus}
          changeTitle={this.props.changeTitle}
          changePriority={this.props.changePriority}
          deleteTitle={this.props.deleteTitle}
          key={task.id}/>
      )
    });
    return (
      <div className="todoList-tasks">
        {tasksElements}
      </div>
    )
  }
}

export default TodoListTasks;