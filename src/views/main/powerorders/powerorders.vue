<template>
  <div class="capitalpool">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryAndpowerAmountClick"
      @resetBtnClick="handleResetAndpowerAmountClick"
    >
    </page-search>
    <el-alert
      style="
        width: 95%;
        margin: 0 auto;
        background-color: #e6f7ff;
        height: 40px;
        --el-alert-icon-large-size: 19px;
      "
      type="info"
      show-icon
    >
      <div style="font-size: 14px; margin-bottom: 3px">
        累计消费金额 <span>{{ priceAmount }}</span> 元
      </div>
    </el-alert>
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
    const [
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      handleNewClick,
      handleUploadClick,
      handleQueryAndpowerAmountClick,
      handleQueryAndRechargeAmountClick,
      handleResetAndpowerAmountClick,
      handleResetAndRechargeAmountClick,
    ] = usePageSearch();
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
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleNewClick,
      priceAmount,
      handleUploadClick,
      handleQueryAndpowerAmountClick,
      handleResetAndpowerAmountClick,
      handleResetAndRechargeAmountClick,
      handleQueryAndRechargeAmountClick,
    };
  },
});
</script>

<style scoped></style>
