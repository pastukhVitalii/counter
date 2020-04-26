import React from 'react';
import  css from './Number.module.css'

class Number extends React.Component {

  render = () => {
    return (
      <div className={css.num}>
        <span>{this.props.state.count}</span>
      </div>
    );
  }
}

export default Number;
