import ask from "../src/getJSON.js"

Vue.component('item-pop',{
	template:'<li class="nav-item" >\
	<router-link :to="link" class="nav-link" aria-current="page">{{ link.toUpperCase() }}</router-link>\
	</li>',props:{'link':String}
})
/* 
Vue.component('nav-pop',{
	template:'<nav class="mx-auto my-2">\
	<ul class="container nav nav-pills nav-justified" >\
	<item-pop v-for="(item,index) in " :link="item" :title="item" :key="index" :id="index"/>\
	</ul>\
	</nav>',data(){return {did:ask}},
	methods: {
		tp:(did)=>{did.getJson();return Object.values(did.reta.nav)}	
	}
}) */

export const Nav = {
	template:'<nav class="mx-auto my-2">\
	<ul class="container nav nav-pills nav-justified" >\
	<item-pop v-for="(item,index) in loop" :link="item" :title="item" :key="index" :id="index"/>\
	</ul>\
	</nav>',data(){ask.getJson();return {loop:Object.values(ask.reta.nav)}}
}

// 第一步: 创建对应组件对象
export const AQLIFE = {
	template:'<img v-cloak class="col-12 img-thumbnail mx-auto" src="../IMG/RainierMilkyWay_1920x1080.jpg" alt="加载失败">',
	methods:{  },	//组件的方法集合
	props:	{  },	//组件的属性集合
	data()	{ return {text:"这是 AQ LIFE"}; }	//组件的基础方法
}


export const Code= {
	template:'<div>{{ text }}</div>',
	methods:{  },	//组件的方法集合
	props:	{  },	//组件的属性集合
	data()	{ return {text:"这是 Code"} }	//组件的基础方法
}


Vue.component('lk', {
	template:'<a class="card m-1 text-dark" style="max-width:360px;" target="__blank" >\
				<div class="row">\
				  <div class="col-4 row align-items-center">\
					<img src="../IMG/Tlogo.png" class="img-fluid rounded" alt="..."/>\
				  </div>\
				  <div class="col-8">\
					<div class="card-body">\
					  <h5 class="card-title">{{ title }}</h5>\
					  <p class="card-text">{{ text }}</p>\
					</div>\
				  </div>\
				</div>\
			</a>',
	props:{
		'title':String,
		'text':String,
		'link':String
	}
		//组件的基础方法
})


Vue.component('cap',{
	template:'<div class="card px-0 my-2" :title="caption" :id="state">\
		<div class="card-header g-0">{{ caption }}</div>\
		<div class="card-body row g-0">\
		<lk v-for="Link of bli" :title="Link.title" :text="Link.text" :key="Link.id" :href="Link.link"/>\
		</div>\
	</div>',props:{'caption':String,'Info':Object,'state':Number},
	data(){return {bli: Object.values(this.Info)[this.state]}}

})


export const Link ={
	template:'<div class="row">\
	<cap v-for="(item,index) of op" :caption="item" :key="index" :id="index" :Info="ask.reta.link" :state="index"/>\
	</div>',data(){/* ask.getJson(); */return {op:Object.keys(ask.reta.link),ask}}
}

export const Action= {
	template:'<div class="card mx-auto col-lg-4 col-md-12">\
	<img src="../IMG/Head portrait.jpg" alt="头像" class="card-img-top">\
	<div class="card-body text-center"  >\
		<h5>胡某</h5>\
		<h6>\
		<span class="badge bg-info" v-for="(item,index) of language" :title="item" :id="index" :key="index">{{ item }}</span>\
		</h6>\
		<p>\
			爱好摸鱼...\
		</p>\
		<a class="btn bg-success text-light" href="mailto:209879664@qq.com">点击此处通过邮箱联系我</a>\
	</div>\
</div>',
	methods:{  },	//组件的方法集合
	props:	{  },	//组件的属性集合
	data()	{ return {text:"这是 Action",language:["C#","C","C++","JS","PHP","Python"]} }	//组件的基础方法
}



export const Error = {
	template:'<div class="container rounded mx-auto text-center overflow-hidden bg-warning px-0" id="error">\
	<div id="error-head" class="text-danger  g-0">{{ head }}</div>\
	<div id="error-text" class="bg-warning g-0">{{ text }}</div>\
	</div>',data:()=>{return {head:'Error',text:'你的访问无效,请浏览其他区域'};}
}