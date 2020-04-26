import React from 'react';
import css from './Conter.module.css';
import Number from "./Number/Number";
import Button from "./Button/Button";
import InputName from "./InputName/InputName";
import NameList from "./NameList/NameList";

class Counter extends React.Component {

  render = () => {
    return (
      <div className={css.counter}>
        <Number state={this.props.state} />
        <InputName addNameRef={this.props.addNameRef}/>
        <Button state={this.props.state} clickFunc={this.props.clickFunc} />
        <NameList state={this.props.state} namesArr={this.props.namesArr}/>
      </div>
    );
  }
}

export default Counter;
