import React from 'react';
import css from './Conter.module.css';
import Number from "./Number/Number";
import NameList from "./NameList/NameList";
import AddForm from "./AddForm/AddForm";

class Counter extends React.Component {

    state = {
    count: 0,
    names: []
  };

  addNewName = (name) => {
    // debugger;
    let copyNames = [...this.state.names, name];
    this.setState({names: copyNames, count: this.state.count + 1});
  };
//,
//       () => saveState()
  /*onKeyPress = (e) => {
    // debugger;
    if (e.key === 'Enter') {
      this.setState({title: e.currentTarget.value});
      this.onClickFunc();
    }
  };*/

  /*changeTitle = (e) => {
    this.setState({title: e.currentTarget.value});
  };*/

  /*saveState = () => {
    let stateAsString = JSON.stringify(this.props.state);
    localStorage.setItem('state', stateAsString)
  }

  restoreState = () => {
    let stateAsString = localStorage.getItem('state');
    if (stateAsString) {
    let state = JSON.parse(stateAsString);
      this.setState(state);
    }
  }
  componentDidMount() {
    restoreState();
  }*/

  render = () => {
    let namesArr = this.state.names.map((elem) => {
      return <div> {elem} </div>
    });

    return (
      <div className={css.counter}>
        <Number state={this.state} />
        {/*<InputName
          clickFunc={this.onClickFunc}
          changeTitle={this.changeTitle}
          title={this.state.title}
          onKeyPress={this.onKeyPress}
        />*/}
        <AddForm addNewName={this.addNewName}
                 changeTitle={this.changeTitle}
                 state={this.state}
                 onKeyPress={this.onKeyPress} />
        {/*<Info state={this.state} clickFunc={this.onClickFunc} />*/}
        <NameList state={this.state} namesArr={namesArr} />
      </div>
    );
  }
}

export default Counter;
