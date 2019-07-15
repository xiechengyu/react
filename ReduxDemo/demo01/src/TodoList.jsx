import React, { Component } from "react";
import TodoListUI from "./TodoListUI";
import store from "./store/index";
import { changeInput, addList, deleteItem,getList } from "./store/actionCreators";
import axios from 'axios'

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
    axios('https://www.easy-mock.com/mock/5d2c904f8d71b63bc63de269/xiechengyu/Demo1').then((res)=>{
      console.log(res)
      if(res.status === 200){
        const action = getList(res)
        store.dispatch(action)
      }
    }).catch((e) =>{
      alert(`出现错误：${e}`)
    })
  }
  render() {
    return (
      <div>
        <div>
          <TodoListUI
            changeValue={this.changeValue}
            inputValue={this.state.inputValue}
            addList={this.addList}
            list={this.state.list}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
