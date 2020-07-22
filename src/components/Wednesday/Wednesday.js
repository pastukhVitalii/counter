import React from "react";
import {connect} from "react-redux";
import WednesdayRadio from "./WednesdayRadio";

class Wednesday extends React.Component {

  onThemeChanged = (id, picked, style) => {
    this.props.changeTheme(id, picked, style)
  }

  render = () => {
    let themes = this.props.themes.map(t => {
      return <WednesdayRadio onThemeChanged={this.onThemeChanged}
                             key={t.id}
                             id={t.id}
                             name={t.name}
                             checked={t.checked}/>
    })
    return (
      <div className={this.props.style.theme}>
        {themes}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    style: state.settings.style,
    themes: state.settings.themes
  }
}

const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    changeTheme(id, picked, style) {
      dispatch({type: 'CHANGE_THEME', id, picked, style})
    }
  }
}

let ConnectedWednesday = connect(mapStateToProps, mapDispatchToProps)(Wednesday);
export default ConnectedWednesday;