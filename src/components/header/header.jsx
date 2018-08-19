//引入react
import React, { Component } from "react";
import { Route, Switch, Link, Router, HashHistory } from "react-router-dom";
import "./header.less";
//定义组件
export default class Header extends Component {
	render () {
		return (
			<div className="header">
				<ul>
					<li>
						<Link to="/">首页</Link>
					</li>
					<li>
						<Link to="/school">网校</Link>
					</li>
					<li>
						<Link to="/course/01">教程</Link>
					</li>
					<li>
						<Link to="/super">大触</Link>
					</li>
					<li>
						<Link to="/community">社区</Link>
					</li>
					<li>
						<Link to="/information">资讯</Link>
					</li>
				</ul>
			</div>
		)
	}
}