<template>
  <div class="exportlist">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryAndPayorderAmountClick"
      @resetBtnClick="handleResetAndPayorderAmountClick"
      refresh="exportlist"
    >
    </page-search>

    <page-content
      pageName="exportlist"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      :contentTableConfig="contentTableConfig"
    >
      <template #exportstatus="scope">
        <div class="circle-item-success" v-if="scope.row.status == 10">
          执行完成
        </div>
        <div class="circle-item-doing" v-if="scope.row.status == 1">待执行</div>
        <div class="circle-item-doing" v-if="scope.row.status == 2">执行中</div>
        <div class="circle-item-fail" v-if="scope.row.status == -1">
          执行失败
        </div>
      </template>
      <template #exporttype="scope">
        <div v-if="scope.row.type == 10001">权益会员</div>
        <div v-if="scope.row.type == 20001">资金池</div>
        <div v-if="scope.row.type == 30001">权益订单</div>
        <div v-if="scope.row.type == 40001">消费订单</div>
        <div v-if="scope.row.type == 50001">油卡申请</div>
        <div v-if="scope.row.type == 60001">油卡充值</div>
        <div v-if="scope.row.type == 70001">余额充值记录</div>
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      clickName="payorders"
      :modalConfig="modalConfig"
      pageName="exportlist"
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

<style scoped>
.circle-item-success::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid #52c41a;
  background-color: #52c41a;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 1px;
}
.circle-item-fail::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid #f5222d;
  background-color: #f5222d;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 1px;
}
.circle-item-doing::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid #1890ff;
  background-color: #1890ff;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 1px;
}
</style>
