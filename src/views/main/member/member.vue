<template>
  <div class="member">
    <div class="search">
      <hy-form></hy-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HyForm from "@/base-ui/form";
export default defineComponent({
  components: {
    HyForm,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
