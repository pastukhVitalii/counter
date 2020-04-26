import React from 'react';
import css from './NameList.module.css'

class NameList extends React.Component {

  render = () => {
    return (
      <div className={css.names}>
        <div>Names</div>
        <div>{this.props.namesArr}</div>
      </div>
    );
  }
}

export default NameList;
