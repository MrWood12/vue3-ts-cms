<template>
  <div class="page-search">
    <hy-form v-model="formData" v-bind="searchFormConfig">
      <template #lineBtn>
        <el-button
          class="resetBtn"
          size="small"
          type="primary"
          @click="handleResetClick"
          >重置</el-button
        >
        <el-button
          class="checkBtn"
          size="small"
          type="primary"
          @click="handleQueryClick"
          >查询</el-button
        >
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HyForm from "@/base-ui/form";
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  emits: ["queryBtnClick", "resetBtnClick"],
  setup(props, { emit }) {
    // s双向绑定应该是由配置文件的field来决定
    // 1、优化一：formData中的属性应该动态决定
    const formItems = props.searchFormConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.field] = "";
    }
    const formData = ref(formOriginData);

    // 2、查询
    const handleQueryClick = () => {
      console.log(formData.value);
      emit("queryBtnClick", formData.value);
    };
    // 3、重置
    const handleResetClick = () => {
      formData.value = formOriginData;
      emit("resetBtnClick");
    };
    return {
      formData,
      handleQueryClick,
      handleResetClick,
    };
  },
  components: {
    HyForm,
  },
});
</script>

<style scoped lang="less">
.channel {
  .newBtn {
    text-align: left;
    margin-left: 20px;
  }
}
.page-search {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.checkBtn {
  margin-top: 4px;
  width: 65px;
  margin-left: 20px;
}
.resetBtn {
  margin-top: 4px;
  width: 65px;
  margin-left: 50px;
}
</style>
