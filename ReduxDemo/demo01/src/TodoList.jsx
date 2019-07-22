import React, { Component, Fragment } from 'react';
import TodoListUI from './TodoListUI';
import store from './store/index';
import { changeInput, addList, deleteItem, getMyList } from './store/actionCreators';

// 组件逻辑部分的编写
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.changeValue = this.changeValue.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.addList = this.addList.bind(this);
		this.storeChange = this.storeChange.bind(this);
		// 订阅模式
		store.subscribe(this.storeChange);
	}
	changeValue(e) {
		const action = changeInput(e.target.value);
		store.dispatch(action);
	}
	storeChange() {
		this.setState(store.getState());
	}
	addList() {
		const action = addList();
		store.dispatch(action);
	}
	deleteItem(index) {
		const action = deleteItem(index);
		store.dispatch(action);
	}
	componentDidMount() {
		const action = getMyList();
		store.dispatch(action);
	}
	render() {
		return (
			<Fragment>
				<TodoListUI
					changeValue={this.changeValue}
					inputValue={this.state.inputValue}
					addList={this.addList}
					list={this.state.list}
					deleteItem={this.deleteItem}
				/>
			</Fragment>
		);
	}
}

export default TodoList;
