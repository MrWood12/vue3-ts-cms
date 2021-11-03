<template>
  <div class="page-content content">
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1、header插槽 -->
      <template #headerHandler>
        <el-button type="primary" icon="el-icon-plus" @click="handleNewClick"
          >新建</el-button
        >
      </template>
      <!-- 2、列中插槽 -->
      <template #status="scope">
        <el-switch
          v-model="scope.row.status"
          :active-value="1"
          :inactive-value="-1"
        />
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            size="mini"
            icon="el-icon-edit"
            type="text"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" icon="el-icon-delete" type="text"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 在pagecontent中动态插入剩余插槽 -->
      <template
        v-for="item in otherPropsSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "@/store";

import HyTable from "@/base-ui/table";

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true,
    },
    pageName: {
      type: String,
      require: true,
    },
  },
  emits: ["newBtnClick", "editBtnClick"],
  setup(props, { emit }) {
    const store = useStore();
    // 分页点击下一页
    const pageInfo = ref({ currentPage: 0, pageSize: 10 });
    watch(pageInfo, () => getPageData());

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        qeuryInfo: {
          start: pageInfo.value.currentPage * pageInfo.value.pageSize,
          limit: pageInfo.value.pageSize,
          // start: 0,
          // limit: 10,
          ...queryInfo,
        },
      });
    };
    getPageData();

    // 从vux中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    );

    // 获取其他的动态插槽名称
    const otherPropsSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        //用于过滤固定插槽
        if (item.slotName === "handler") return false;
        return true;
      }
    );

    // 编辑/新建
    const handleNewClick = () => {
      emit("newBtnClick");
    };
    const handleEditClick = (item: any) => {
      emit("editBtnClick", item);
    };
    return {
      dataList,
      dataCount,
      getPageData,
      pageInfo,
      otherPropsSlots,
      handleNewClick,
      handleEditClick,
    };
  },
  components: {
    HyTable,
  },
});
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>
