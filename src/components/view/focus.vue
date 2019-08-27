<template>
  <div>

    <!-- 关注列表 -->

    <div class="focusList">
      <div class="focus_userInfo">
        <div class="focus_userHeade">
          <img src="../../assets/images/touxiang1.png" alt="">
        </div>
        <div class="focus_userState">
          <p>用户昵称</p>
          <span>发送中.....</span>
        </div>
      </div>

      <!-- 发送信息进度条... -->

       <div class="focus_faSong">
          <div class="focus_jinDu"></div>
        </div>

      <!-- 最新信息 -->

      <div class="focus_news">
        <div class="focus_newsBox">
          <img src="../../assets/images/information.png" alt="">
          <span>7条新消息</span>
          <img src="../../assets/images/rightJT.png" alt="">         
        </div>
      </div>

        <!-- 关注人物列表 -->

      <div class="focus_focusList_auto">
      <div class="focus_focusList">
        <div class="focus_focusInfo">
          <div class="focus_focusHead">
          <img src="../../assets/images/touxiang1.png" alt="">
          <img src="../../assets/images/vip.png" alt="" class="focus_focusInfo_vip">
          <p>薇薇安</p>
          </div>
        </div>
        <div class="focus_focusInfo">
          <div class="focus_focusHead">
          <img src="../../assets/images/touxiang1.png" alt="">
          <img src="../../assets/images/vip.png" alt="" class="focus_focusInfo_vip">
          <p>薇薇安</p>
          </div>
        </div>
        <div class="focus_focusInfo">
          <div class="focus_focusHead">
          <img src="../../assets/images/touxiang1.png" alt="">
          <img src="../../assets/images/vip.png" alt="" class="focus_focusInfo_vip">
          <p>薇薇安</p>
          </div>
        </div>
        <div class="focus_focusInfo">
          <div class="focus_focusHead">
          <img src="../../assets/images/touxiang1.png" alt="">
          <img src="../../assets/images/vip.png" alt="" class="focus_focusInfo_vip">
          <p>薇薇安</p>
          </div>
        </div>
        <div class="focus_focusInfo">
          <div class="focus_focusHead">
          <img src="../../assets/images/touxiang1.png" alt="">
          <img src="../../assets/images/vip.png" alt="" class="focus_focusInfo_vip">
          <p>薇薇安</p>
          </div>
        </div>
      </div>
      </div>
    </div>

    <!-- 关注动态-->
    <div class="focus_content">
      <div class="focus_content_list">
      <img src="../../assets/images/close.png" alt="" @click="cancel()">
      <div class="focus_content_top">
        <div class="focus_content_head">
          <img src="../../assets/images/touxiang2.png" alt="">
          <img src="../../assets/images/vip.png" alt="">
        </div>
        <div class="focus_content_info">
          <p>亨得利</p>
          <span>20小时前</span><span>著名斯诺克职业选手，中八推广大使</span>
        </div>
      </div>
      <div class="focus_content_center">
        <h3>中式黑八中国巡回赛</h3>
        <div class="focus_content_play">
          <img src="../../assets/images/video1.png" alt="">
          <img src="../../assets/images/play.png" alt="">
          <div class="focus_content_time">132:49</div>
        </div>
      </div>
      <div class="focus_content_bottom">
        <div class="focus_content_transmit">
          <img src="../../assets/images/transmit.png" alt="">
          <span>转发:13</span>
        </div>
        <div class="focus_content_comment">
          <img src="../../assets/images/comment.png" alt="">
          <span>评论:1223</span>
        </div>
        <div class="focus_content_like">
          <img src="../../assets/images/like.png" alt="">
          <!-- <img src="" alt=""> -->
          <span>点赞:1233</span>
        </div>
      </div>
    </div>
    <div class="focus_content_list">
      <img src="../../assets/images/close.png" alt="" @click="cancel()">
      <div class="focus_content_top">
        <div class="focus_content_head">
          <img src="../../assets/images/touxiang2.png" alt="">
          <img src="../../assets/images/vip.png" alt="">
        </div>
        <div class="focus_content_info">
          <p>亨得利</p>
          <span>20小时前</span><span>著名斯诺克职业选手，中八推广大使</span>
        </div>
      </div>
      <div class="focus_content_center">
        <h3>中式黑八中国巡回赛</h3>
        <div class="focus_content_play">
          <img src="../../assets/images/video1.png" alt="">
          <img src="../../assets/images/play.png" alt="">
          <div class="focus_content_time">132:49</div>
        </div>
      </div>
      <div class="focus_content_bottom">
        <div class="focus_content_transmit">
          <img src="../../assets/images/transmit.png" alt="">
          <span>转发:13</span>
        </div>
        <div class="focus_content_comment">
          <img src="../../assets/images/comment.png" alt="">
          <span>评论:1223</span>
        </div>
        <div class="focus_content_like">
          <img src="../../assets/images/like.png" alt="">
          <!-- <img src="" alt=""> -->
          <span>点赞:1233</span>
        </div>
      </div>
    </div>
    <div class="focus_content_list">
      <img src="../../assets/images/close.png" alt="" @click="cancel()">
      <div class="focus_content_top">
        <div class="focus_content_head">
          <img src="../../assets/images/touxiang2.png" alt="">
          <img src="../../assets/images/vip.png" alt="">
        </div>
        <div class="focus_content_info">
          <p>亨得利</p>
          <span>20小时前</span><span>著名斯诺克职业选手，中八推广大使</span>
        </div>
      </div>
      <div class="focus_content_center">
        <h3>中式黑八中国巡回赛</h3>
        <div class="focus_content_play">
          <img src="../../assets/images/video1.png" alt="">
          <img src="../../assets/images/play.png" alt="">
          <div class="focus_content_time">132:49</div>
        </div>
      </div>
      <div class="focus_content_bottom">
        <div class="focus_content_transmit">
          <img src="../../assets/images/transmit.png" alt="">
          <span>转发:13</span>
        </div>
        <div class="focus_content_comment">
          <img src="../../assets/images/comment.png" alt="">
          <span>评论:1223</span>
        </div>
        <div class="focus_content_like">
          <img src="../../assets/images/like.png" alt="">
          <!-- <img src="" alt=""> -->
          <span>点赞:1233</span>
        </div>
      </div>
    </div>
    </div>
    <transition name="fade">
     <div v-if="offon" class="focus_quGuan" @touchstart.stop.prevent="quGuanstart" @touchmove.stop.prevent="quGuanmove" @touchend.stop.prevent="quGuanend">
        <img src="../../assets/images/quguan.png" alt="">
        <!-- <img src="../../assets/images/corner.png" alt=""> -->
        <div class='corner'></div>
        <span>取消关注：亨得利</span>
      </div>
      </transition>
      <transition name="fade">
    <div v-if="offon" class="focus_mask" @touchstart.stop.prevent="maskstart" @touchmove.stop.prevent="maskmove" @touchend.stop.prevent="maskend"></div>
    </transition>
  </div>
  
