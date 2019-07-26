import React, { PureComponent } from 'react';
import {withRouter} from 'react-router-dom'
import './style.scss'

class Detail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="detail">
                detail{this.props.match.params.id}~
            </div>
         );
    }
}
 
export default withRouter(Detail);