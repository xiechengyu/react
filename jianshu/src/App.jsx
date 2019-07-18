import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './component/header';
import store from './store';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Provider store={store}>
				<Header />
			</Provider>
		);
	}
}

export default App;
