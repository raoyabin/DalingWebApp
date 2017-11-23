<template>
	<div>
		<!-- <MyHead lefttxt="今日约惠" righttxt="约惠预告">
		</MyHead> -->
		<div class="navlist">
			<ul class="navli">
				<li :class="{active:numIndex == 0}" @click="numIndex = 0"><router-link to="/good/today">今日约惠</router-link></li>
				<li :class="{active:numIndex == 1}" @click ="numIndex = 1"><router-link to="/good/before">约惠预告</router-link></li>
			</ul>
			<div class="show">
				<router-view></router-view>
			</div>


		</div>
		<Navbar></Navbar>
	</div>
</template>
<script>
import MyHead from '../components/header.vue'
import Navbar from '../components/navbar.vue'
export default {
  components:{
	  MyHead,
		Navbar,
  },
	data:function(){
		return{
			numIndex:0
		}
	},
	created:function(){
		this.$router.push('/good/today')
	}
}
</script>
<style>

.navli{
	width: 100%;
	position: fixed;
	top:0;
	left:0;
	z-index:333;
  text-align: center;
}
.navlist>ul>li{
	padding:8px 0;
	background:white;
	width:50%;
	float:left;
	}
.navlist ul li a{
	text-decoration:none;
	font-size: 12px;
	color:black
	}
.navlist ul li.active a{
	color:purple
}

</style>

