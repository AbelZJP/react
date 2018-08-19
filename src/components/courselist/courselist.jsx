import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./courselist.less";
export default class CourseList extends Component {

	createList() {
		return this.props.list.map((item, index) => (
			<li key={index}>
				<div className="top">
					<a className="img" href="javascript:;">
						<img src={item.img} alt=""/>
					</a>
					<p>
						<a href="javascript:void(0);">{item.text}</a>
					</p>
					<div className="tag">
						<a href="javascript:;">{item.tag}</a>
						<span>{item.price}</span>
					</div>
				</div>
				<div className="bottom">
					<a href="javascript:;">
						<img src={item.author_img} alt=""/>
						<span>{item.author}</span>
					</a>
				</div>
			</li>
		))		
	}
	render () {
		console.log(this.props.list)
		return (
			<div className="video">
				<ul className="courseList">
					{this.createList()}
				</ul>		
			</div>
		)
	}

	componentDidMount() {
		//console.log(this)

	}
}



