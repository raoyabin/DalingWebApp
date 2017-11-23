<template>
  <div class="hot_search">
    <p>{{txt}}</p>
    <ul>
      <li v-for="i in arr">{{i}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    props:["txt"],
    data:function(){
      return{
        arr:["口红","唇膏","护手霜","身体乳","洗面奶","熙世界","眉笔","悦诗风吟"
        ,"面膜","气垫","化妆水","香水","资生堂","洁面","眼影","护肤套装",
        "兰芝","保湿喷雾","眼霜","洗发水","兰蔻","雪花秀","卸妆","99任选12"
        ,"雅诗兰黛"]
      }
    }
  }
</script>
<style>
  .hot_search{
    padding: 10px 40px 0px 10px;
  }
  .hot_search p{
    color:#808080;
    font-size: 14px;
    margin-left: 5px;
  }
  .hot_search ul li{
    background-color: #F7F7F7;
    font-size: 12px;
    float: left;
    padding: 8px;
    margin: 5px;
  }
</style>
