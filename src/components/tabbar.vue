<template>
  <div>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item replace to="one" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="two" icon="search">分类</van-tabbar-item>
      <van-tabbar-item replace to="three" icon="search" badge="5">购物车</van-tabbar-item>
      <van-tabbar-item replace to="four" icon="search">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style lang="less">
</style>