<template>
	<div class="kindWrap">
    <Search></Search>
		<div class="container">
			<ul class="list">
				<li v-for="(item,index) in arr" :class="[{active:index==0},{normal:index!=0}]" @click="change($event);getData(item.typeNumber);fn(item.id)">
					{{item.name}}
				</li>
			</ul>
		</div>
		<!-- 右侧商品展示-->
		<div class="category">
			<!-- 推荐分类 -->
			<ul class="list2">
				<li v-for="i in arr1" @click="fn(i.id)" style="width:32.6%;float: left">
					<router-link to="/kind/:id">
						<img :src="i.src" alt="">
						<span>{{i.name}}</span>
					</router-link>
				</li>
			</ul>
			<!-- 剩下的 -->
			<ul v-for="item in arrRight" class="list3">
				<h3>{{item.index}}</h3>
				<li v-for="i in item.detail" @click="fn(i.id)">
					<router-link to="/kind/:id">
						<img :src="i.src" alt="">
						<span>{{i.name}}</span>
					</router-link>
				</li>
    		</ul>
		</div>
		<Navbar></Navbar>
	</div>
</template>

<script>
import MyHead from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Search from '../components/search.vue'
import '../assets/libs/jquery-1.8.3.min.js'
export default {
  components:{
	  MyHead,
	  Navbar,
      Search
  },
	data:function(){
		return{
			numIndex:0,
			arrRight:[],
			arr1:[],
			arr:[
				{
					name:"推荐分类",
					typeNumber:"101"
				},
				{
					name:"极致美护",
					typeNumber:"102",
				},
				{
					name:"全球零食",
					typeNumber:"103"
				},
				{
					name:"尖货女装",
					typeNumber:"104"
				},
				{
					name:"创意生活",
					typeNumber:"105"
				},
				{
					name:"时尚配饰",
					typeNumber:"106"
				},
				{
					name:"品牌精选",
					typeNumber:"107"
				}
			]
		}
	},
	methods:{
		change:function(e){
			e.target.className = "active";
			$(e.target).siblings().removeClass().addClass("normal");
			//localStorage.setItem("typeNumber",this.arr.typeNumber)
		},
		getData:function(typeNumber){
			this.arr1=[];
			this.arrRight=[]
			var That=this;
			if(typeNumber==101){
				this.axios.get('/api/prolist1')
					.then(function(res){
						That.arr1=res.data.data;
				})
			}else if(typeNumber==102){
				this.axios.get('/api/prolist2')
					.then(function(res){
						That.arrRight=res.data.data;
				})
			}else if(typeNumber==103){
				this.axios.get('/api/prolist3')
				.then(function(res){
						That.arrRight=res.data.data;
				})
			}else if(typeNumber==104){
				this.axios.get('/api/prolist4')
				.then(function(res){
						That.arrRight=res.data.data;
				})
			}else if(typeNumber==105){
				this.axios.get('/api/prolist5')
				.then(function(res){
						That.arrRight=res.data.data;
				})
			}else if(typeNumber==106){
				this.axios.get('/api/prolist6')
				.then(function(res){
						That.arrRight=res.data.data;
				})
			}else if(typeNumber==107){
				this.axios.get('/api/prolist7')
				.then(function(res){
						That.arr1=res.data.data;
				})
			}
		},
		fn:function(val){
				localStorage.setItem("id",val);  //使用本地存储，存入键值
		}
	},
	beforeCreate:function(){
		var That = this;
		this.axios.get("/api/prolist1")
			.then(function(res){
				That.arr1 = res.data.data;
	    })
	}
}
</script>
<style>
.container{position:relative}
.list{
	width: 27%;
	height:487px;
	background:#F6F5F7;
	position: fixed;
	left:0;
	top:50px;
	z-index:16;
}

.list li{
	display:block;
	text-decoration:none;
	font-size:12px;
	color:#333;
	padding: 8px;
	border-bottom:1px solid #ccc
}
.list .active{
	background:#AF5BBF;
	color:white
}
.list .normal{
	color:#333;
	background:#F6F5F7;
}
.recommendWrap{width:235px;position:absolute;top:40px;right:0;}

.list2>li>a{color:black;text-decoration:none;list-style:none;width:70px;float:left;font-size: 13px;padding:4px}
.list2>li:nth-child(10),.list2>li:nth-child(13){clear:both}
.list2>li>a>img{width:50px;display:block;margin:3px auto}
.list3>li>a{color:black;text-decoration:none;list-style:none;width:70px;float:left;font-size: 13px;padding:6px 4px}
.list3>li>a>img{width:50px;margin:0 auto}
.list3{width:100%;clear:both;border-top:1px solid #eee;border-bottom: 1px solid #eee}
h3{text-align:left;font-size:14px;margin-left:16px;height:30px;line-height:30px}
.list3>li>a>span{display: block}
.category{overflow:hidden;width:234px;height:auto;position:absolute;right:0;top:50px;}
</style>

