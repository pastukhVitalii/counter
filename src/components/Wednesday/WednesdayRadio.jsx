import React from 'react';

class WednesdayRadio extends React.Component {

  isThemeChanged = (e) => {

    this.props.onThemeChanged(this.props.id, e.currentTarget.checked, this.props.id)
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>
          <input type='radio'
                 name='radio'
                 onChange={this.isThemeChanged}
                 id={this.props.id}
                 checked={this.props.checked}/>
          {this.props.name}
        </label>
      </div>
    );
  }
}

export default WednesdayRadio;