import React from "react";
import Info from "../../../Counter/info/Info";


class TodoListTask extends React.Component {
  state = {
    isEditMode: false,
    hovering: false
  };
  date = new Date().toLocaleTimeString('en', {day: 'numeric',month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric'});
  /*dateFunc = () => {
    this.setState(date ,() => {
      this.date
    })
  }*/
  activatedEditMode = () => {
    this.setState({isEditMode: true})
  };
  deActivatedEditMode = () => {
    this.setState({isEditMode: false})
  };

  onIsDoneChanged = (e) => {
    this.props.changeStatus(this.props.task.id, e.currentTarget.checked, this.date);

  };

  onTitleChanged = (e) => {
    this.props.changeTitle(this.props.task.id, e.currentTarget.value)
  };

  onPriorityChange = (e) => {
    this.props.changePriority(this.props.task.id, e.currentTarget.value)
  };

  onTitleDelete = () => {
    this.props.deleteTitle(this.props.task.id);
  };

  mouseOver = () => {
    this.setState({hovering: !this.state.hovering});
  };
  mouseOut = () => {
    this.setState({hovering: false});
  };

  render = () => {
    let taskIsDoneClass = this.props.task.isDone ? 'todoList-task done' : 'todoList-task';
    return (
      <div className={taskIsDoneClass}>
        <input
          type="checkbox"
          checked={this.props.task.isDone}
          onChange={this.onIsDoneChanged}/>
        {this.state.isEditMode
          ? <input
            value={this.props.task.title}
            autoFocus={true}
            onBlur={this.deActivatedEditMode}
            onChange={this.onTitleChanged}/>
          : <span onClick={this.activatedEditMode}
                  onMouseOver={this.mouseOver}
                  onMouseLeave={this.mouseOut}> {this.props.task.title}</span>}
        {this.state.hovering === true
          ? <Info task={this.props.task}/>
          : null}
        <span>{` priority: ${this.props.task.priority}`}</span>
        <select value={this.props.task.priority} onChange={this.onPriorityChange}>
          <option value='high'>high</option>
          <option value='medium'>medium</option>
          <option value='low'>low</option>
        </select>
        <button onClick={this.onTitleDelete}>delete</button>
      </div>
    )
  }
}

export default TodoListTask;