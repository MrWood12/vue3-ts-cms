<template>
  <div class="member">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="member"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #info="scope">
        <div class="info-name">{{ scope.row.realname }}</div>
        <div class="info-phone">{{ scope.row.phone }}</div>
      </template>
      <template #right="scope">
        <div class="start-time">{{ scope.row.right_start_time }}</div>
        <div class="end-time">{{ scope.row.right_end_time }}</div>
      </template>
    </page-content>
    <page-modal
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="member"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { useStore } from "@/store";

import { contentTableConfig } from "./config/content.config";
import { searchFormConfig } from "./config/search.config";
import { modalConfig } from "./config/modal.config";

import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";

import PageContent from "@/components/page-content/src/page-content.vue";
import PageSearch from "@/components/page-search/src/page-search.vue";
export default defineComponent({
  components: {
    PageContent,
    PageSearch,
  },
  setup() {
    const [handleQueryClick, pageContentRef] = usePageSearch();
    // 动态添加角色
    const store = useStore();
    // 当组件数据发生改变，重新刷新组件
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "channelId"
      );
      departmentItem!.options = store.state.entireChannel.map((item) => {
        console.log(item.name);
        return { label: item.name, value: item.id };
      });
      return modalConfig;
    });

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal();
    return {
      contentTableConfig,
      searchFormConfig,
      modalConfigRef,
      pageContentRef,
      handleQueryClick,
      defaultInfo,
      pageModalRef,
      handleNewData,
      handleEditData,
    };
  },
});
</script>

<style scoped></style>
