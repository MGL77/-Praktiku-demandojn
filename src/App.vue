<template>
  <div id="app">
    <Tian />
    <router-view />
    <Father />
  </div>
</template>

<script>
import Father from "@/components/father";
import Tian from "@/components/tian";
export default {
  components: {
    Father,
    Tian
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.12rem;
}
img {
  display: block;
}
</style>
