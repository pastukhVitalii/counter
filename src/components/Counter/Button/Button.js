import React from 'react';
import css from './Button.module.css'

class Button extends React.Component {
  render = () => {
    return (
      <div className={css.btn}>
        <button onClick={this.props.clickFunc}>Add</button>
      </div>
    );
  }
}

export default Button;
