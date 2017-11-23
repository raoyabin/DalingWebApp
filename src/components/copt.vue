<template>
  <div class="coptWrap">
    <div class="pic">
      <img :src="img1" alt=""/>
      <img :src="img2" alt=""/>
      <img :src="img3" alt=""/>
    </div>
    <div class="describe">
      <p>{{tbs}}<span>{{tbs2}}</span></p>
      <p>{{pse}}</p>
      <h4>{{price}}</h4>
      <div class="shop">
        <span>{{mans}}</span>
        <img :src="sml" alt=""/>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:["img1","img2","img3","tbs","tbs2","pse","price","mans","sml"]
  }
</script>
<style>
  .coptWrap{
    width: 95%;
    margin: 0 auto;
    margin-bottom: 25px;
  }
  .coptWrap .pic{
    position: relative;
  }
  .coptWrap .pic img:nth-child(1){
    width: 100%;
  }
  .coptWrap .pic img:nth-child(2),.coptWrap .pic img:nth-child(3){
    width: 40px;
    position: absolute;
    right: 2px;
    top:0px;
  }
  .coptWrap .pic img:nth-child(2){
    right:47px;
  }
  .describe{
    position: relative;
    height: 85px;
  }
  .describe p:nth-child(1){
    font-size: 14px;
  }
  .describe p:nth-child(1) span{
    font-size: 10px;
    color: white;
    background-color: red;
    border-radius: 3px;
    padding: 2px;
  }
  .describe p:nth-child(2){
    color: lightgrey;
    font-size: 14px;
    height: 25px;
    line-height: 25px;
  }
  .describe h4{
    color: red;
  }
  .describe .shop{
    font-size: 12px;
    padding: 5px 15px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 90px;
  }
  .describe .shop span{
    display: block;
    width: 55px;
    float: left;
    border-right: 1px solid lightgrey;
    font-size: 10px;
    padding-right: 5px;
  }
  .describe .shop img{
    width: 20px;
    position: absolute;
    right:15px;
    top:8px;
  }
</style>
