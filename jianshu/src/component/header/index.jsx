import React, { Component } from "react";
import "./style.scss";
import logo from "./img/logo.png";
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputShow:false
    };
    this.inputFocus = this.inputFocus.bind(this)
    this.inputBlur = this.inputBlur.bind(this)
  }
  inputFocus(){
    this.setState({
      inputShow:true
    })
  }
  inputBlur(){
    this.setState({
      inputShow:false
    })
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
            <CSSTransition
              timeout={200}
              in={this.state.inputShow}
              classNames="slide"
            >
              <p className="sousuo">
                <input type="text" placeholder="搜索" onFocus={this.inputFocus} onBlur={this.inputBlur}/>
                <i className="iconfont">&#xe638;</i>
              </p>
            </CSSTransition>
          </div>
          <div className="haeder__content--right">
            <i className="iconfont">&#xe636;</i>
            <i className="iconfont">&#xe609;</i>
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

export default Header;
