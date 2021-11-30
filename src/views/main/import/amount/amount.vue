<template>
  <div class="capitalpool">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    >
    </page-search>
    <page-content
      pageName="importamount"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      :contentTableConfig="contentTableConfig"
    >
      <template #info="scope">
        <div class="info-name">{{ scope.row.realname }}</div>
        <div class="info-phone">{{ scope.row.phone }}</div>
      </template>

      <template #batchStatus="scope">
        <div class="circle-item-success" v-if="scope.row.status == 1">
          处理成功
        </div>
        <div class="circle-item-doing" v-if="scope.row.status == 0">处理中</div>
        <div class="circle-item-fail" v-if="scope.row.status == -1">
          处理失败
        </div>
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :clickName="importamount"
      :modalConfig="modalConfig"
      pageName="importamount"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import pageModal from "@/components/page-modal";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";

import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";

// import { useStore } from "@/store";
export default defineComponent({
  components: { PageSearch, PageContent, pageModal },
  setup() {
    const {
      pageContentRef,
      handleQueryAndApplicationClick,
      handleResetAndApplicationClick,
      handleQueryClick,
      handleResetClick,
    } = usePageSearch();
    const {
      modalName,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleApplicationDetailData,
      handleApplicationDeliverData,
    } = usePageModal();

    // const store = useStore();

    return {
      contentTableConfig,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleQueryAndApplicationClick,
      handleResetAndApplicationClick,
      modalName,
      handleApplicationDetailData,
      handleApplicationDeliverData,
      searchFormConfig,
      handleQueryClick,
      handleResetClick,
    };
  },
});
</script>

<style scoped lang="less">
.circle-item-success::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid #52c41a;
  background-color: #52c41a;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 1px;
}
.circle-item-fail::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid #f5222d;
  background-color: #f5222d;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 1px;
}
.circle-item-doing::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid #1890ff;
  background-color: #1890ff;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 1px;
}
</style>
