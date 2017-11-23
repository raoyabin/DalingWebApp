<template>
  <div>
    <div class="searchin">
      <div class="input">
        <input type="search" placeholder="搜索商品"/>
      </div>
      <span @click="fn()">取消</span>
    </div>
    <Hotsearch txt="热门搜索"></Hotsearch>
  </div>
</template>
<script>
  import Hotsearch from "../components/hotsearch.vue"
  export default{
    data:function(){
      return{
        e:""
      }
    },
    methods:{
      fn:function(){
        this.e = localStorage.getItem("sela")

        this.$router.push("/"+this.e)
      }
    },
    components:{
      Hotsearch
    }
  }
</script>
<style>
  .searchin{
    background-color: #EFEFEF;
    padding: 10px;
    position: relative;
    overflow: hidden;
  }
  .searchin .input{
    width: 90%;
    background: url("../assets/img/ic_search.png") no-repeat 5px center white;
    background-size: 20px;
    border-radius: 20px;
    float: left;
  }
  .searchin input{
    background-color: transparent;
    padding-left: 30px;
    border: none;
    outline: none;
    height: 30px;
  }
  .searchin span{
    font-size: 14px;
    display: inline-block;
    margin-left: 5px;
    margin-top: 5px;
  }
</style>
