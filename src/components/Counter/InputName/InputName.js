import React from 'react';
import css from './InputName.module.css';

class InputName extends React.Component {

  render = () => {
    let errorClass = this.props.state.error ? 'error' : '';
    return (
      <div className={css.input}>
        <input type="text" placeholder='Write name'
               className={css[errorClass]}
               onKeyPress={this.props.onKeyPress}
               onChange={this.props.changeTitle}
               value={this.props.state.title}
               autoFocus={true}/>
      </div>
    );
  }
}

export default InputName;

//className={this.props.title === ''? 'error': ''}
