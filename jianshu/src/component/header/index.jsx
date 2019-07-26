import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import logo from './img/logo.png';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
		this.showTab = this.showTab.bind(this);
		this.loginIcon = this.loginIcon.bind(this);
	}
	showTab() {
		const { focused, inputList, page, tab } = this.props;
		const newList = inputList.toJS();
		const pageList = [];
		for (let i = page * 10; i < (page + 1) * 10; i++) {
			if (newList[i]) {
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
						<span
							className="inputTab__top--btn"
							onClick={() => {
								this.props.changePage(page, this.icon);
							}}
						>
							<i
								ref={(icon) => {
									this.icon = icon;
								}}
								className="iconfont"
							>
								&#xe63f;
							</i>
							换一批
						</span>
					</div>
					<div className="inputTab__bottom">{pageList}</div>
				</dir>
			);
		} else {
			return null;
		}
	}
	loginIcon() {
		if (this.props.loginStatus) {
			return (
				<span className="denglu" onClick={this.props.loginOut} style={{ cursor: 'pointer' }}>
					退出
				</span>
			);
		} else {
			return (
				<Link to="/login" className="denglu">
					登录
				</Link>
			);
		}
	}
	writeIcon() {
		if (this.props.loginStatus) {
			return (
				<Link to="/write" className="wenzhang">
					<i className="iconfont">&#xe608;</i>写文章
				</Link>
			);
		} else {
			return (
				<Link to="/login" className="wenzhang">
					<i className="iconfont">&#xe608;</i>写文章
				</Link>
			);
		}
	}
	componentDidMount() {
		this.props.loginFun()
	}
	render() {
		return (
			<div className="haeder">
				<div className="haeder__content">
					<div className="haeder__content--left">
						<Link to="/" className="logo">
							<img src={logo} alt="" />
						</Link>
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
							<p
								className="sousuo"
								onFocus={() => {
									this.props.inputFocus(this.props.inputList);
								}}
								onBlur={this.props.inputBlur}
							>
								<input type="text" placeholder="搜索" />
								<i className="iconfont">&#xe638;</i>
							</p>
						</CSSTransition>
						{this.showTab()}
					</div>
					<div className="haeder__content--right">
						<i className="iconfont aa">&#xe636;</i>
						<i className="iconfont beta">&#xe609;</i>
						{this.loginIcon()}
						<Link to="/" className="zhuce">
							注册
						</Link>
						{this.writeIcon()}
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
		tab: state.getIn([ 'header', 'tab' ]),
		loginStatus: state.getIn([ 'header', 'loginStatus' ])
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		inputFocus(list) {
			if (list.size === 0) {
				dispatch(actionCreators.getInputList());
			}
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
		changePage(page, icon) {
			icon.style.transform = `rotate(${page * -360}deg)`;
			dispatch(actionCreators.changePage());
		},
		loginOut() {
			dispatch(actionCreators.loginOut());
		},
		loginFun(){
			dispatch(actionCreators.loginFun());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
