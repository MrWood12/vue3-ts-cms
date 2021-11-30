<template>
  <page-search
    :searchFormConfig="searchFormConfigRef"
    @queryBtnClick="handleQueryClick"
    @resetBtnClick="handleResetClick"
  >
  </page-search>
  <page-content
    pageName="cardmanage"
    ref="pageContentRef"
    @newBtnClick="handleNewData"
    :contentTableConfig="contentTableConfig"
  >
    <template #oilCard="scope"
      ><div>{{ scope.row.type_name }}</div>
    </template>
    <template #oilProduct="scope">
      <div>{{ scope.row.gas_name }}</div>
    </template>
  </page-content>
  <page-modal
    :defaultInfo="defaultInfo"
    ref="pageModalRef"
    clickName="cardmanage"
    :modalConfig="modalConfig"
    pageName="cardmanage"
  ></page-modal>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { searchFormConfig } from "./config/search.config";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import pageModal from "@/components/page-modal";

import { contentTableConfig } from "./config/content.config";
import { detailConfigRef, deliverConfigRef } from "./config/modal.config";

import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";

import { useStore } from "@/store";

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

    const store = useStore();
    store.dispatch("getOilcardAction");
    store.dispatch("getOilproductAction");
    const searchFormConfigRef = computed(() => {
      const typeItem = searchFormConfig.formItems.find(
        (item) => item.field === "type"
      );
      const gasItem = searchFormConfig.formItems.find(
        (item) => item.field === "gas"
      );
      typeItem!.options = store.state.oilcardList.map((item) => {
        return { label: item.name, value: item.id };
      });
      gasItem!.options = store.state.oilproductList.map((item) => {
        return { label: item.name, value: item.id };
      });
      return searchFormConfig;
    });
    return {
      contentTableConfig,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleQueryAndApplicationClick,
      handleResetAndApplicationClick,
      modalName,
      detailConfigRef,
      deliverConfigRef,
      searchFormConfigRef,
      handleApplicationDetailData,
      handleApplicationDeliverData,
      searchFormConfig,
      handleQueryClick,
      handleResetClick,
    };
  },
});
</script>

<style scoped lang="less"></style>
