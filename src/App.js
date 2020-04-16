import React from 'react';
import css from './App.module.css';
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className={css.app}>
      <Counter />
    </div>
  );
}

export default App;
