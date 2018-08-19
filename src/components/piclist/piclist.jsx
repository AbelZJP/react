
import axios from "axios";
import CourseList from "../courselist/courselist.jsx";
import "../courselist/courselist.less";
import "./piclist.less"
//定义新组件继承要复用的CourseList组件
export default class PicList extends CourseList {
	//重新请求数据
	// componentDidMount(){
	// 	axios.get("data/course/piclist.json")
	// 	.then(({data}) => this.setState({picList: data}))
	// }
}