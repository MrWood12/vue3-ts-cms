<template>
  <div class="channel">
    <hy-form v-model="formData" v-bind="searchFormConfig">
      <template #lineBtn>
        <el-button class="checkBtn" size="small" type="primary">查询</el-button>
      </template>
    </hy-form>
    <div class="content">
      <hy-table :listData="channelList" v-bind="contentTableConfig">
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
import { defineComponent, computed, ref } from "vue";
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

    store.dispatch("system/getPageListAction", {
      pageUrl: "/backend/channel/index",
      qeuryInfo: {
        start: 1,
        limit: 10,
      },
    });

    const channelList = computed(() => store.state.system.channelList);
    const channelCount = computed(() => store.state.system.channelCount);
    return {
      channelCount,
      channelList,
      formData,
      searchFormConfig,
      contentTableConfig,
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
