import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// list:this.props.get("list")
		};
		this.getListS = this.getListS.bind(this);
	}
	componentDidMount() {
		this.props.getList();
		console.log(this.props.list)
	}
	getListS() {
		this.props.list.push(this.props.list);
	}
	render() {
		return (
			<div className="list">
				{this.props.list.map((item, index) => (
					<div className="list__item" key={index}>
						<div className="list__item--left">
							<h3 className="list__item--left-title">{item.get('title')}</h3>
							<p className="list__item--left-p">{item.get('desc')}</p>
							<div className="list__item--left-meta">
								<span className="list__item--left-meta-1">{item.get('meta1')}</span>
								<span className="list__item--left-meta-2">{item.get('meta2')}</span>
								<span className="list__item--left-meta-3">{item.get('meta3')}</span>
								<span className="list__item--left-meta-4">{item.get('meta4')}</span>
							</div>
						</div>
						<img src={item.get('imgUrl')} className="list__item--right" alt="" />
					</div>
				))}
				<div className="list__more" onClick={this.props.getMore}>
					阅读更多
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.getIn([ 'home', 'list' ])
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getList() {
			dispatch(actionCreators.getArticleList());
		},
		getMore() {
		  dispatch(actionCreators.getMore());
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
