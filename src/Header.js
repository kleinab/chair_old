import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo" alt="logo"></div>
        <div className="sign-out">Sign Out</div>
      </div>
    )
  }
}

export default Header;
