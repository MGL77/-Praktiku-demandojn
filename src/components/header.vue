<template>
  <div class="header">
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item replace to="yi">女装</van-tabbar-item>
      <van-tabbar-item replace to="er">男装</van-tabbar-item>
      <van-tabbar-item replace to="san">童装</van-tabbar-item>
      <van-tabbar-item replace to="si">婴幼儿</van-tabbar-item>
      <van-tabbar-item replace to="wu">运动</van-tabbar-item>
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
.header {
  position: relative;
  .van-tabbar--fixed {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>