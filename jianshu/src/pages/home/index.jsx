import React, { PureComponent } from 'react';
import './style.scss';
import List from './components/list';
import Author from './components/author';
import Download from './components/download';
import Tab from './components/tab';
import ToTop from './components/toTop';

class Home extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="home">
				<div className="home__left">
					<img
						className="home__left--img"
						src="https://upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
						alt=""
					/>
					<List />
				</div>
				<div className="home__right">
					<Tab />
					<Download />
					<Author />
				</div>
				<ToTop />
			</div>
		);
	}
}

export default Home;
