<template>
  <div class="todayitemWrap">
	  <Yellow txt="闪购专场 已经开抢"></Yellow>
	  <ul>
		  <li v-for="item in arr2">
			  <div class="liWrap">
				<img :src="item.src" alt="">
				<div class="content">
					<span class="name1">{{item.name1}}</span>
					<span class="name2">{{item.name2}}</span>
					<p>{{item.detail}}</p>
					<div class="last">
						<i>约惠</i>
						<i>还剩{{item.last}}</i>
					</div>
					
					<span class="now">
						{{item.now}}
					</span>
					<span class="old">
						{{item.old}}
					</span>
				</div>	
				<div class="add">
					<div class="side">
						<div>{{item.num}}</div>
						<div>加入购物车</div>
					</div>
					<div class="car">
						<img src="../assets/img/goods_list_car.3fc451.png" alt="">
					</div>
				</div>
				<span class="hot">
					<img src="../assets/img/14581236597305.png" alt="">
				</span>
			</div>	
		  </li>
	  </ul>
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
 		arr2:[
		  {
			  src:"../../static/img/FA163E0C4D3EH4HI2NJ080IAUI0.jpg",
			  name1:"比利时",
			  name2:"创新薯片风靡欧洲",
			  detail:"[哈姆雷特]比利时巧克力圆脆片125g多种口味可选（125g 香橙味 3盒）",
			  last:"3小时5分",
			  now:"￥94.8",
			  old:"￥99.00",
			  num:"81人"
		  },
		  {
			  src:"../../static/img/FA163E0C4D3EH9MG4BY7HLJ175D.jpg",
			  name1:"中国香港",
			  name2:"汤色红润齿缝留香",
			  detail:"[虎标]洱茶熟茶357g（357g）",
			  last:"3小时5分",
			  now:"￥139.00",
			  old:"￥144.00",
			  num:"85人"
		  },
		  {
			  src:"../../static/img/FA163E0C4D3EH2NI0Q13CRQG61V.jpg",
			  name1:"台湾",
			  name2:"挂耳风情香醇浓郁",
			  detail:"[花田本味]花田本味咖啡 曼特宁风味（40g*2盒）",
			  last:"2小时51分",
			  now:"￥42.5",
			  old:"￥44.6",
			  num:"96人"
		  },
		  {
			  src:"../../static/img/FA163E0BD2F9H3BG1I6AX7RMJ62.jpg",
			  name1:"中国澳门",
			  name2:"自然风味层层入味",
			  detail:"[Gold Enjoy] 澳门进口 金语 薯条 两联包 90g*2包（海苔味）",
			  last:"2小时51分",
			  now:"￥39.00",
			  old:"￥42.80",
			  num:"66人"
		  },
		  {
			  src:"../../static/img/14985544672230.jpg",
			  name1:"阿联酋",
			  name2:"甜而不腻补中益气",
			  detail:"[皇冠]阿联酋进口皇冠椰枣150g*5袋（250g*5袋）",
			  last:"2小时51分",
			  now:"￥79.00",
			  old:"￥82.80",
			  num:"78人"
		  },
		  {
			  src:"../../static/img/FA163E0C4D3EH2RF2PMRJLDPRPR.jpg",
			  name1:"台湾",
			  name2:"传统工艺香酥可口",
			  detail:"[九福]九福沙琪玛 葡萄芝麻沙琪玛（227g*2袋）",
			  last:"2小时51分",
			  now:"￥42.50",
			  old:"￥44.80",
			  num:"98人"
		  },
		  {
			  src:"../../static/img/FA163E0BD2F9H2KI490D6B31OOO.jpg",
			  name1:"设计师",
			  name2:"大包装更实惠",
			  detail:"[瑞栖]化妆棉双面双效上妆补水厚222片（加厚222片）",
			  last:"2小时51分",
			  now:"￥25.90",
			  old:"￥27.90",
			  num:"64人"
		  }
	  	]
	  }
	 
  }
}
</script>
<style>

.todayitemWrap ul li{width:100%;margin-top:10px;}
.todayitemWrap ul li .liWrap{padding:10px;position:relative}
.todayitemWrap ul li img{max-width:100%;max-height:100%}
.todayitemWrap ul li .content{text-align: left}
.content .name1,.content .name2{font-size:12px;color:black}
.content p{margin:5px 0;font-size:12px;color:#9f9f9f;overflow:hidden;text-overflow:ellipsis; -webkit-text-overflow:ellipsis; white-space:nowrap;}
.content .last{background:#eee;border:1px solid #bbb;border-radius:5px;width:125px;height:20px;line-height:20px;text-align:center;color:#666;margin:3px 0}
.content .last i{font-style: normal;font-size:13px;}
.content .now{font-size: 14px;color:#f0593f;}
.content .old{font-size:12px;color:#9f9f9f;text-decoration: line-through;}
.liWrap .add{border-radius:5px;border:1px solid #a4a4a4;position:absolute;width:110px;right:10px;bottom:10px}
.liWrap .add .side{width:65px;font-size:12px;display:inline-block}
.add .car{padding:5px 0 0 3px;display:inline-block;margin-left:3px;margin-bottom:3px;border-left:1px solid #9a9a9a}
.add .car img{width:20px;}
.liWrap .hot{position:absolute;top:10px;right:10px}
.liWrap .hot img{width:35px;}
</style>


