<template>
  <div class="mineWrap">
    <header>
      <img src="../../static/images/wdbg.png" alt=""/>
      <div class="head">
        <img :src="this.ie" alt=""/>
      </div>
    </header>
    <div class="wdd">
      <p v-for="item in arr">
        <img :src="item.img" alt=""/>
        <span>{{item.txt}}</span>
        <label>{{item.txt2}}</label>
      </p>
    </div>
    <div class="wlist">
      <ul>
        <li v-for="item in arr1">
          <img :src="item.img1" alt=""/><br/>
          <span>{{item.txt2}}</span>
        </li>
      </ul>
    </div>
    <div class="wallet" v-for="item1 in arr2">
      <p>{{item1.index}}</p>
      <ul>
        <li v-for="i in item1.list2">
          <span>{{i.tsl}}</span><br/>
          <span>{{i.trl}}</span>
        </li>
      </ul>
    </div>
    <div class="mine_list4">
      <ul>
        <li v-for="item in arr3">
          <img :src="item.img2" alt=""/>
          <span>{{item.txt}}</span>
          <label>{{item.red}}</label>
        </li>
      </ul>
    </div>
    <div class="footer">
      <img src="../../static/images/footer.b1cf18.png" alt=""/>
    </div>
    <Navbar></Navbar>
  </div>
</template>
<script>
  import Navbar from '../components/navbar.vue'
  export default{
    components:{
      Navbar
    },
    data:function(){
      return{
        ie:"",
        arr:[],
        arr1:[],
        arr2:[],
        arr3:[]
      }
    },
    created:function(){
      this.ie = localStorage.getItem("sev");
      var that=this;
      this.axios.get('/api/minelist').then(function (res) {
        that.arr=res.data.data[0].list
        that.arr1=res.data.data[1].list
        that.arr2 = res.data.data[2].list
        that.arr3 = res.data.data[3].list
        console.log(that.arr3)
      })
    }
  }
</script>
<style>
  .mineWrap{
    background: #F4F3F6;
  }
 .mineWrap header{
    width: 100%;
    position: relative;
  }
.mineWrap  header>img{
    width: 100%;
  }
 .mineWrap header .head img{
    width: 50px;
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top:20px;
    border-radius: 50%;
    border: 2px solid white;
  }
.mineWrap  .wdd p{
    height: 40px;
    line-height: 40px;
    padding: 0px 10px;
    margin-top: 10px;
    font-size: 14px;
    color:#000000;
    position: relative;
    border-bottom:1px solid #F5F3F6;
    background: url("../../static/images/ic_arrow_right_small.png")no-repeat right center white;
    background-size: 20px;
  }
 .mineWrap .wdd p img{
    width: 20px;
    margin-right: 10px;
    position: relative;
    top:4px;
  }
 .mineWrap .wdd p label{
    float: right;
    margin-right: 30px;
    font-size: 12px;
    color: #858385;
  }
 .mineWrap .wlist ul{
    overflow: hidden;
    padding: 20px 0px;
    width: 100%;
    background: white;
    margin-bottom: 10px;
  }
  .mineWrap .wlist ul li{
    width: 25%;
    text-align: center;
    float: left;
    font-size: 10px;
    color: #858385;
  }
 .mineWrap .wlist ul li img{
    width: 17px;
  }
  .mineWrap .wallet{
  	background-color: white;
  }
  .mineWrap .wallet p{
    height: 40px;
    line-height: 40px;
    padding-left:10px;
    font-size: 14px;
    border-bottom:1px solid #F5F3F6;
  }
  .mineWrap .wallet ul{
    width: 100%;
    display: flex;
    overflow: hidden;
    border-bottom:1px solid #F5F3F6;
    margin-bottom: 10px;
  }
  .mineWrap .wallet ul li{
    flex: 1;
    float: left;
    text-align: center;
    height: 40px;
    line-height: 20px;
    font-size: 12px;
  }
  .mineWrap .wallet ul li:nth-child(1),.mineWrap .wallet ul li:nth-child(2){
    border-right: 1px solid #F5F3F6;
  }
  .mineWrap .wallet ul li:nth-child(1) span:nth-child(3){
    color:red;
  }
  .mine_list4 ul li{
    height: 40px;
    line-height: 40px;
    border-bottom:1px solid #F5F3F6;
    padding: 0px 10px;
    background: url("../../static/images/ic_arrow_right_small.png")no-repeat right center white;
    background-size: 20px;
  }
  .mine_list4 ul li img{
    width: 20px;
    position: relative;
    top:4px;
    margin-right: 10px;
  }
  .mine_list4 ul li span{
    font-size: 14px;
  }
  .mine_list4 ul li label{
    color: red;
    margin-right: 20px;
    font-size: 12px;
    float: right;
  }
  .footer{
    text-align: center;
    margin-top: 30px;
  }
  .footer img{
    width: 50%;
  }
</style>
