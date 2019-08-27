<template>
  <div class="littlevideo">
    <div class="littlevideo_list">
      <img src="../../assets/images/img2.png" alt="">
      <div class="littlevideo_list_mask">
        <p>这是一段标题空间分隔空间但是复合物i以后</p>
        <div class="littlevideo_list_maskBot small-font">
          <div class="littlevideo_list_maskLeft">
            <img src="../../assets/images/playcount.png" alt="">
            <span>5.6万次播放</span>
          </div>
          <div class="littlevideo_list_maskRight">
            <span>789万获赞</span>
          </div>
        </div>
      </div>
    </div>
    <div class="littlevideo_list">
      <img src="../../assets/images/img3.png" alt="">
      <div class="littlevideo_list_mask">
        <p>这是一段标题空间分隔空间但是复合物i以后</p>
        <div class="littlevideo_list_maskBot small-font">
          <div class="littlevideo_list_maskLeft">
            <img src="../../assets/images/playcount.png" alt="">
            <span>5.6万次播放</span>
          </div>
          <div class="littlevideo_list_maskRight">
            <span>789万获赞</span>
          </div>
        </div>
      </div>
    </div>
    <div class="littlevideo_list">
      <img src="../../assets/images/img4.png" alt="">
      <div class="littlevideo_list_mask">
        <p>这是一段标题空间分隔空间但是复合物i以后</p>
        <div class="littlevideo_list_maskBot small-font">
          <div class="littlevideo_list_maskLeft">
            <img src="../../assets/images/playcount.png" alt="">
            <span>5.6万次播放</span>
          </div>
          <div class="littlevideo_list_maskRight">
            <span>789万获赞</span>
          </div>
        </div>
      </div>
    </div>
    <div class="littlevideo_list">
      <img src="../../assets/images/img5.png" alt="">
      <div class="littlevideo_list_mask">
        <p>这是一段标题空间分隔</p>
        <div class="littlevideo_list_maskBot small-font">
          <div class="littlevideo_list_maskLeft">
            <img src="../../assets/images/playcount.png" alt="">
            <span>5.6万次播放</span>
          </div>
          <div class="littlevideo_list_maskRight">
            <span>789万获赞</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.littlevideo{
  overflow: hidden;
}
.littlevideo_list{
  width: 49%;
  height: 2.6rem;
  float: left;
  margin: .5%;
  position: relative;
}
.littlevideo_list>img{
  width: 100%;
  height:100%;
}
.littlevideo_list_mask{
  width: 90%;
  padding: 0 5%;
  height: .8rem;
  background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,1));
  /* background:red; */
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
}
.littlevideo_list_maskLeft{
  float: left;
}
.littlevideo_list_maskLeft img{
  width:.2rem;
  height: .2rem
}
.littlevideo_list_maskBot{
  white-space :nowrap;
  font-size: 11px;
  position: absolute;
  bottom: .08rem;
  left: .1rem;
  width: 100%;
}
.littlevideo_list_mask>p{
  font-size: .16rem;
  font-weight: 600;
  line-height: .24rem
  /* font-family: songti */
}
.littlevideo_list_maskRight{
  position: absolute;
  bottom:0rem;
  right:-.2rem;
}
</style>