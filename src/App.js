import React from 'react';
import css from './App.module.css';
import Counter from "./components/Counter/Counter";
import {HashRouter, Route} from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import Navbar from "./components/Navbar/Navbar";
import {connect} from "react-redux";

class App extends React.Component {

  /*state = {
    loading: true
  }*/

  componentDidMount() {
    if (this.props.loading === true) {
      setTimeout(() => {
        this.props.isFetching();
      }, 300)
    }
  }

  render() {
    return (
      <>
        {this.props.loading ? <div>loading...</div>
          : <HashRouter basename='/main'>
            <div className={css.app}>
              <Route path='/' render={() => <Navbar/>}/>
              <Route path='/monday' render={() => <Counter/>}/>
              <Route path='/tuesday' render={() => <TodoList/>}/>
            </div>
          </HashRouter>}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    isFetching(loading) {
      let action = {type: 'SET_LOADING', loading: false};
      dispatch(action);
    }
  }
}

let connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedApp;
