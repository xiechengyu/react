import React, { Component } from 'react';
import './style.scss'
import logo from './img/logo.png'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="haeder">
        <a href="/" className="logo">
          <img src={logo} alt=""/>
        </a>
      </div>
     );
  }
}
 
export default Header;