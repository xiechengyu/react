# react

## 1 react基础

### 1.1 历史背景

- 传统web UI开发的问题	

- react：始终整体刷新页面

- flux：单向数据流
 ### 1.2 组件

- 以组件方式思考UI的构建

- 单一职责原则

- DRY原则
 ### 1.3 jsx优点
 - 声明式创建界面的直观
 - 代码动态创建界面的灵活
 - 无需学习新的模板语言

自定义组件以大写字母表示

### 1.4 生命周期

#### construction

- 用y初始化内部状态f很少使用 
- 唯一可以直接修改 state 的地方

#### getDerivedStateFromProps

不推荐使用

#### componentDidMount

渲染后，只执行一次，常用

#### componentWillUnmount

组件移除时

#### getSnapshotBeforeUpdate

获取render之前的dom状态

#### componentDidUpdate

每次ui更新时调用，根据 props变化改变

#### shouldComponentUpdate

一般又PureComponent自动实现用作性能优化

### 1.5 virtual Dom 及 Key

### 1.6 组件

### 1.7 context API

### 1.8 脚手架

#### create-react-app

入门级

#### rekit

拥有开发大型项目的能力

#### CodeSandbox

在线搭建

### 1.9 打包和部署



## 2 

