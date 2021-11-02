<template>
  <div class="channel">
    <hy-form v-model="formData" v-bind="searchFormConfig">
      <template #lineBtn>
        <el-button
          class="checkBtn"
          size="small"
          type="primary"
          @click="handleQueryClick"
          >查询</el-button
        >
      </template>
    </hy-form>
    <div class="content">
      <hy-table
        :listData="channelList"
        :dataCount="channelCount"
        v-bind="contentTableConfig"
        v-model:page="pageInfo"
      >
        <!-- 1、header插槽 -->
        <template #headerHandler>
          <el-button type="primary" icon="el-icon-plus">新建</el-button>
        </template>
        <!-- 2、列中插槽 -->
        <template #status="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="-1"
          />
        </template>
        <!-- <template #handler>
          <div class="handle-btns">
            <el-button size="mini" icon="el-icon-edit" type="text"
              >编辑</el-button
            >
            <el-button size="mini" icon="el-icon-delete" type="text"
              >删除</el-button
            >
          </div>
        </template> -->
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "@/store";
import HyForm from "@/base-ui/form";
import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import HyTable from "@/base-ui/table";
export default defineComponent({
  setup() {
    const store = useStore();
    const formData = ref({
      name: "",
      status: "",
    });
    // 分页点击下一页
    const pageInfo = ref({ currentPage: 0, pageSize: 10 });
    watch(pageInfo, () => getPageData());
    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch("system/getPageListAction", {
        pageUrl: "/backend/channel/index",
        qeuryInfo: {
          start: pageInfo.value.currentPage * pageInfo.value.pageSize,
          limit: pageInfo.value.pageSize,
          ...queryInfo,
        },
      });
    };
    getPageData();

    // 从vux中获取数据
    const channelList = computed(() => store.state.system.channelList);
    const channelCount = computed(() => store.state.system.channelCount);

    // 点击搜索
    const handleQueryClick = () => {
      getPageData(formData.value);
    };
    return {
      channelCount,
      channelList,
      formData,
      searchFormConfig,
      contentTableConfig,
      handleQueryClick,
      pageInfo,
    };
  },
  components: {
    HyForm,
    HyTable,
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
.content {
  padding: 20px;
}
.checkBtn {
  margin-top: 4px;
  width: 65px;
  margin-left: 50px;
}
</style>
