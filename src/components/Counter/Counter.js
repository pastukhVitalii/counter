import React from 'react';
import css from './Conter.module.css';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.addNameRef = React.createRef();
  }

  state = {
    count: 0
  };

  onClickFunc = () => {
    if (this.addNameRef.current.value !== '') {
      alert(this.addNameRef.current.value);
      this.addNameRef.current.value = '';
      let newCount = this.state.count + 1;
      this.setState({count: newCount});
    } else {
      alert("Write name!!!");
      this.addNameRef.current.value = '';
    }
  };

  render = () => {
    return (
      <div className={css.counter}>
        <span>{this.state.count}</span>
        <input type="text" ref={this.addNameRef} placeholder="Write name"/>
        <button onClick={this.onClickFunc}>Add</button>
      </div>
    );
  }
}

export default Counter;
