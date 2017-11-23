<template>
  <div class="zhongheWrap">
    <div class="top1" style="background: white">
      <div class="proWrap" style="width:100%">
        <img :src="arr6.src" alt="" style="max-width:100%;max-height:100%">
      </div>
      <div class="info">
        <div class="info1" style="text-align:left">
          <p class="info1-1" style="font-size:13px;color:black;width:270px;">
            {{arr6.name}}
          </p>
          <p class="info1-2">
            <span style="margin:6px 0;font-size:16px;color:#ee4e37;display:inline-block">
              ￥{{arr6.price}}
            </span>
            <span style="padding:0.6px;margin:0 2px;font-size:8px;color:#ee4e37;border:1px solid #ee4e37">
              {{arr6.percent}}折
            </span>
            <span style="font-size:10px;color:#333">韩国现时售价</span>
            <i style="font-size:10px;color:#666;font-style:normal;text-decoration:line-through">￥{{arr6.old}}</i>
          </p>
          <!-- <p class="info1-3">
            <span>韩国,发货后7-15个工作日送达</span>
          </p> -->
          <p class="info1-4" style="height:30px;line-height:30px;border-top:1px solid #9f9f9f">
            <span style="border-radius:3px;margin-right:5px;background:#eea252;color:white;font-size:10px">
              返
            </span>
            <span style="color:#666;font-size:12px;">购买可获<span style="color:#ee4e37">{{arr6.darling}}</span>达令币</span>
          </p>
          <p class="info1-5">
              <span class="xiangxi1">
                  <img src="../../assets/img/14748843803298.jpg" alt="">
              <span>
                1-3天发货
              </span>
            </span>
            <span class="xiangxi2">
              <span>
                <img src="../../assets/img/14653745047306.png" alt="">
              </span>
              <span>
                一件包邮
              </span>
            </span>
            <span class="xiangxi3">
              <span>
                <img src="../../assets/img/1460617348219.png" alt="">
              </span>
              <span>
                不支持7天退换
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="top2" style="background: white">
      <div class="speak">
        <span>Ta在晒（{{arr6.how}}）</span>
      </div>
      <div class="word">
        <div class="word1">
          <span>
            <img :src="arr6.userimg" alt="">
          </span>
          <span>
            {{arr6.username}}
          </span>
          <div class="time">
            <span>{{arr6.usertime}}</span>
          </div>
        </div>
        <div class="word2">
          <p>{{arr6.usertxt}}</p>
        </div>
      </div>
    </div>
    <div class="top3" style="background: white">
      <div class="lead">
        <span>{{arr6.lead1}}</span>
        <span>{{arr6.lead2}}</span>
        <span>{{arr6.lead3}}</span>
      </div>
      <div class="ads">
        <img :src="arr6.img1" alt="">
        <img :src="arr6.img2" alt="">

      </div>
    </div>
    <div class="top4">
      <p class="tell">
        尊敬的客户，您好!
        <div class="line-space"></div>
        在您选购境外商品前，麻烦您仔细阅读此文，同意本文所告知内容后再进行下单购买：
        <div class="line-space"></div>
        1.您在本（公司）网站上购买的境外商品为产地直销商品，仅限个人自用不得进行再销售，商品本身可能无中文标签，您可以查看网站的翻译或者在线联系我们的客服。
        <div class="line-space"></div>
        2.您购买的境外商品适用的品质、健康、标识等项目使用标准符合原产国使用标准，但是可能与我国标准有所不同，所以在使用过程中由此可能产生的危害或损失以及其他风险，将由您个人承担。
        <div class="line-space"></div>
        3.您在本（公司）网站上购买达令的境外商品时，自动视为由达令代您向海关进行申报和代收代缴税款。
      </p>
    </div>
    <div class="top5">
      <img :src="arr6.ticket" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
      arr6:[]
    }
  },
  created:function(){
    var That = this;
    this.axios.get('/api/alone')
      .then(function(res){
        console.log(res.data);
        That.arr6 = res.data.data[0];
        console.log(That.arr6);
      })
  }
}
</script>
<style>
  .zhongheWrap{background:#f5f5f5}
  .info1-5 .xiangxi1 img,.info1-5 .xiangxi2 img,.info1-5 .xiangxi3 img{width:12px;}
  .info1-5{font-size:10px;}
</style>
