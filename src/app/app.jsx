import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//引入组件
import Home from "../pages/home/home.jsx";
import School from "../pages/school/school.jsx";
import Course from "../pages/course/course.jsx";
import Super from "../pages/super/super.jsx";
import Community from "../pages/community/community.jsx";
import Information from "../pages/information/information.jsx";
import Header from "../components/header/header.jsx";

import "./app.less";
export default class App extends Component {
	render() {
		return (
			<div>
				<Header></Header>
				<Switch>
					<Route path="/school" component={School}></Route>
					<Route path="/course/:id" component={Course}></Route>
					<Route path="/super" component={Super}></Route>
					<Route path="/community" component={Community}></Route>
					<Route path="/information" component={Information}></Route>
					<Route path="/*" component={Home}></Route>
				</Switch>
			</div>
		)
	}
}