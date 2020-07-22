import React from 'react';
import {restoreState, saveState} from '../../LocalStore';
import css from './TodoList.module.css';

import TodoListTasks from './TodoListTasks/TodoListTasks';
import TodoListFooter from './TodoListFooter/TodoListFooter';
import TodoListTitle from "./TodoListHeader/TodoListTitle";
import AddNewItemForm from "./TodoListHeader/AddNewItemForm";

class TodoList extends React.Component {

  state = {
    tasks: [],
    filterValue: "All"
  };
  nextTaskId = 1;

  saveLocalStorage = () => {
    saveState('state', this.state)
  }

  restoreLocalStorage = () => {
    let newState = restoreState('state', this.state);
    this.setState(newState, () => {
      this.state.tasks.forEach(t => {
          if (t.id >= this.nextTaskId) {
            this.nextTaskId = t.id + 1
          }
        }
      )
    })
  }

  componentDidMount() {
    this.restoreLocalStorage();
  };

  addTask = (newText) => {
    let newTask = {
      title: newText,
      isDone: false,
      priority: "low",
      id: this.nextTaskId,
      created: new Date().toLocaleTimeString('en', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }),
      updated: null
    };
    this.nextTaskId++;
    let newTasks = [...this.state.tasks, newTask];
    this.setState({tasks: newTasks}, this.saveLocalStorage);
  };

  changeFilter = (newFilterValue) => {
    this.setState({filterValue: newFilterValue});
  };

  changeStatus = (taskId, isDone, date) => {
    // debugger;
    this.changeTask(taskId, {
      isDone: isDone,
      finished: new Date().toLocaleTimeString('en', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
    });
  };

  changeTitle = (taskId, title) => {
    this.changeTask(taskId, {
      title: title,
      updated: new Date().toLocaleTimeString('en', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
    });
  };

  changePriority = (taskId, priority) => {
    // debugger;
    this.changeTask(taskId, {priority: priority,
      updated: new Date().toLocaleTimeString('en', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
    });
  }

  changeTask = (taskId, obj) => {
    let newTasks = this.state.tasks.map(t => {
      if (t.id === taskId) {
        return {...t, ...obj}
      }
      return t;
    });
    this.setState({tasks: newTasks}, this.saveLocalStorage)
  };

  deleteTitle = (taskId) => {
    let arr = this.state.tasks;
    let idt = arr.findIndex(el => el.id === taskId);
    let newArr = [...arr.slice(0, idt), ...arr.slice(idt + 1)];
    console.log(newArr);
    this.setState({tasks: newArr},
      this.saveLocalStorage);
  };

  render = () => {
    return (
      <div className="App">
        <div className="todoList">
          <div className="todoList-header">
            <TodoListTitle title={this.props.title}/>
            <AddNewItemForm addItem={this.addTask}/>
          </div>
          <TodoListTasks
            changeStatus={this.changeStatus}
            changeTitle={this.changeTitle}
            changePriority={this.changePriority}
            deleteTitle={this.deleteTitle}
            tasks={this.state.tasks.filter(t => {
              switch (this.state.filterValue) {
                case "Active":
                  return t.isDone === false;
                case "Completed":
                  return t.isDone === true;
                default:
                  return true;
              }
            })}

          />
          <TodoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
        </div>
      </div>
    );
  }
}

export default TodoList;