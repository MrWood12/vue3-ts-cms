<template>
  <div class="capitalpool">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryAndPayorderAmountClick"
      @resetBtnClick="handleResetAndPayorderAmountClick"
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
        累计消费余额 <span>{{ priceAmount.pay_amt }}</span> 元 积分抵扣金
        <span> {{ priceAmount.point_amt }} 元 </span>
      </div>
    </el-alert>
    <page-content
      pageName="payorders"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      :contentTableConfig="contentTableConfig"
    >
      <template #info="scope">
        <div class="info-name">
          {{ scope.row.realname }}({{ scope.row.phone }})
        </div>
      </template>
      <template #amts="scope">
        {{ scope.row.pay_amt }}+{{ scope.row.point_amt }}
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      clickName="payorders"
      :modalConfig="modalConfig"
      pageName="payorders"
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
import { useStore } from "vuex";
export default defineComponent({
  components: { PageSearch, PageContent, pageModal },
  setup() {
    const {
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      handleNewClick,
      handleQueryAndPayorderAmountClick,
      handleResetAndPayorderAmountClick,
    } = usePageSearch();
    const { pageModalRef, defaultInfo, handleNewData } = usePageModal();
    const store = useStore();
    store.dispatch("getPayorderAmount");
    const priceAmount = computed(() => {
      return store.state.payorderAmount;
    });
    console.log(priceAmount);
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
      handleQueryAndPayorderAmountClick,
      handleResetAndPayorderAmountClick,
    };
  },
});
</script>

<style scoped></style>
