<template>
  <div class="recommend">
    <div class="recommend_video">
      <h3>中式黑八中国巡回赛</h3>
      <div class="recommend_video_play">
        <img src="../../assets/images/video1.png" alt="">
        <img src="../../assets/images/play.png" alt="">
        <div class="recommend_video_time">132:49</div>
        <span>12万次播放</span>
      </div>
      <div class="recommend_video_info">
        <span>已关注</span><span>亨得利</span><span>1223评论</span><span>19分钟前</span>
        <img src="../../assets/images/close.png" alt="" @touchstart.stop.prevent="recommendstart" @touchmove.stop.prevent="recommendmove" @touchend.stop.prevent="recommendend">
      </div>
    </div>
    <div class="recommend_tuwen">
      <div class="recommend_tuwen_left">
        <h3>这是标题呀呀呀呀</h3>
        <p>这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</p>
        <div class="recommend_tuwen_info">
          <span>已关注</span><span>亨得利</span><span>1223评论</span><span>19分钟前</span>
          <img src="../../assets/images/close.png" alt="" @touchstart.stop.prevent="recommendstart" @touchmove.stop.prevent="recommendmove" @touchend.stop.prevent="recommendend">
        </div>
      </div>
      <div class="recommend_tuwen_right">
        <img src="../../assets/images/img1.png" alt="">
        <div class="recommend_tuwen_xc"><img src="../../assets/images/xiangce.png" alt=""><span>25</span></div>
      </div>
    </div>
    <div class="recommend_wen">
      <h3>这是一条标题</h3>
      <p>这是内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
       <div class="recommend_wen_info">
        <span>已关注</span><span>亨得利</span><span>1223评论</span><span>19分钟前</span>
        <img src="../../assets/images/close.png" alt="" @touchstart.stop.prevent="recommendstart" @touchmove.stop.prevent="recommendmove" @touchend.stop.prevent="recommendend">
      </div>
    </div>
    <transition name="fade">
    <div class="recommend_fankui_lahei" v-if="recommendOffon">
      <div class="recommend_fankui" @touchstart.stop.prevent="fankuistart" @touchmove.stop.prevent="fankuimove" @touchend.stop.prevent="fankuiend">
        <img src="../../assets/images/fankui.png" alt="">
        <div class="recommend_fankui_info">
          <p>反馈垃圾内容</p>
          <span>低俗、标题党等</span>
        </div>
      </div>
      <div class="recommend_lahei" @touchstart.stop.prevent="laheistart" @touchmove.stop.prevent="laheimove" @touchend.stop.prevent="laheiend">
        <img src="../../assets/images/lahei.png" alt="">
        <div class="recommend_lahei_info">
          <p>拉黑作者:用户昵称</p>
        </div>
    </div>
   </div>
    </transition>
    <transition name="fade">
  <div class="recommendMask" v-if="recommendOffon" @touchstart.stop.prevent="backstart" @touchmove.stop.prevent="backmove" @touchend.stop.prevent="backend"></div>
    </transition>
</div>
</template>

