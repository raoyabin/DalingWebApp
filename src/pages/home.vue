<template>
  <div class="homeWrap">
    <!--<h1>首页</h1>-->
    <Navbar></Navbar>
    <Search></Search>
    <div class="list5">
      <ul>
        <li><img src="../../static/images/1510914224399.png" alt=""/></li>
        <li v-for="(item,index) in arr" @click="fn(index)" :class="{active:item.flag}">{{item.txt}}</li>
      </ul>
    </div>
    <div class="top_img">
      <img src="../../static/images/15105457908069.jpg" alt=""/>
      <img src="../../static/images/15109863817242.jpg" alt=""/>
      <img src="../../static/images/15109109979073.jpg" alt=""/>
    </div>
    <ul class="list4">
      <li><img src="../../static/images/1484204868661.png" alt=""/></li>
      <li><img src="../../static/images/14842049008972.png" alt=""/></li>
      <li><img src="../../static/images/14842049389977.png" alt=""/></li>
      <li><img src="../../static/images/15039166619746.png" alt=""/></li>
      <li><img src="../../static/images/15031203829776.png" alt=""/></li>
    </ul>
    <div class="f5"></div>
    <ul class="list_1" v-for="item in resp1">
      <p class="p_title"><span>{{item.title}}</span></p>
      <li v-for="i in item.cont">
        <img :src="i.img" alt=""/>
        <p><span>{{i.text}}</span></p>
      </li>
      <label></label>
    </ul>
    <p class="p_title"><span>{{resp2.index}}</span></p>
    <ul class="list_2">
      <li v-for="item2 in resp2.list">
        <div>
          <p>{{item2.lis}}</p>
          <span>{{item2.nis}}</span>
        </div>
        <img :src="item2.img" alt=""/>
      </li>
    </ul>
    <ul class="list_3">
      <li v-for="item3 in resp3">
        <Copt :img1="item3.img1" :img2="item3.img2" :img3="item3.img3" :tbs="item3.tbs" :tbs2="item3.tbs2" :pse="item3.pse" :price="item3.price" :mans="item3.mans" :sml="item3.sml"></Copt>
      </li>
    </ul>
  </div>
</template>

<script>
  import Navbar from '../components/navbar.vue'
  import Search from '../components/search.vue'
  import Copt from '../components/copt.vue'
  export default{
    data:function(){
      return{
        resp1:[],
        resp2:[],
        resp3:[],
        arr:[
          {"txt":"无敌价","flag":false},
          {"txt":"用券专区","flag":false},
          {"txt":"极致美护","flag":false},
          {"txt":"极速保税区","flag":false},
          {"txt":"海外直邮","flag":false},
          {"txt":"时尚配饰","flag":false},
          {"txt":"潮流运动","flag":false},
          {"txt":"创意生活","flag":false},
          {"txt":"全球零食","flag":false},
          {"txt":"尖货女装","flag":false},
          {"txt":"本周特卖","flag":false},
          {"txt":"本周新品","flag":false}
        ]
      }
    },
    components:{
      Navbar,
        Search,
        Copt
    },
    created:function () {
      var that=this;
      this.axios.get('/api/homelist').then(function (res) {
        //console.log(res.data.data);
        that.resp1=res.data.data[0].list;
        that.resp2=res.data.data[1];
        that.resp3=res.data.data[2].list;
//        console.log(that.resp2)
      })
    },
    methods:{
      fn:function(e){
        for(var i = 0;i<this.arr.length;i++){
          this.arr[i].flag = false;
        }
        this.arr[e].flag = true;
      }
    }
  }
</script>
<style>
  .homeWrap{
    margin-bottom: 65px;
    padding-top: 50px;
  }
  .p_title{
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    color:#000000;
  }
  .p_title span:after{
    content: "";
    height: 1px;
    width: 15px;
    background-color: #000000;
    top:50%;
    left:-30px;
    position: absolute;
    z-index: -1;
  }
  .p_title span:before{
    content: "";
    height: 1px;
    width: 15px;
    background-color: #000000;
    top:50%;
    right:-30px;
    position: absolute;
    z-index: -1;
  }
  .p_title span{
    position: relative;
    background-color: white;
  }
  .list_1 li img{
    width: 100%;
  }
  .list_1 li p{
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    text-align: center;
    color:#000000;
    position: relative;
  }
  .list_1 li p span{
    padding-left: 20px;
    background:url("../../static/images/timer_icon.414ca7.png")no-repeat 2px 2px white;
    background-size: 12px;
  }
  .list_1 li p span:before{
    content: "";
    height: 1px;
    width:80%;
    background-color: lightgrey;
    top:50%;
    position: absolute;
    z-index: -1;
    left:10%;
  }
  .list_1 label{
    display: block;
    width: 100%;
    height: 10px;
    background-color: #f5f5f5;
  }
  .list_2{
    border: 1px solid lightgrey;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .list_2 li{
    width: 49.6%;
    float: left;
    padding: 20px 0px;
  }
  .list_2 li:nth-child(1),.list_2 li:nth-child(3){
    border-right: 1px solid lightgrey;
  }
  .list_2 li:nth-child(1),.list_2 li:nth-child(2){
    border-bottom: 1px solid lightgrey;
  }
  .list_2 li div{
    width: 45%;
    padding-left: 20px;
    float: left;
    padding-top: 20px;
  }
  .list_2 li img{
    width: 40%;
  }
  .list_2 li div p{
    font-size: 14px;
  }
  .list_2 li div span{
    padding: 2px;
    font-size: 10px;
    border: 1px solid deepskyblue;
    color:deepskyblue;
    border-radius: 14px;
  }
  .list_3{
    margin-bottom: 20px;
  }
  .top_img img:nth-child(1){
    width: 100%;
  }
  .top_img img:nth-child(2),.top_img img:nth-child(3){
    width: 50%;
    float: left;
  }
  .list4{
    width: 100%;
    overflow: hidden;
  }
  .list4 li{
    width: 20%;
    float: left;
  }
  .list4 li img{
    width: 100%;
  }
  .f5{
    width: 100%;
    height: 10px;
    background-color: #f5f5f5;
  }
  .list5{
    overflow-x: scroll;
  }
  .list5 ul{
    width: 1170px;
  }
  .list5 ul li{
    width:75px;
    float: left;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
  .list5 ul li img{
    width: 50%;
  }
  /*滚动条整体部分，其中的属性有width,height,background,border（就和一个块级元素一样）等。*/
  .list5::-webkit-scrollbar{
    width:12px;
    height:1px;
  }
  /*滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/
  .list5::-webkit-scrollbar-button{
    display: none;
  }
  /*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。*/
  .list5::-webkit-scrollbar-track {
    display: none;
  }
  .active{
    color:blueviolet;
  }
</style>



