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
        <el-button
          v-if="pageName"
          @click="handleExportClick"
          size="small"
          class="checkBtn"
          >导出</el-button
        >

        <el-button
          v-if="refresh == 'exportlist'"
          @click="handleRefreshClick"
          size="small"
          class="checkBtn"
          >刷新</el-button
        >
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HyForm from "@/base-ui/form";
import { useStore } from "@/store";
import { ElMessageBox } from "element-plus";
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
    pageName: {
      type: String,
      default: () => "",
    },
    refresh: {
      type: String,
      default: () => "",
    },
  },
  emits: ["queryBtnClick", "resetBtnClick", "exportBtnClick"],
  setup(props, { emit }) {
    const store = useStore();
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
      emit("queryBtnClick", formData.value);
    };
    // 3、重置
    const handleResetClick = () => {
      formData.value = formOriginData;
      emit("resetBtnClick");
    };
    // 4、导出
    const handleExportClick = () => {
      ElMessageBox.confirm("是否导出文件", "导出", {
        confirmButtonText: "导出",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          store.dispatch("system/editExportDataAction", {
            pageName: props.pageName,
            queryInfo: {
              ...formData.value,
            },
          });
        })
        .catch(() => {
          console.log("已取消");
        });
    };
    //5、刷新
    const handleRefreshClick = () => {
      store.dispatch("system/getPageListAction", {
        pageName: props.refresh,
        queryInfo: {
          start: 1,
          limit: 10,
          ...formData.value,
        },
      });
    };
    return {
      formData,
      handleQueryClick,
      handleResetClick,
      handleExportClick,
      handleRefreshClick,
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
