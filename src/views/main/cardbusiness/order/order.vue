<template>
  <div class="capitalpool">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    >
    </page-search>
    <page-content
      pageName="cardorder"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      :contentTableConfig="contentTableConfig"
    >
      <template #info="scope">
        <div class="info-name">{{ scope.row.realname }}</div>
        <div class="info-phone">{{ scope.row.phone }}</div>
      </template>
      <template #cardorderType="scope">
        <div>
          {{ $filters.cardorderTypeName(scope.row.type) }}
        </div>
      </template>
      <template #cardorderStatus="scope">
        <div
          :class="{
            'circle-item-success': scope.row.status == 1,
            'circle-item-fail': scope.row.status == -1,
            'circle-item-doing': scope.row.status == 0,
          }"
        >
          {{ $filters.cardorderStatusName(scope.row.status) }}
        </div>
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      clickName="cardorder"
      :modalConfig="modalConfig"
      pageName="cardorder"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import pageModal from "@/components/page-modal";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";

import { useStore } from "@/store";
export default defineComponent({
  components: { PageSearch, PageContent, pageModal },
  setup() {
    const {
      pageContentRef,
      handleNewClick,
      handleUploadClick,
      handleQueryClick,
      handleResetClick,
    } = usePageSearch();
    const [pageModalRef, defaultInfo, handleNewData] = usePageModal();

    const store = useStore();
    store.dispatch("getPowerAmount");

    const priceAmount = computed(() => {
      return store.state.powerAmount.amount;
    });
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleNewClick,
      priceAmount,
      handleUploadClick,
      handleQueryClick,
      handleResetClick,
    };
  },
});
</script>

<style scoped>
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
