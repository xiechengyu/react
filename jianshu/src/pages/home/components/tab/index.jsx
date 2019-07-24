import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.scss'

class Tab extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="tab">
				<div className="board">{this.props.imgList.map((item) => <img key={item} src={item} alt="" />)}</div>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		imgList: state.getIn([ 'home', 'imgList' ])
	};
};
export default connect(mapState, null)(Tab);
