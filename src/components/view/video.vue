<template>
  <div>
   <div class="video">
    <div class="videoList">
      <h3>中式黑八中国巡回赛</h3>
      <div class="videoList_play">
        <img src="../../assets/images/video1.png" alt="">
        <img src="../../assets/images/play.png" alt="">
        <div class="videoList_time">132:49</div>
        <span>12万次播放</span>
      </div>
    </div>
    <div class="videoList_bottom">
      <div class="videoList_bottom_left">
        <div class="videoList_bottom_leftImg">
          <img src="../../assets/images/touxiang2.png" alt="">
          <img src="../../assets/images/vip.png" alt="">
        </div>
        <div class="videoList_bottom_leftInfo">
          <span>亨得利</span>
          <img src="../../assets/images/yiguanzhu.png" alt="">
        </div>
      </div>
      <div class="videoList_bottom_right">
        <img src='../../assets/images/comment.png' alt="">
        <span>123</span>
        <img src="../../assets/images/more.png" alt="" class="morea" @touchstart.stop.prevent="morestart" @touchmove.stop.prevent="moremove" @touchend.stop.prevent="moreend">
      </div>
    </div>
  </div>
   <div class="video">
    <div class="videoList">
      <h3>中式黑八中国巡回赛</h3>
      <div class="videoList_play">
        <img src="../../assets/images/video1.png" alt="">
        <img src="../../assets/images/play.png" alt="">
        <div class="videoList_time">132:49</div>
        <span>12万次播放</span>
      </div>
    </div>
    <div class="videoList_bottom">
      <div class="videoList_bottom_left">
        <div class="videoList_bottom_leftImg">
          <img src="../../assets/images/touxiang2.png" alt="">
          <img src="../../assets/images/vip.png" alt="">
        </div>
        <div class="videoList_bottom_leftInfo">
          <span>亨得利</span>
          <img src="../../assets/images/guanzhu.png" alt="">
        </div>
      </div>
      <div class="videoList_bottom_right">
        <img src='../../assets/images/comment.png' alt="">
        <span>123</span>
        <img src="../../assets/images/more.png" alt="" class="morea" @touchstart.stop.prevent="morestart" @touchmove.stop.prevent="moremove" @touchend.stop.prevent="moreend">
      </div>
    </div>
  </div>
  <transition name="fade">
  <div class="moreMask" v-if="moreOffon" @touchstart.stop.prevent="backstart" @touchmove.stop.prevent="backmove" @touchend.stop.prevent="backend"></div>
  </transition>
  <transition name="fade">
  <div class="more" v-if="moreOffon">
    <div class="more_one">
      <div class="more_one_list">
        <img src="../../assets/images/weichat.png" alt="" @touchstart.stop.prevent="morewechatstart" @touchmove.stop.prevent="morewechatmove" @touchend.stop.prevent="morewechatend">
        <p>微信</p>
      </div>
      <div class="more_one_list">
        <img src="../../assets/images/moments.png" alt="" @touchstart.stop.prevent="moremomentstart" @touchmove.stop.prevent="moremomentmove" @touchend.stop.prevent="moremomentend">
        <p>朋友圈</p>
      </div>
      <div class="more_one_list">
        <img src="../../assets/images/qq.png" alt="" @touchstart.stop.prevent="moreqqstart" @touchmove.stop.prevent="moreqqmove" @touchend.stop.prevent="moreqqend">
        <p>QQ</p>
      </div>
      <div class="more_one_list">
        <img src="../../assets/images/qqspace.png" alt="" @touchstart.stop.prevent="moreqqspacestart" @touchmove.stop.prevent="moreqqspacemove" @touchend.stop.prevent="moreqqspaceend">
        <p>QQ空间</p>
      </div>
      <div class="more_one_list">
        <img src="../../assets/images/microblog.png" alt="" @touchstart.stop.prevent="moremicroblogstart" @touchmove.stop.prevent="moremicroblogmove" @touchend.stop.prevent="moremicroblogend">
        <p>微博</p>
      </div>
    </div>
    <div class="more_one">
      <div class="more_one_list">
        <img src="../../assets/images/collect.png" alt="" @touchstart.stop.prevent="morecollectstart" @touchmove.stop.prevent="morecollectmove" @touchend.stop.prevent="morecollectend">
        <p>收藏</p>
      </div>
      <div class="more_one_list">
        <img src="../../assets/images/uninterested.png" alt="" @touchstart.stop.prevent="moreuninterestedstart" @touchmove.stop.prevent="moreuninterestedmove" @touchend.stop.prevent="moreuninterestedend">
        <p>不感兴趣</p>
      </div>
      <div class="more_one_list">
        <img src="../../assets/images/zan.png" alt="" @touchstart.stop.prevent="morezanstart" @touchmove.stop.prevent="morezanmove" @touchend.stop.prevent="morezanend">
        <p>顶<span>3778</span></p>
      </div>
      <div class="more_one_list">
        <img src="../../assets/images/cai.png" alt="" @touchstart.stop.prevent="morecaistart" @touchmove.stop.prevent="morecaimove" @touchend.stop.prevent="morecaiend">
        <p>踩<span>237</span></p>
      </div>
      <div class="more_one_list">
        <img src="../../assets/images/report.png" alt="" @touchstart.stop.prevent="morereportstart" @touchmove.stop.prevent="morereportmove" @touchend.stop.prevent="morereportend">
        <p>举报</p>
      </div>
    </div>
      <div class="more_quxiao" @touchstart.stop.prevent="morequxiaostart" @touchmove.stop.prevent="morequxiaomove" @touchend.stop.prevent="morequxiaoend">
        取消
      </div>
  </div>
  </transition>
