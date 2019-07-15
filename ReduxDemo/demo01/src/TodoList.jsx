import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';
import { changeInput, addList, deleteItem } from './store/actionCreators';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.changeValue = this.changeValue.bind(this);
		this.addList = this.addList.bind(this);
		this.storeChange = this.storeChange.bind(this);
		// 订阅模式
		store.subscribe(this.storeChange);
	}
	changeValue(e) {
		const action = changeInput(e.target.value);
		store.dispatch(action);
		// this.setState({
		//   inputValue:this.input.value
		// })
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
	render() {
		return (
			<div>
				<div>
					<Input
						placeholder="write something"
						style={{ width: '250px', marginRight: '10px' }}
						onChange={this.changeValue}
						// ref={(input)=>{this.input=input}}
						value={this.state.inputValue}
					/>
					<Button type="primary" onClick={this.addList}>
						增加
					</Button>
					<div style={{ margin: '10px', width: '300px' }} />
					<List
						bordered
						dataSource={this.state.list}
						renderItem={(item, index) => (
							<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>
						)}
						style={{ width: '300px' }}
					/>
				</div>
			</div>
		);
	}
}

export default TodoList;
