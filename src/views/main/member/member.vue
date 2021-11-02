<template>
  <div class="member">
    <div class="search">
      <hy-form v-bind="searchFormConfig" v-model="formData">
        <template #header> <h1>你好</h1> </template>
        <template #footer>
          <el-button>重置</el-button>
          <el-button>搜索</el-button>
        </template>
      </hy-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HyForm from "@/base-ui/form";
import { searchFormConfig } from "./config/search.config";
export default defineComponent({
  components: {
    HyForm,
  },
  setup() {
    const formData = ref({
      id: "",
      date: "",
      way: "",
      state: "",
    });
    return {
      searchFormConfig,
      formData,
    };
  },
});
</script>

<style scoped></style>
