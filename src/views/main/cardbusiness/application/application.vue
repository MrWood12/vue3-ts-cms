<template>
  <div class="capitalpool">
    <page-search
      :searchFormConfig="searchFormConfigRef"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    >
    </page-search>
    <page-content
      pageName="cardapplication"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      :contentTableConfig="contentTableConfig"
    >
      <template #info="scope">
        <div class="info-name">{{ scope.row.realname }}</div>
        <div class="info-phone">{{ scope.row.phone }}</div>
      </template>
      <template #oilCard="scope"
        ><div>{{ scope.row.type_name }}</div>
      </template>
      <template #oilProduct="scope">
        <div>{{ scope.row.gas_name }}</div>
      </template>
      <template #productinfo="scope">
        <div>{{ scope.row.goods_realname }}</div>
        <div>{{ scope.row.goods_phone }}</div>
        <div>{{ scope.row.goods_address }}</div>
      </template>
      <template #logiInfo="scope">
        <div>{{ scope.row.logi_name }}</div>
        <div>{{ scope.row.logi_number }}</div>
      </template>

      <template #cardapplicationStatus="scope">
        <div>
          {{ $filters.cardorderStatusName(scope.row.status) }}
        </div>
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      clickName="cardapplication"
      :modalConfig="modalConfig"
      pageName="cardapplication"
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
    store.dispatch("getOilcardAction");
    store.dispatch("getOilproductAction");
    const priceAmount = computed(() => {
      return store.state.powerAmount.amount;
    });
    console.log(store.state.oilcardList);
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
      searchFormConfigRef,
    };
  },
});
</script>

<style scoped></style>
