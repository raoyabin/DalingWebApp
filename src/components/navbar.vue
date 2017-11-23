<template>
  <div class="navbarWrap">
	  <Item txt="首页" mark="home" @change="getval">
		  <img src="../../static/img/home.e3d81a.png" alt="" slot="normalImg">
		  <img src="../../static/img/home-1.75dcc7.png" alt="" slot="activeImg">
	  </Item>
	  <Item txt="分类" mark="kind" @change="getval">
		  <img src="../../static/img/category.c56e8f.png" alt="" slot="normalImg">
		  <img src="../../static/img/category-1.70cfc0.png" alt="" slot="activeImg">
	  </Item>
	  <Item txt="约惠" mark="good" @change="getval">
		  <img src="../../static/img/discount.916e8d.png" alt="" slot="normalImg">
		  <img src="../../static/img/discount-1.4173b2.png" alt="" slot="activeImg">
	  </Item>
	  <Item txt="购物车" mark="buycar"  @change="getval">
		  <img src="../../static/img/cart.10e6a1.png" alt="" slot="normalImg">
		  <img src="../../static/img/cart-1.77d414.png" alt="" slot="activeImg">
	  </Item>
	  <Item txt="我的" mark="mine" @change="getval">
		  <img src="../../static/img/profile.c423c1.png" alt="" slot="normalImg">
		  <img src="../../static/img/user.png" alt="" slot="activeImg">
	  </Item>
  </div>
</template>
<script>
import Item from './item.vue'
export default {
	components:{
		Item
	},
	data:function(){
		return{

		}
	},
	methods:{
		getval:function(v){
			localStorage.setItem("sela",v)
		}
	}

}
</script>
<style>
.navbarWrap{
  width:100%;
  position:fixed;
  bottom:0px;
  background: white;
  z-index: 333;padding-bottom: 5px;}
</style>

