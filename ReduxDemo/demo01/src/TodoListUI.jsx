import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

// 组件ui部分的编写
const TodoListUI = (props) =>{
    return (
        <div>
            <div>
                <Input
                    placeholder="write something"
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeValue}
                    value={props.inputValue}
                />
                <Button type="primary" onClick={props.addList}>
                    增加
                </Button>
                <div style={{ margin: '10px', width: '300px' }} />
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>
                    )}
                    style={{ width: '300px' }}
                />
            </div>
        </div>
    );
}
 
export default TodoListUI;