</template>

<script>
export default {
data(){
  return{
    offon:false,
    startX:0,
    moveX:0,
  }
  },
methods: {
  cancel(){
    this.offon=true
  },
  maskstart(ev){
     ev=ev||event;
     this.startX=ev.touches[0].clientX
  },
    maskmove(ev){
     ev=ev||event;
     this.moveX=ev.touches[0].clientX
  },
    maskend(){
     if(this.moveX==0){
      this.offon=false
    }
    this.moveX=0
    this.startX=0
  },
  quGuanstart(ev){
    ev=ev||event;
    this.startX=ev.touches[0].clientX
    console.log(this.startX+'aa');
  },
  quGuanmove(ev){
    ev=ev||event;
    this.moveX=ev.touches[0].clientX
  },
  quGuanend(){
    // ev=ev||event;
    // this.endX=ev.touches[0].clientX
    // console.log(this.moveX);
    if(this.moveX==0){
      alert('取消关注成功！');
      this.offon=false
    }
    this.moveX=0
    this.startX=0
  }
  // quGuanstart:function(e){
  //   console.log(e.clientX);
    
  // }
}
}
</script>

<style>
/* .fade-enter,.fade-leave-to{
  opacity:0;
} */
.aa{
  margin: .2rem;
  height: 3rem
}
.focusList{
  position: fixed;
  top:.9rem;
  left: 0;
  width: 100%;
  z-index: 99;
  background: white;
}
.focus_userInfo{
  overflow: hidden;
}
.focus_userInfo>.focus_userHeade>img,.focus_userInfo>.focus_userHeade{
  width: .4rem;
  height: .4rem;
  border-radius: 50%;
}
.focus_userInfo>.focus_userHeade{
  padding:.03rem .14rem;
  float: left;
}
.focus_userInfo>.focus_userState{
  float: left;
  text-align: center;
}
.focus_userState>p{
  font-size: .14rem;
  line-height: .22rem;
  color: #999
}
.focus_userState>span{
  font-size: .14rem;
  line-height: .21rem;
  color:skyblue
}
.focus_faSong{
  width:100%;
  height:.04rem;
  background: #f0f0f0;
  position: relative;
}
.focus_jinDu{
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: .04rem;
  background: skyblue;
}
.focus_news{
  padding: .18rem;
}
.focus_newsBox{
  width: 2rem;
  height: .4rem;
  border-radius: .4rem;
  background: #999;
  margin: 0 auto;
  text-align: center;
  line-height: .4rem;
  font-size: .16rem;
  color: white;
  position: relative;
}
.focus_newsBox>img:first-child{
  width: .3rem;
  height: .3rem;
  position: absolute;
  top: .06rem;
  left: .1rem;
}
.focus_newsBox>img:last-child{
  width: .08rem;
  height: .16rem;
  position: absolute;
  top: .12rem;
  right: .12rem
}

