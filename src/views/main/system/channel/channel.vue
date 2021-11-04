<template>
  <div class="channel">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="channel"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      pageName="channel"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";

import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";

export default defineComponent({
  setup() {
    const [handleQueryClick, pageContentRef] = usePageSearch();

    // pageModal相关hook逻辑
    // 单独逻辑 比如是否显示密码框
    // const newCallback = () => {
    //   const passwordItem = modalConfig.formItems.find(
    //     (item) => item.field === "password"
    //   );
    //   passwordItem!.isHidden = false;
    // };
    // const editCallback = () => {
    //   const passwordItem = modalConfig.formItems.find(
    //     (item) => item.field === "password"
    //   );
    //   passwordItem!.isHidden = true;
    // };
    // const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
    //   usePageModal(newCallback, editCallback);
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal();
    return {
      searchFormConfig,
      contentTableConfig,
      handleQueryClick,
      pageContentRef,
      modalConfig,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo,
    };
  },
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
});
</script>

<style scoped lang="less"></style>
