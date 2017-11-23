<template>
  <div class="todayWrap">
	  <!-- 封装该页面的组件 -->
	  <Todayitem></Todayitem>
  </div>
</template>
<script>
import Todayitem from '../../components/todayitem.vue'
export default {
  components:{
	  Todayitem
  }
}
</script>
<style>
.todayWrap{
	background:url("../../assets/img/footer.b1cf18.png") no-repeat;
	padding-bottom:110px;
	background-position:center bottom 50px;
	background-size:30%;
	width: 100%;
	height:100%;
	overflow: hidden;
	background-color:#F5F5F5;
	}
	
</style>
