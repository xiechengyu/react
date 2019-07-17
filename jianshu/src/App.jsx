import React, { Component,Fragment } from 'react';
import Header from './component/header';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Fragment>
				<Header />
			</Fragment>
		);
	}
}

export default App;
