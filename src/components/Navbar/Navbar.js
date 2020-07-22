import React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {

  render = () => {
    return (
      <nav className={css.nav_bar}>
        <input type='checkbox' id="hmt" className={css.hidden_menu_ticker}/>
          <label className={css.btn_menu} htmlFor="hmt">
            <span className={css.first}></span>
            <span className={css.second}></span>
            <span className={css.third}></span>
          </label>
          <div className={css.hidden_menu}>
            <NavLink to='/monday' activeClassName={css.activeLink}>Monday</NavLink>
            <NavLink to='/tuesday' activeClassName={css.activeLink}>Tuesday</NavLink>
          </div>
      </nav>
    );
  }
}

export default Navbar;
