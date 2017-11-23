<template>
	<div class="buycarWrap">
		<MyHead txt="我的购物车">

		</MyHead>
		<Navbar></Navbar>
	</div>
</template>
<script>
import MyHead from '../components/header'
import Navbar from '../components/navbar.vue'
export default {
  components:{
	  MyHead,
		Navbar
  }
}
</script>
