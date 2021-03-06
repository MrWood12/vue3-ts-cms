<template>
  <div class="channel">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleUsersEditData"
    >
      <template v-slot:headerHandler>
        <el-button type="primary" icon="el-icon-plus" @click="handleNewClick"
          >新建</el-button
        >
      </template>
      <template #userstatus="scope">
        <div v-if="scope.row.status == 1">启用</div>
        <div v-if="scope.row.status == 0">禁用</div>
      </template>
      {{ $filters.cardapplicationStatusName(scope.row.status) }}
      <template #roleName="scope">
        <div v-if="scope.row.role_name != ''">
          {{ $filters.roleName(scope.row.role_name) }}
        </div>
      </template>
      <template #channels="scope">
        <div v-for="(item, index) in scope.row.channel_names" :key="index">
          {{ item }}
        </div>
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      clickName="users"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";

import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";

import { useStore } from "@/store";

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
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "id"
      );
      passwordItem!.isHidden = true;
    };
    const store = useStore();
    store.dispatch("getInitialDataAction");

    store.dispatch("getRoleDataAction");
    // const editCallback = () => {
    //   const passwordItem = modalConfig.formItems.find(
    //     (item) => item.field === "password"
    //   );
    //   passwordItem!.isHidden = true;
    // };
    // const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
    //   usePageModal(newCallback, editCallback);
    const {
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      handleUsersEditData,
    } = usePageModal(editCallback);

    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "role_name"
      );
      departmentItem!.options = store.state.entireRoleList.map((item) => {
        return { label: item.value, value: item.name };
      });
      const channelsItem = modalConfig.formItems.find(
        (item) => item.field === "channels"
      );
      channelsItem!.options = store.state.entireChannel.map((item) => {
        return { label: item.name, value: item.id };
      });
      return modalConfig;
    });

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
      handleUsersEditData,
      modalConfigRef,
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
