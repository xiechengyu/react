import React, { PureComponent, Fragment } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import * as contants from '../../store/actionCreators';

class ToTop extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
		this.top = this.top.bind(this);
	}
	top() {
		window.scrollTo(0, 0);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.props.toggleTop);
	}
	render() {
		return (
			<Fragment>{this.props.showTop ? <div className="toTop" onClick={this.top}>顶部</div> : null}</Fragment>
		);
	}
}

const mapState = (state) => {
	return {
		showTop: state.getIn([ 'home', 'showTop' ])
	};
};
const mapDispatch = (dispatch) => {
	return {
		toggleTop() {
			if (document.documentElement.scrollTop > 100) {
				dispatch(contants.toggleTop(true));
			} else {
				dispatch(contants.toggleTop(false));
			}
		}
	};
};

export default connect(mapState, mapDispatch)(ToTop);
