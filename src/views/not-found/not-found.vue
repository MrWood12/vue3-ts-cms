<template>
  <div class="not-found">
    <img src="@/assets/img/404.svg" alt="" />
    <span class="text">没有这个页面哈</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.not-found {
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    width: 600px;
  }
  .text {
    font-size: 30px;
    margin-top: 50px;
  }
}
</style>
