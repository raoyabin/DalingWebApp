<template>
  <div class="searchWrap">
    <div class="search_input" @click="fn()">
      <input type="search" placeholder="搜索商品"/>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      fn:function(){
        this.$router.push("/searchin")
      }
    }
  }
</script>
<style>
  .searchWrap{
    padding: 10px;
    background-color: #EFEFEF;
    position: fixed;
    top:0px;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;
  }
  .searchWrap .search_input{
    background: url("../assets/img/ic_search.png") no-repeat 45% center white;
    background-size: 20px;
    border-radius: 20px;
    overflow: hidden;
  }
  .searchWrap .search_input input{
    margin-left: 50%;
    border: none;
    outline: none;
    height: 30px;
  }
</style>
