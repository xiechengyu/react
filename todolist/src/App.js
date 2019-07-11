import React, { Component, Fragment } from "react";
import "./style.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["肉肉", "小可爱"]
    };
  }
  addList() {
    this.setState({
      list: [this.state.inputValue, ...this.state.list]
    });
  }
  changeInput(v) {
    this.setState({
      inputValue: v.target.value
    });
  }
  deleteLi(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
  render() {
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
          />
          <button onClick={this.addList.bind(this)}>确定</button>
        </label>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                className="liName"
                onClick={this.deleteLi.bind(this, index)}
                key={index+item}
                dangerouslySetInnerHTML={{__html:item}}
              >
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default App;
