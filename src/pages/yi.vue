<template>
  <div class="yi">
    <Big />
    <ul>
      <li v-for="item in nv" :key="item.id">
        <img :src="item.s_pic" alt />
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Big from "@/pages/big.vue";
export default {
  data() {
    return {
      nv: [],
    };
  },
  components: {
    Big,
  },
  async created() {
    let data = await this.axios.get("../../static/json/list.json");
    this.nv = data.data.result;
    console.log(this.nv);
  },
};
</script>
<style lang="less">
.yi {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      width: 1.8rem;
      height: 3rem;
      align-items: center;
      img {
        width: 1.8rem;
        height: 2.2rem;
        border-radius: 0.06rem;
      }
      p {
          color: rgb(39, 36, 36);
          text-align: center;
          margin-top: 0.1rem;
      }

    }
  }
}
</style>