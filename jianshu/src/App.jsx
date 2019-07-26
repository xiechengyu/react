import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './component/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Write from './pages/write';
import Login from './pages/login';
import store from './store';

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Fragment>
						<Header />
						<Route path="/" exact component={Home} />
						<Route path="/detail:id" exact component={Detail} />
						<Route path="/write" exact component={Write} />
						<Route path="/login" exact component={Login} />
					</Fragment>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
