import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import reducer from "./reducer";

// 利用compose创造一个增强函数  相当于建立了一个链式函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, enhancer); // 创建数据存储仓库);

export default store;
