<template>
  <div class="channel">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="channel"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template v-slot:headerHandler>
        <el-button type="primary" icon="el-icon-plus" @click="handleNewClick"
          >新建</el-button
        > </template
      ><template #picture="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.picture"
          :preview-src-list="[scope.row.picture]"
          :initial-index="1"
        >
        </el-image>
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      clickName="modal"
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
    const {
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      handleNewClick,
    } = usePageSearch();

    // pageModal相关hook逻辑
    // 单独逻辑 比如是否显示密码框
    const editCallback = () => {
      const idItem = modalConfig.formItems.find((item) => item.field === "id");
      const statusItem = modalConfig.formItems.find(
        (item) => item.field === "status"
      );
      idItem!.isHidden = true;
      statusItem!.isHidden = true;
    };
    const newCallback = () => {
      const idItem = modalConfig.formItems.find((item) => item.field === "id");
      const statusItem = modalConfig.formItems.find(
        (item) => item.field === "status"
      );
      idItem!.isHidden = true;
      statusItem!.isHidden = false;
    };
    const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
      usePageModal(newCallback, editCallback);

    return {
      searchFormConfig,
      contentTableConfig,
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      modalConfig,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo,
      handleNewClick,
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
