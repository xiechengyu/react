import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppItem extends Component {
	// state = {  }
	constructor(props) {
		super(props);
		this.handClick = this.handClick.bind(this);
	}
	// componentWillReceiveProps ：组件第一次存在于dom中，函数是不会被执行的
	// 如果已经存在于dom中，函数才会被执行
	// 在工作中用的不多
	// componentWillReceiveProps(){
	// 	console.log("componentWillReceiveProps")
	// }
	// componentWillUnmount(){
	//   console.log("componentWillUnmount--组件被删除前执行")
	// }
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.content !== this.props.content) {
			return true;
		} else {
			return false;
		}
	}
	render() {
		return (
			<li onClick={this.handClick}>
				{this.props.avName}--{this.props.content}
			</li>
		);
	}
	handClick() {
		this.props.deleteLi(this.props.index);
	}
}
// 限制父组件给子组件传递属性的类型 对其进行校验
AppItem.propTypes = {
	avName: PropTypes.string.isRequired,
	content: PropTypes.string,
	index: PropTypes.number,
	deleteLi: PropTypes.func
};
AppItem.defaultProps = {
	avName: '嘻嘻嘻'
};

export default AppItem;
