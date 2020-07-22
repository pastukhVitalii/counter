import React from 'react';
import InputName from "../InputName/InputName";
import Button from "../Button/Button";

class AddForm extends React.Component {

  state = {
    title: '',
    error: false
  };

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onClickFunc();
    }
  };

  changeTitle = (e) => {
    this.setState({title: e.currentTarget.value, error: false});
  };

  onClickFunc = () => {
    if (this.state.title.trim() === '') {
      this.setState({error: true});
    } else {
      this.props.addNewName(this.state.title);
      this.setState({
        error: false,
        title: ''
      });
    }
  };

  render = () => {
    return (
      <>
        <InputName clickFunc={this.onClickFunc}
                   changeTitle={this.changeTitle}
                   state={this.state}
                   onKeyPress={this.onKeyPress}/>
        <Button clickFunc={this.onClickFunc}/>
      </>
    );
  }
}

export default AddForm;
