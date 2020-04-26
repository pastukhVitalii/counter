import React from 'react';
import css from './InputName.module.css';

class InputName extends React.Component {

    render = () => {
    return (
      <div className={css.input}>
        <input type="text"  placeholder="Write name" ref={this.props.addNameRef} />
      </div>
    );
  }
}

export default InputName;

