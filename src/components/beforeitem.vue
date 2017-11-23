<template>
  <div class="beforeitemWrap">
	  <Yellow txt="下一场闪购即将开抢"></Yellow>
	  <div class="list3">
		  <ul>
			  <li v-for="item in arr4">
				  <div class="leftWrap">
					  <div id="imgwrap">
							<img :src="item.src" alt="">
					  </div>
					  	
				  		<span class="beforename">{{item.name}}</span>
				  		<p class="datail">{{item.datail}}</p>
						<span class="beforenow">{{item.now}}</span>
						<span class="beforeold">{{item.old}}</span>
						<p class="dir">{{item.num}}人已加入购物车</p>
				  </div>
				  <div id="car">
					  <img src="../assets/img/goods_list_car.3fc451.png" alt="">
				  </div>

			  </li>
		  </ul>
	  </div>
  </div>
</template>
<script>
import Yellow from '../components/yellow.vue'
export default {
  components:{
	  Yellow
  },
  data:function(){
	  return{
		  arr4:[
			  {
				  src:"../../static/img/FA163E0BD2F9H82B3679I98O14S.jpg",
				  name:"法国|味蕾上的乌托邦",
				  datail:"[拉蒙]法国进口红酒 布兰特干红葡萄酒双支木盒装（750ml*2 干型）",
				  now:"￥168.00",
				  old:"￥170.00",
				  num:"72"
			  },
			   {
				  src:"../../static/img/FA163E0C4D3EH5MG08O530I5FQ0.jpg",
				  name:"温润柔和弥尔醇香",
				  datail:"马来西亚咖啡先生特浓即溶咖啡（25克*24条/包）",
				  now:"￥55.00",
				  old:"￥58.00",
				  num:"51",
				  ok:"买赠",
				  last:"3"
			  },
			   {
				  src:"../../static/img/FA163E0C4D3EH59D4CG8T1SJFH2.jpg",
				  name:"印度尼西亚|蓬松口感优质谷物",
				  datail:"[丽芝士纳宝帝]丽芝士焙烤玉米味奶酪味玉米棒50g*6袋(50g*6)",
				  now:"￥32.90",
				  old:"￥33.80",
				  num:"59"
			  },
			   {
				  src:"../../static/img/FA163E0C4D3EH3TE3HTDZ318Q5R.jpg",
				  name:"台湾|随身携带享受美味",
				  datail:"[弗兰西诺]优贝",
				  now:"￥32.90",
				  old:"￥33.80",
				  num:"59"
			  },
			   {
				  src:"../../static/img/FA163E0C4D3EHB2F0PVE93JHW95.jpg",
				  name:"设计师|这个秋冬不怕冷",
				  datail:"[锦仕]加绒加厚珍珠绒打底裤秋冬踩脚保暖外穿一体裤女黑色(均码)",
				  now:"￥25.00",
				  old:"￥27.80",
				  num:"78",
				   ok:"买赠"
			  },
			   {
				  src:"../../static/img/FA163E0BD2F9H3MJ37E52A96VE0.jpg",
				  name:"设计师|小清新卡通风",
				  datail:"[唯眠纺]简约活性纯棉四件套1.8m双人床上用品 菜鸟驿站(1.5M床合适(床笠式))",
				  now:"￥279.00",
				  old:"￥280.00",
				  num:"99"
			  },
			   {
				  src:"../../static/img/FA163E0C4D3EHAV91N0R6IC80DM.jpg",
				  name:"设计师|格调高尚有品位",
				  datail:"[only&home]USB充电镜子暖手宝（红色）",
				  now:"￥59.00",
				  old:"￥68.00",
				  num:"63",
				   ok:"买赠"
			  },
			   {
				  src:"../../static/img/32G4E90E39N0UC4N7.jpg",
				  name:"设计师|小鹿纯棉毛巾",
				  datail:"[锦仕]成人大尺寸吸水小鹿纯棉毛巾(大号 34X76厘米 蓝色)",
				  now:"￥33.00",
				  old:"￥46.00",
				  num:"64"
			  },
			   {
				  src:"../../static/img/FA163E0C4D3EHAHE0IA2HLR3WNW.jpg",
				  name:"韩国|加厚保暖修身显瘦",
				  datail:"[IKEWA]冬季保暖踩脚裤加绒加厚修身显瘦外穿打底裤黑色,灰色(纯色 两条装)",
				  now:"￥136.00",
				  old:"￥139.00",
				  num:"93",
				  ok:"买赠"
			  },
			   {
				  src:"../../static/img/FA163E0C4D3EHARD0KRCM0GPW0W.jpg",
				  name:"韩国|冬季美拍神器",
				  datail:"[IKEWA]女冬天潮小胡子包头时尚保暖大毛球帽毛线帽护耳帽子(黑 单个装)",
				  now:"￥96.00",
				  old:"￥99.00",
				  num:"98"
			  }
		  ]
	  }
  }
}
</script>
<style>

#imgwrap{width:100%;height:160px;overflow: hidden}
#imgwrap img{width:210px;}
/* .list3{margin-top:10px} */
.list3 ul li{position:relative;margin:10px 0;background:white}
.list3 ul li:nth-child(2n+1){
	width:49%;
	float: left;
}
.list3 ul li:nth-child(2n){
	width:49%;
	float:right;
}
.leftWrap{text-align: left;}
.leftWrap .beforename{margin:0 3px;font-size:13px;color:black;overflow:hidden;white-space: nowrap;text-overflow:ellipsis}
.leftWrap .datail{margin:5px 0 5px 3px;display:box;display:-webkit-box;word-break:break-all;word-wrap:break-word;box-orient:vertical;-webkit-box-orient:vertical;height:30px;overflow:hidden;text-overflow:ellipsis; -webkit-text-overflow:ellipsis;line-clamp:2;-webkit-line-clamp:2; font-size:12px;color:#9f9f9f;}
.beforenow{display:inline-block;font-size:13px;color:#ff4a30;margin:6px 3px;}
.beforeold{font-size:12px;color:#999;text-decoration: line-through}
#car img{width: 20px;}
.dir{background: #f9f9f9;font-size:12px;color:#9f9f9f}
#car{height:20px;position:absolute;padding:3px;right:6px;bottom:17px;border:1px solid #e5e5e5}
</style>


