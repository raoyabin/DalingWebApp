<template>
  <div class="yellowWrap">
	  <div class="clock">
			<img src="../assets/img/14302933166674.png" alt="">
			<p>{{txt}}</p>
			<slot name="daojishi"></slot>
	  </div>
  </div>
</template>
<script>
export default {
	props:['txt']
}
</script>
<style>
  .yellowWrap{text-align: center}
.clock{background:#f5c400;height:80px;margin-top:35px;}
.clock img{width:15px;margin:13px 0 5px 0;}
.clock p{color:white;font-size: 12px}
</style>

