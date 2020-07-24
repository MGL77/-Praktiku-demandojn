<template>
  <div class="one">
    <Boss />111
  </div>
</template>
<script>
import Boss from "@/pages/boss.vue";
export default {
  components: {
    Boss,
  },
};
</script>
<style lang="less">
.one {
  width: 4rem;
  height: 4rem;
  background-color: violet;
}
</style>