import React, { Component } from 'react';
import './Box.css';

const Header = () => {
  return (
    <div className="Header">
    <p>after</p>
    <p>school</p>
    <p>club</p>
    </div>
  );
};

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <Header/>
      </div>
    );
  }
};

export default Box;
