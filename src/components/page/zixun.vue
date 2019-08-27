<template>
  <div class="zx" @click="back()">
    <div class="zx_faBu" v-if="fabuOffon">
          <div class="zx_faBu_list" @click="ftw()">
            <img src="../../assets/images/ftw_logo.png" alt="">
            <span>发图文</span>
          </div>
          <div class="zx_faBu_list" @click="pxsp()">
            <img src="../../assets/images/pxsp_logo.png" alt="">
            <span>拍小视频</span>
          </div>
          <div class="zx_faBu_list" @click="fsp()">
            <img src="../../assets/images/fsp_logo.png" alt="">
            <span>发视频</span>
          </div>
          <div class="zx_faBu_list" @click="jcwz()">
            <img src="../../assets/images/jcwz_logo.png" alt="">
            <span>教程文章</span>
          </div>
          <div class="zx_faBu_list" @click="jcsp()">
            <img src="../../assets/images/jcsp_logo.png" alt="">
            <span>教程视频</span>
          </div>
          <div class="fabu_corner"></div>
      </div>
    <!-- 资讯搜索栏 -->
    <div class="zxTop">
    <div class="zxSearch">
      <div class="zx_Search">
        <input type="text" placeholder="搜索感兴趣的内容">
        <img src="../../assets/images/search.png" alt="">
      </div>
      <div class="zxFabu" @touchstart.stop.prevent="fabustart" @touchmove.stop.prevent="fabumove" @touchend.stop.prevent="fabuend">
        <img src="../../assets/images/fabu.png" alt="">
      </div>
    </div>
    <!-- 资讯导航栏 -->
    <div class="zxNav">
      <router-link to="focus" active-class="zxActive"><p>关注</p></router-link>
      <router-link to="recommend" active-class="zxActive"><p>推荐</p></router-link>
      <router-link to="article" active-class="zxActive"><p>文章</p></router-link>
      <router-link to="video" active-class="zxActive"><p>视频</p></router-link>
      <router-link to="littlevideo" active-class="zxActive"><p>小视频</p></router-link>
    </div>
    </div>
    <!-- 资讯内容 -->
    <router-view class="zxView"></router-view>
  </div>
</template>

<script>
export default {
data(){
  return{
    fabuOffon:false,
    startX:0,
    moveX:0,
  }
  },
methods: {
    ftw(){
    console.log('ftw');
  },
    pxsp(){
    console.log('pxsp');
  },
    fsp(){
    console.log('fsp');
  },
    jcwz(){
    console.log('jcwz');
  },
    jcsp(){
    console.log('jcsp');
  },
  back(){
    this.fabuOffon=false
  },
   fabustart(ev){
    ev=ev||event;
    this.startX=ev.touches[0].clientX
  },
  fabumove(ev){
    ev=ev||event;
    this.moveX=ev.touches[0].clientX
  },
  fabuend(){
    // ev=ev||event;
    // this.endX=ev.touches[0].clientX
    // console.log(this.moveX);
    if(this.moveX==0){
      this.fabuOffon=!this.fabuOffon
    }
    this.moveX=0
    this.startX=0
  }
}
}
</script>

<style>
.zxTop{
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99
}
.zxView{
  padding-top:.9rem;
  padding-bottom:.6rem;
  overflow: auto;
}
.zxSearch{
  background: rgb(60, 216, 60);
  display: flex;
  padding-left: .16rem;
  height: .5rem;
}
.zxSearch>.zx_Search{
  flex:6 ;
  height: .34rem;
  margin: auto 0;
}
.zx_Search{
  position: relative;
}
.zxSearch>.zx_Search>input{
  width: 64%;
  height:100%;
  outline: none;
  border: none;
  border-radius: .03rem;
  padding-left: 36%;
  font-size: .14rem;
  color: #999
}
.zx_Search>img{
  width: .16rem;
  height: .16rem;
  position: absolute;
  top: .1rem;
  left:.9rem
}
.zxSearch>.zxFabu{
  flex: 1
}
.zxNav{
  overflow: hidden;
  height: .4rem;
  line-height: .4rem;
  border-bottom: .01rem solid #f0f0f0;
  background: white;
}

.zxNav>a{
  float: left;
  padding-left: .16rem;  
  font-weight:500
}
.zxNav>a>p{
  font-weight: 500;
  font-size: .16rem
}
.zxTop>.zxNav>.zxActive{
  color: rgb(236, 176, 133);
  font-weight: 600
}
.zxFabu>img{
  display: block;
  width: .26rem;
  height: .32rem;
  margin: .1rem auto
}
input::-webkit-input-placeholder{
  color:#ccc;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
  color:#ccc;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
  color:#ccc;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
  color:#ccc;
}
.zx_faBu{
  width: 1.1rem;
  padding: 0 .05rem;
  background: rgba(0,0,0,0.7);
  position: fixed;
  top: .64rem;
  right: .05rem;
  border-radius: .05rem;
  z-index: 100;
}
.zx_faBu_list{
  line-height: .38rem;
  border-top: .01rem solid rgba(255, 255, 255, .1);
  padding-left: .1rem
}
.zx_faBu_list>img{
  width: .14rem;
  height: .14rem;
  vertical-align: middle;
  border-bottom:.02rem solid #ccc;
  margin-right: .1rem
}
.zx_faBu_list>span{
  font-size: .14rem;
  color: white
}
.fabu_corner{
  border:  .08rem solid rgba(255, 255, 255, 0);
  border-bottom: .14rem solid rgba(0,0,0,0.7);
  position: absolute;
  top: -.21rem;
  right: .17rem
}
</style>