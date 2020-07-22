import React from 'react';
import css from './Info.module.css'

class Info extends React.Component {
  render = () => {
    return (
      <div className={css.info_block}>
        <div>Name: {this.props.task.title}</div>
        <div>created: {this.props.task.created}</div>
        {this.props.task.updated? <div>updated: {this.props.task.updated}</div>: null}
        {this.props.task.isDone? <div>finished: {this.props.task.finished}</div>: null}
      </div>
    );
  }
}

export default Info;
