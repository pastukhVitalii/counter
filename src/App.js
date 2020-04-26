import React from 'react';
import css from './App.module.css';
import Counter from "./components/Counter/Counter";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.addNameRef = React.createRef();
  }

  state = {
    count: 0,
    names: [
      {name: null}
    ]
  };

  onClickFunc = () => {
    // debugger;
    let newTitle = this.addNameRef.current.value;
    let newName = {name: newTitle};
    let copyNames = [...this.state.names, newName];
    if (newTitle !== ''  && isNaN(newTitle[0])) {
      this.setState({names: copyNames});
      this.setState({count: this.state.count + 1});
      this.addNameRef.current.value = '';
    } else {
      alert("Write name!!! The first character cannot be a number");
    }
  };

  render() {
    let namesArr = this.state.names.map((elem, index) => {
      if (index > 0) {
        return <div key={index}> {`${index}.  ${elem.name}`}  </div>
      }
    });
    return (
      <div className={css.app}>
        <Counter
          state={this.state}
          clickFunc={this.onClickFunc}
          addNameRef={this.addNameRef}
          namesArr={namesArr}/>
      </div>
    );
  }
}

export default App;
