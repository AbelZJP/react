//引入react
import React, { Component } from "react";
import { render } from "react-dom";
//引入导航
import { Link, Switch,Route, HashRouter } from "react-router-dom";
//引入axiox库
import axios from "axios";
//引入courselist组件
import CourseList from "../../components/courselist/courselist.jsx";
//引入piclist组件
import PicList from "../../components/piclist/piclist.jsx";
import "./course.less";
//定义组件
export default class Course extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	//创建标题列表
	createList() {
		//console.log(this.state.data)
		return this.state.data.map((item, index) => (
			<li onClick={this.changeTitle}  key={index} >
				<Link to={"/course/"+item.id}>
					{item.title}
					<span></span>
				</Link>
			</li>
		))		
	}
	render() {
		return (
			<div className="course">
				<img className="banner" src="http://assets-cdn.lanqb.com/pc_community/community-banner.png" alt=""/>
				<ul className="title">
					{this.createList()}
				</ul>
				<Switch>
					<Route path="/course/01" component={Index}></Route>
					<Route path="/course/02" component={Video}></Route>
					<Route path="/course/03" component={Picture}></Route>
				</Switch>		
			</div>
		)
	}
	componentDidMount() {
		axios.get("data/course/title.json")
		//监听返回并存储数据
		.then(({data}) => this.setState({data}))
	}
	
}
class Index extends Component {
	//初始化状态
	constructor(props) {
		super(props);
		this.state = {
			// data: [],
			topicList: [],
			list:[],
			picList: [],
			soft: []
		}
	}
	changeTitle(e) {
		//console.log(e.currentTarget)
		 let lis = document.getElementsByTagName("li");
		 for (var i = 0; i < lis.length; i++) {
		 	 lis[i].className = "";	
		 }
		 e.currentTarget.className = "active";
		// this.setState({num: index})
	}
	// //创建标题列表
	// createList() {
	// 	//console.log(this.state.data)
	// 	return this.state.data.map((item, index) => (
	// 		<li onClick={this.changeTitle}  key={index} >
	// 			<Link to={"/course/"+item.id}>
	// 				{item.title}
	// 				<span></span>
	// 			</Link>
	// 		</li>
	// 	))		
	// }
	createTopList() {
		//console.log(this.state.topicList)
		return this.state.topicList.map((item, index) => (
			<li key={index}>
				<Link to="/course/"><img src={item.img} alt=""/></Link>
			</li>
		))
	}
	createSoftList() {
		return this.state.soft.map((item, index) => (
			<li key={index}>
				<Link to="/course/">
					<img src={item.img} alt=""/>
					<span>{item.num}</span>
					<p>{item.text}</p>
				</Link>
			</li>
		))
	}
	render() {
		return (
			<div>
				<div className="topicList">
				<img className="icon" src="http://assets-cdn.lanqb.com/pc_course/course_icon01.png" alt=""/>
				<h2 className="topicTitle">精彩专题</h2>
				<ul className="list">
					{this.createTopList()}
				</ul>
				<div className="more"><a href="javascript:void(0);">更多</a></div>
				</div>
				<div className="videoList">
					<div className="wrap">
						<img className="icon" src="http://assets-cdn.lanqb.com/pc_course/course_icon02.png" alt=""/>
						<h2 className="topicTitle">视频教程</h2>
						<CourseList list={this.state.list}></CourseList>
					</div>
					<div className="more"><a href="javascript:void(0);">更多</a></div>
				</div>
				<div className="videoList piclist">
					<div className="wrap">
						<img className="icon" src="http://assets-cdn.lanqb.com/pc_course/course_icon03.png" alt=""/>
						<h2 className="topicTitle">图文教程</h2>
						<PicList list={this.state.picList}></PicList>
					</div>
					<div className="more"><a href="javascript:void(0);">更多</a></div>
				</div>
				<div className="videoList">
					<div className="wrap wrap1">
						<img className="icon" src="http://assets-cdn.lanqb.com/pc_course/course_icon04.png" alt=""/>
						<h2 className="topicTitle">软件教程</h2>
						<ul className="softlist">{this.createSoftList()}</ul>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount() {
		axios.get("data/course/topic.json")
		.then(({data}) => this.setState({topicList: data}))
		//.then(({data}) => console.log(data))
		//.then((res) => console.log(res))
		axios.get("data/course/video.json")
		.then(({data}) => this.setState({list: data}))
		//.then(({data}) => console.log(data))
		axios.get("data/course/piclist.json")
		.then(({data}) => this.setState({picList: data}))
		axios.get('data/course/soft.json')
		.then(({data}) => this.setState({soft: data}))
	}

}
class Video extends Component {
	render() {
		return (
			<h1>video页面</h1>
		)
	}
}
class Picture extends Component {
	render() {
		return (
			<h1>picture页面</h1>
		)
	}
}

let routes = (
	<HashRouter>
		<Course></Course>
	</HashRouter>
)
render(routes, app)