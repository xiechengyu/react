import React, { Component, Fragment } from 'react';
import './style.css';
import Item from './AppItem';
import Boss from './Boss';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
	// 在某一时刻可以自动执行的函数就是生命周期函数
	// constructor是es6的语法，不是react特有的，可以当做初始化阶段
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		};
	}
	addList() {
		if (this.state.inputValue) {
			// this.setState()是虚拟dom的异步操作
			// ref正确获取ul里li的数量的方式是写在setState的回调函数中
			this.setState(
				{
					list: [ this.state.inputValue, ...this.state.list ],
					inputValue: ''
				},
				() => {
					console.log(this.ul.querySelectorAll('li').length);
				}
			);
		}
	}
	changeInput() {
		this.setState({
			inputValue: this.input.value
		});
	}
	deleteLi(index) {
		const list = this.state.list;
		list.splice(index, 1);
		this.setState({
			list: list
		});
	}
	// componentWillMount(){
	//   console.log("componentWillMount---组件将要挂载到页面")
	// }
	componentDidMount() {
		// console.log("componentDidMount---组件已经挂载到页面")
		axios
			.get('https://www.easy-mock.com/mock/5d2837210834293d47c068fb/example/Demo1')
			.then((res) => {
				console.log('获取数据成果' + JSON.stringify(res.data));
				this.setState({
					list: res.data.data
				});
			})
			.catch((e) => {
				console.log('获取数据失败' + e);
			});
	}
	// shouldComponentUpdate(){
	//   console.log("shouldComponentUpdate---组件更新前")
	//   // 需要返回一个Boolean值 true执行 false不执行
	//   // 在优化组件性能有作用
	//   return true
	// }
	// componentWillUpdate(){
	//   console.log("componentWillUpdate---在shouldComponentUpdate执行后执行")
	// }
	// componentDidUpdate(){
	//   console.log("componentDidUpdate---在render执行后执行")
	// }
	render() {
		// console.log("render---组件挂载中")
		return (
			<Fragment>
				{/* haha */}
				<label htmlFor="in">
					点点点：
					<input
						id="in"
						placeholder="请输入"
						value={this.state.inputValue}
						onChange={this.changeInput.bind(this)}
						ref={(input) => {
							this.input = input;
						}}
					/>
					<button onClick={this.addList.bind(this)}>确定</button>
				</label>
				<ul
					ref={(ul) => {
						this.ul = ul;
					}}
				>
					<TransitionGroup>
						{this.state.list.map((item, index) => {
							return (
								// 无法直接让子组件向父组件传值，只能从父组件向子组件传值和方法
								// 单向数据流，父组件传递给子组件，在子组件中只能读不能修改
								// 函数式编程  1、每一个函数代表一个功能，代码清晰  2、更容易实现前端自动化测试
								<CSSTransition
                  timeout={2000}
                  classNames="boss-text"
                  unmountOnExit
                  key={item + index}
                  appear={true}
                >
									<Item
										content={item}
										index={index}
										deleteLi={this.deleteLi.bind(this)}
									/>
								</CSSTransition>
							);
						})}
					</TransitionGroup>
				</ul>
				<Boss />
			</Fragment>
		);
	}
}

export default App;
