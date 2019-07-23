import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { showTab, hideTab } from '../../store/actionCreators';

class Download extends Component {
	constructor(props) {
		super(props);
        this.state = {};
        this.popup = this.popup.bind(this)
    }
    popup(){
        if(this.props.show){
            return(
				<div className="popup">
					<img src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
				</div>
            )
        }else{
            return null
        }
    }
	render() {
		return (
			<div className="download" onMouseEnter={this.props.showTab} onMouseLeave={this.props.hideTab}>
				<img src={this.props.qrUrl} alt="" />
				<div className="info">
					<div className="title">
						下载简书手机App<i>></i>
					</div>
					<div className="description">随时随地发现和创作内容</div>
				</div>
                {this.popup()}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		qrUrl: state.getIn([ 'home', 'qrUrl' ]),
		show: state.getIn([ 'home', 'showTab' ])
	};
};
const mapDispatch = (dispatch) => {
	return {
		showTab() {
			dispatch(showTab());
		},
		hideTab() {
			dispatch(hideTab());
		}
	};
};

export default connect(mapState, mapDispatch)(Download);
