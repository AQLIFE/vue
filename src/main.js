import {AQLIFE,Code,Link,Action,Error,Nav}  from "./App.js";
// import ask from "../JS/getJSON.js";

// 2. 定义路由
// 每个路由应该映射一个组件。 

// 3. 创建 router 实例，传入 `routers`对象，作为路由模型的数据
const router = new VueRouter({
	routes:[
		{	path: '/'		,	redirect:  '/aqlife'},
	  	{ 	path: '/aqlife', 	component: AQLIFE},
	  	{ 	path: '/code', 		component: Code },
	  	{ 	path: '/link', 		component: Link },
	  	{ 	path: '/action',	component: Action},
		{	path: '/*'		,	component: Error}
	],linkActiveClass:'active'
  
})

Vue.component('nav-pop',Nav);

var vm = new Vue({
	el:'#app',
	router
	// template:'<nav-pop/>'
})