import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import logo from './img/logo.png';
import { CSSTransition } from 'react-transition-group';
import { actionCreators} from './store';

const Header = (props) => {
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
					<a href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps" className="xiazai">
						下载App
					</a>
					<CSSTransition timeout={200} in={props.focused} classNames="slide">
						<p className="sousuo">
							<input type="text" placeholder="搜索" onFocus={props.inputFocus} onBlur={props.inputBlur} />
							<i className="iconfont">&#xe638;</i>
						</p>
					</CSSTransition>
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
};

const mapStateToProps = (state) => {
	return {
		focused: state.header.focused
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		inputFocus() {
			dispatch(actionCreators.inputFocus());
		},
		inputBlur() {
			dispatch(actionCreators.inputBlur());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
