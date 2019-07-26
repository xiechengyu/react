import React, { PureComponent } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../../component/header/store/actionCreators';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		if (this.props.loginStatus) {
			return <Redirect to="/" />;
		} else {
			return (
				<div className="login">
					login~~
					<div className="login__box" onClick={this.props.loginIn}>
						点击登录
					</div>
				</div>
			);
		}
	}
}

const mapState = (state) => {
	return {
		loginStatus: state.getIn([ 'header', 'loginStatus' ])
	};
};
const mapDispatch = (dispatch) => {
	return {
		loginIn() {
			dispatch(actionCreators.loginIn());
		}
	};
};

export default connect(mapState, mapDispatch)(Login);
