import React from 'react';
import css from './App.module.css';
import Counter from "./components/Counter/Counter";
import {HashRouter, Route} from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    if (this.state.loading === true) {
      setTimeout(() => {
        this.setState({loading: false})
      }, 300)
    }
  }

  render() {
    return (
      <>
        {this.state.loading? <div>loading...</div>
          :<HashRouter basename='/main'>
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

export default App;
