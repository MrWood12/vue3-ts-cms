<template>
  <div class="capitalpool">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    >
    </page-search>
    <page-content
      pageName="capitalpool"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      :contentTableConfig="contentTableConfig"
    >
      <template v-slot:headerHandler>
        <el-button type="primary" icon="el-icon-plus" @click="handleNewClick"
          >新建</el-button
        ></template
      >
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      clickName="capitalpool"
      :modalConfig="modalConfig"
      pageName="capitalpool"
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
    const {
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      handleNewClick,
    } = usePageSearch();
    const { pageModalRef, defaultInfo, handleNewData } = usePageModal();
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