.focus_focusList_auto{
  border-top: 0.04rem solid rgb(240, 240, 240);
  border-bottom: 0.04rem solid rgb(240, 240, 240);
}
.focus_focusList_auto>.focus_focusList{
  overflow: auto;
  height: 1rem;
  /* background: red; */
  white-space:nowrap;
  padding-right: .1rem
}
.focus_focusInfo{
  padding: .1rem 0;
  margin-left: .16rem;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
}
.focus_focusHead,.focus_focusInfo img:first-child{
  width: .63rem;
  height: .63rem;
}
.focus_focusHead{
  position: relative;
}

.focus_focusInfo_vip{
  width: .14rem;
  height: .14rem;
  position: absolute;
  top: .5rem;
  right: 0
}
.focus_focusInfo p{
  font-size: .12rem;
  color: #999
}
.focus_content{
  /* border-bottom: .04rem solid #ccc; */
  /* background: #999; */            
  margin-top: 2.34rem;
}
.focus_content_list{
  position: relative;
  padding: .08rem 0;
  border-bottom: .04rem solid #f0f0f0;
  z-index: 1
}
.focus_content_list>img{
  width: .22rem;
  height: .16rem;
  position: absolute;
  top: .06rem;
  right:.12rem;
}
::-webkit-scrollbar{
display:none;
}
.focus_content_head{
  float: left;
  /* padding-top:.06rem; */
  margin:0 .12rem;
  position: relative;
}
.focus_content_head,.focus_content_head>img:first-child{
  width: .48rem;
  height: .48rem;
}
.focus_content_head>img:last-child{
  width: .14rem;
  height: .14rem;
  position: absolute;
  top:.34rem;
  left: .36rem
}
.focus_content_info{
  color: #999;
}
.focus_content_top{
  overflow: hidden;
}
.focus_content_info>p{
  line-height: .22rem;
  font-size: .14rem
}
.focus_content_info>span{
  font-size: .12rem;
  padding-right: .1rem;
  line-height: .2rem
}

.focus_content_play{
  width: 100%;
  height: 2rem;
  position: relative;
}
.focus_content_play>img:first-child{
  width: 100%;
  height: 2rem;
  position: absolute;
  top: 0;
  left:0;
}
.focus_content_play>img:nth-child(2){
  width: .6rem;
  height: .6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left:-.3rem;
  margin-top:-.3rem;
}
.focus_content_center>h3{
  font-weight: 600;
  padding-left: .2rem;
  color:#666;
  line-height: .36rem;
  font-family: SimHei 
}
.focus_content_bottom{
  display: flex;
  padding-top: .2rem;
  padding-bottom: .1rem
}
.focus_content_bottom>div{
  flex: 1;
  text-align: center;
  /* background: yellow; */
  font-size: .14rem;
  color: #707070;
  vertical-align: middle;
}
.focus_content_bottom>div img{
  vertical-align: middle;
  width: .2rem;
  height: .2rem
}
.focus_quGuan{
  width:96%;
  height: .5rem;
  border-radius: .04rem;
  line-height: .5rem;
  background: #f0f0f0;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -48%;
  font-size: .14rem;
  color: #999;
  text-indent: 4em;
  z-index: 101;
}
.focus_quGuan>img:first-child{
  width: .2rem;
  height: .15rem;
  position: absolute;
  top: 50%;
  left:.2rem;
  margin-top: -.07rem;

}
.focus_mask{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  transition: 1s all
}
.corner{
  width: .02rem;
  border: .05rem solid rgba(255, 255, 255, 0);
  border-bottom: .08rem solid #fff;
  position: absolute;
  right: .04rem;
  top: -.13rem;
  z-index: 1;
}
.focus_content_time{
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
</style>