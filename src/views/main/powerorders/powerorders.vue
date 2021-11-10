<template>
  <div class="capitalpool">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    >
    </page-search>
    <page-content
      pageName="powerorders"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      :contentTableConfig="contentTableConfig"
    >
      <template #info="scope">
        <div class="info-name">{{ scope.row.realname }}</div>
        <div class="info-phone">{{ scope.row.phone }}</div>
      </template>
      <template #ordersType="scope">
        <div>
          {{ $filters.powerordersTypeName(scope.row.type) }}
        </div>
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      clickName="powerorders"
      :modalConfig="modalConfig"
      pageName="powerorders"
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
import { modalConfig } from "./config/modal.config";

import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";
export default defineComponent({
  components: { PageSearch, PageContent, pageModal },
  setup() {
    const [handleQueryClick, handleResetClick, pageContentRef, handleNewClick] =
      usePageSearch();
    const [pageModalRef, defaultInfo, handleNewData] = usePageModal();
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleNewClick,
    };
  },
});
</script>

<style scoped></style>