</div>
</template>
<script>
export default {
  data(){
  return{
    // img1:"../../assets/images/touxiang2.png",
    // img1:"../../assets/images/touxiang2.png",
    // img2:'../../assets/images/yiguanzhu.png',
    // img3:'../../assets/images/comment.png',
    // img4:'../../assets/images/more.png',
    // img5:'../../assets/images/vip.png',
    moreOffon:false,
    startX:0,
    moveX:0,
  }
  },
  methods:{
    // 视频页 弹出弹框
  morestart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  moremove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  moreend(){
    if(this.moveX==0){
      this.moreOffon=true
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 取消弹框
  morequxiaostart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  morequxiaomove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  morequxiaoend(){
    if(this.moveX==0){
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 微信分享
  morewechatstart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  morewechatmove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  morewechatend(){
    if(this.moveX==0){
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 朋友圈分享
  moremomentstart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  moremomentmove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  moremomentend(){
    if(this.moveX==0){
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 QQ分享
  moreqqstart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  moreqqmove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  moreqqend(){
    if(this.moveX==0){
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 QQ空间分享
  moreqqspacestart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  moreqqspacemove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  moreqqspaceend(){
    if(this.moveX==0){
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 微博分享
  moremicroblogstart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  moremicroblogmove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  moremicroblogend(){
    if(this.moveX==0){
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 收藏
  morecollectstart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  morecollectmove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  morecollectend(){
    if(this.moveX==0){
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 不感兴趣
  moreuninterestedstart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  moreuninterestedmove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  moreuninterestedend(){
    if(this.moveX==0){
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 顶
  morezanstart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  morezanmove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  morezanend(){
    if(this.moveX==0){
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 踩
  morecaistart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  morecaimove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  morecaiend(){
    if(this.moveX==0){
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  },
  //视频页 举报
  morereportstart(ev){
    var ev=ev||event
    this.startX=ev.touches[0].clientX
  },
  morereportmove(ev){
    var ev=ev||event
    this.moveX=ev.touches[0].clientX
  },
  morereportend(){
    if(this.moveX==0){
      this.moreOffon=false
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
      this.moreOffon=false
    }
    this.startX=0
    this.moveX=0
  }
  }
  }
</script>

<style>
.fade-enter-active,.fade-leave-active{
  transition:opacity .6s;
}
.videoList{
  position: relative;
  /* border-bottom: .04rem solid #f0f0f0; */
}
.videoList>h3{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: .1rem;
  font-size: .16rem;
  font-weight: 600;
  color:#fff;
  line-height: .32rem;
  background: linear-gradient(top,rgba(0,0,0,1),rgba(0,0,0,0.3  ));
  z-index: 1
}
.videoList_play{
  position: relative;
}
.videoList_play,.videoList_play>img:first-child{
  width: 100%;
  height: 2rem;
}
.videoList_play>img:nth-child(2){
  width: .5rem;
  height: .5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -.25rem;
  margin-top:-.25rem;
}
.videoList_play>span{
  position: absolute;
  left: .14rem;
  bottom: .08rem;
  font-size: .12rem;
  color: white
}  
.videoList_time{
  padding:0 .08rem; 
  height: .2rem;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  line-height: .2rem;
  font-size: .10rem;
  color: #fff;
  border-radius: .04rem;
  position: absolute;
  bottom: .1rem;
  right: .12rem;
}
.videoList_bottom{
  height: .6rem;
  background: #fff;
  line-height: .6rem;
  font-size: .12rem
}
.videoList_bottom_left,.videoList_bottom_leftImg,.videoList_bottom_leftInfo{
  float: left;
}
.videoList_bottom_right{
  float: right;
}
.videoList_bottom_left{
  overflow: hidden;
}
.videoList_bottom_leftImg>img:nth-child(1){
  width: .42rem;
  height: .42rem;
}
.videoList_bottom_leftImg>img:nth-child(2){
  width: .12rem;
  height: .12rem;
  position: absolute;
  top: .29rem;
  right: -.02rem;

}
.videoList_bottom_leftImg{
  width: .42rem;
  height: .42rem;
  position: relative;
  margin-right: .1rem;
  /* margin-top:.09rem; */
  margin-left: .1rem
}
.videoList_bottom_leftInfo>img{
  width: .4rem;
  height: .24rem
}
.videoList_bottom_leftInfo>span{
  padding-right: .1rem
}
.videoList_bottom_right{
  padding-right: .14rem
}
.videoList_bottom_right>img:nth-child(1){
  width: .2rem;
  height:.16rem
}
.videoList_bottom_right>span{
  padding:0 .05rem
}
.videoList_bottom_right>.morea{
  width: .16rem;
  height: .02rem;
  margin-bottom: .05rem
}
.more{
  width: 96%;
  background: #fff;
  position: fixed;
  bottom: .6rem;
  left: 50%;
  border-radius: .05rem;
  margin-left: -48%;
  z-index: 100;
}
.more_one{
  border-bottom: .01rem solid #f0f0f0;
  padding: .1rem 0;
  height: .6rem;

  display: flex;
}
.more_one_list{
  flex: 1;
  text-align: center;
  font-size: .12rem;
  line-height: .26rem;
  color: #666;
}
.more_one_list>img{
  width: .32rem;
  height: .30rem
}
.more_quxiao{
  position: absolute;
  bottom: -.54rem;
  left: 0;
  height: .5rem;
  width: 100%;
  background: #fff;
  text-align: center;
  line-height: .5rem;
  z-index: 100;
  border-radius: .05rem
}
.moreMask{
  width: 100%;
  height: 100%;
  background:rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100
}
</style>