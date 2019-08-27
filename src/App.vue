<template>
  <div id="app">
     <div class="mainNav">
      <router-link to="/index" active-class="mainActive"><div><span class="iconfont icon-shouye"></span><p>首页</p></div></router-link>
      <router-link to="/yueju" active-class="mainActive"><div><span class="iconfont icon-rili"></span><p>约局</p></div></router-link>
      <router-link to="/zixun" active-class="mainActive"><div><span class="iconfont icon-zixun"></span><p>资讯</p></div></router-link>
      <router-link to="/my" active-class="mainActive"><div><span class="iconfont icon-wode"></span><p>我的</p></div></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
 .small-font{
  font-size: 12px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.80);
}
img{
  vertical-align: middle
}
body,html{
  padding: 0;
  margin: 0;
}
a{
  color:#999;
  font-size:.12rem;
  text-decoration: none;
}
p,h1,h2,h3,h4,h5,h6,li,ul,dl,dd,dt{
  margin: 0;
  padding: 0;
  list-style: none;
}
.mainActive{
  color: orange;
}
.mainNav{
  position: fixed;
  bottom:0;
  left: 0;
  display: flex;
  width: 100%;
  height: .6rem;
  line-height: .19rem;
  z-index: 99
}
.mainNav p{
  margin: 0;
}
.mainNav>a{
  flex: 1;
  height:.5rem;
  background: #f0f0f0;
  padding-top: .12rem;
  text-align: center;
  text-decoration: none;
}
.mainNav>a span{
  font-size: .24rem
}
</style>
