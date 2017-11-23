<template>
  <div :class="{headWrap:true,gray:bol}">
	  <span class="buycar">{{txt}}</span>
	  <slot name="search"></slot>
	  <slot name="left" class="img"></slot>	
	  <span class="left">{{lefttxt}}</span>
	  <span class="right">{{righttxt}}</span>	
  </div>
</template>
<script>
export default {
	props:['txt','bol','lefttxt','righttxt'],
	
}
</script>
<style>
.gray{background:#EFEFEF}
.headWrap{overflow:hidden;width:100%;height:39px;line-height:39px;position:fixed;top:0;z-index:15}
.img{width:13px}
.search{position:relative}
.search img{position:absolute;left:129px;top:14px}
.search input{width:93%;height:26px;text-indent:8.5rem;border-radius:10px;border:none}
.left,.right{font-size:12px;display:inline-block;width:49%}
.buycar{font-size: 12px;display: block;margin:0 auto}
</style>


