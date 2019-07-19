import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import logo from './img/logo.png';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

class Header extends Component {
	constructor(props) {
		super(props);
		this.showTab = this.showTab.bind(this);
	}
	showTab() {
		const { focused, inputList, page, tab } = this.props;
		const newList = inputList.toJS();
		const pageList = [];
		for (let i = page * 10; i < (page+1) * 10; i++) {
			if(newList[i]){
				pageList.push(
					<span key={newList[i]} className="inputTab__bottom--item">
						{newList[i]}
					</span>
				);
			}
		}
		if (focused || tab) {
			return (
				<dir className="inputTab" onMouseEnter={this.props.tabShow} onMouseLeave={this.props.tabHide}>
					<div className="inputTab__top">
						<span className="inputTab__top--title">热门搜索</span>
						<span className="inputTab__top--btn" onClick={this.props.changePage}>换一批</span>
					</div>
					<div className="inputTab__bottom">{pageList}</div>
				</dir>
			);
		} else {
			return null;
		}
	}
	render() {
		return (
			<div className="haeder">
				<div className="haeder__content">
					<div className="haeder__content--left">
						<a href="/" className="logo">
							<img src={logo} alt="" />
						</a>
						<a href="/" className="shouye">
							首页
						</a>
						<a
							href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps"
							className="xiazai"
						>
							下载App
						</a>
						<CSSTransition timeout={200} in={this.props.focused} classNames="slide">
							<p className="sousuo" onFocus={this.props.inputFocus} onBlur={this.props.inputBlur}>
								<input type="text" placeholder="搜索" />
								<i className="iconfont">&#xe638;</i>
							</p>
						</CSSTransition>
						{this.showTab()}
					</div>
					<div className="haeder__content--right">
						<i className="iconfont aa">&#xe636;</i>
						<i className="iconfont beta">&#xe609;</i>
						<a href="/" className="denglu">
							登录
						</a>
						<a href="/" className="zhuce">
							注册
						</a>
						<a href="/" className="wenzhang">
							<i className="iconfont">&#xe608;</i>写文章
						</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn([ 'header', 'focused' ]),
		inputList: state.getIn([ 'header', 'inputList' ]),
		page: state.getIn([ 'header', 'page' ]),
		tab: state.getIn([ 'header', 'tab' ])
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		inputFocus() {
			dispatch(actionCreators.getInputList());
			dispatch(actionCreators.inputFocus());
		},
		inputBlur() {
			dispatch(actionCreators.inputBlur());
		},
		tabShow() {
			dispatch(actionCreators.tabShow());
		},
		tabHide() {
			dispatch(actionCreators.tabHide());
		},
		changePage() {
			dispatch(actionCreators.changePage());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
