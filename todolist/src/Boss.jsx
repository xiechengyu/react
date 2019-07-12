import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

// react-transition-group 有以下三个库
// Transition
// CSSTransition
// TransitionGroup

class Boss extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow: true
		};
		this.toToggle = this.toToggle.bind(this);
	}
	render() {
		return (
			<div>
        {/* unmountOnExit出场时取出dom节点 */}
				<CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
          unmountOnExit
        >
					<div>Boss级人物--假假按揭</div>
				</CSSTransition>
				<div>
					<button onClick={this.toToggle}>召唤boss</button>
				</div>
			</div>
		);
	}
	toToggle() {
		this.setState({
			isShow: !this.state.isShow
		});
	}
}

export default Boss;
