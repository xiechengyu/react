import React, { Component } from 'react';
import './style.scss'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
               <div className="home__left"></div>
               <div className="home__right"></div>
            </div>
         );
    }
}
 
export default Home;