<script>
export default {
data(){
  return{
    recommendOffon:false,
    startX:0,
    moveX:0
  }
  },
methods: {
  recommendstart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  recommendmove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  recommendend(){
    if(this.moveX==0){
      this.recommendOffon=true
    }
    this.startX=0
    this.moveX=0
  },
  fankuistart(){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  fankuimove(){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  fankuiend(){
    if(this.moveX==0){
      this.recommendOffon=false
      alert('反馈垃圾内容');
    }
    this.startX=0
    this.moveX=0
  },
  laheistart(){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  laheimove(){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  laheiend(){
    if(this.moveX==0){
      this.recommendOffon=false
      alert('拉黑作者：用户昵称');
    }
    this.startX=0
    this.moveX=0
  },
  backstart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  backmove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  backend(){
  if(this.moveX==0){
      this.recommendOffon=false
    }
    this.startX=0
    this.moveX=0
  }
}
}
</script>

<style>
/* .fade-enter-active,.fade-leave-active{
  transition:opacity .8s;
} */
.recommend_wen,.recommend_tuwen,.recommend_video{
  border-bottom: .04rem solid #f0f0f0;
}
.recommend_video>h3{
  padding-left: .1rem;
  font-size: .16rem;
  font-weight: 600;
  color:#666;
  line-height: .32rem
}
.recommend_video_play{
  position: relative;
}
.recommend_video_play,.recommend_video_play>img:first-child{
  width: 100%;
  height: 2rem;
}
.recommend_video_play>img:nth-child(2){
  width: .6rem;
  height: .6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -.3rem;
  margin-top:-.3rem;
}
.recommend_video_play>span{
  position: absolute;
  left: .2rem;
  bottom: .1rem;
  font-size: .12rem;
  color: white
}
.recommend_video_info>span{
  padding-left: .08rem;
  font-size: .12rem;
  color: #999;
  line-height: .5rem;
}
.recommend_wen_info,.recommend_video_info{
  position: relative;
}
.recommend_wen_info>img,.recommend_video_info>img{
  position: absolute;
  bottom: .18rem;
  right: .1rem;
  width: .22rem;
  height: .18rem
}
.recommend_video_time{
  padding:0 .08rem; 
  height: .2rem;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  line-height: .2rem;
  font-size: .12rem;
  color: #707070;
  border-radius: .04rem;
  position: absolute;
  bottom: .1rem;
  right: .12rem;
}
.recommend_tuwen{
  padding: .1rem;
  overflow: hidden;
}
.recommend_tuwen_left{
  float: left;
  width: 68%;
}
.recommend_wen{
  padding:.1rem
}
.recommend_wen>h3,.recommend_tuwen_left>h3{
  font-size: .16rem;
  font-weight: 600;
  line-height: .3rem
}
.recommend_wen>p,.recommend_tuwen_left>p{
  font-size: .14rem;
  font-weight: 500;
  text-indent: 2em;
  height: .5rem;
  line-height: .25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.recommend_tuwen_info>span{
  padding-right: .06rem;
  font-size: .12rem;
  color: #999;
}
.recommend_tuwen_info{
  position: relative;
    padding: .04rem 0
}
.recommend_tuwen_info>img{
  position: absolute;
  bottom: 0;
  right: 0;
  width: .22rem;
  height: .18rem;
}
.recommend_tuwen_right{
  float: right;
  padding-left:2%;
  width: 30%;
  position: relative;
}
.recommend_tuwen_right>img{
  width: 100%;
  height: 1rem
}
.recommend_tuwen_xc{
  padding:.04rem;
  line-height: .18rem;
  border-radius: .06rem;
  font-size: .10rem;
  color:white;
  background:rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: .1rem;
  right: .07rem;
}
.recommend_tuwen_xc>img{
  width: .12rem;
  height: .12rem;
  margin-right: .05rem;
  vertical-align: middle;
}
.recommend_wen_info>span{
  padding-right:.08rem;
 font-size: .12rem;
  color: #999;
  line-height: .5rem;
}
.recommend_fankui_lahei{
  width: 96%;
  border-radius: .07rem;
  background: #fff;
  position: fixed;
  top: 40%;
  left:50%;
  margin-left: -48%;
  z-index: 101;
}
.recommend_lahei,.recommend_fankui{
  border-bottom: .01rem solid #f0f0f0;
  padding: .1rem 0;
  overflow: hidden;
}
.recommend_lahei{
  border-bottom:none
}
.recommend_lahei>img,.recommend_fankui>img{
  float: left;
  margin:.08rem .12rem 0;
  width: .26rem;
  height: .26rem;
}
.recommend_lahei_info,.recommend_fankui_info{
  float: left;
}
.recommend_fankui_info>p{
  font-size: .16rem;
  line-height: .2rem;
}
.recommend_lahei_info>p{
  font-size: .16rem;
  line-height: .4rem;
  
}
.recommend_fankui_info>span{
  font-size: .12rem;
  line-height: .2rem;
  color: #999
}
.recommendMask{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>