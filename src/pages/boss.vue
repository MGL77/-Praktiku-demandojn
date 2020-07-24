<template>
  <div>
    <router-view />
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar.vue";
export default {
  components: {
    Tabbar,
  },
};
</script>
<style lang="less">
</style>