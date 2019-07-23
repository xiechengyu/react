import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';

class Author extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.getList = this.getList.bind(this);
	}
	componentDidMount() {
		this.props.getAuthorList(this.props.page);
	}
	getList() {
		const newList = this.props.authorList.toJS();
		const pageList = [];
		for (let i = this.props.page * 5; i < (this.props.page + 1) * 5; i++) {
			if (newList[i]) {
				pageList.push(
					// const zi = `${Math.ceil(item.total_wordage / 1000)}k`;
					// const xihuan = `${Math.ceil(item.total_likes_count / 1000)}k`;
					<div className="author__item" key={newList[i].id}>
						<div className="author__item--left">
							<img src={newList[i].avatar_source} alt="" />
							<div className="author__item--cont">
								<p>{newList[i].nickname}</p>
								<span>写了{newList[i].total_wordage}字</span>
								<span>{newList[i].total_likes_count}喜欢</span>
							</div>
						</div>
						<div className="author__item--right">
							<span>+ 关注</span>
						</div>
					</div>
				);
			}
		}
		return pageList;
	}
	render() {
		return (
			<div className="author">
				<div className="author__title">
					<span className="author__title-1">推荐作者</span>
					<span
						className="author__title-2"
						onClick={() => this.props.changeAuthorPage(this.props.page, this.icon)}
					>
						<i
							ref={(icon) => {
								this.icon = icon;
							}}
							className="iconfont"
						>
							&#xe63f;
						</i>
						换一批
					</span>
				</div>
				{this.getList()}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		authorList: state.getIn([ 'home', 'authorList' ]),
		page: state.getIn([ 'home', 'authorPage' ])
	};
};
const mapDispatch = (dispatch) => {
	return {
		getAuthorList() {
			dispatch(actionCreators.getAuthorList());
		},
		changeAuthorPage(page, icon) {
			icon.style.transform = `rotate(${page * -360}deg)`;
			dispatch(actionCreators.changeAuthor(page));
		}
	};
};

export default connect(mapState, mapDispatch)(Author);
