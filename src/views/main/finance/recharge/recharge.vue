<template>
  <div class="capitalpool">
    <div class="page-statistics">
      <div class="static-item">
        <div class="item-title">处理中</div>
        <div class="item-number" style="color: #596ef9">
          {{ failCountRef.failCount }}
        </div>
      </div>
      <div
        style="float: left; width: 1px; height: 50%; background: #d9d9d9"
      ></div>
      <div class="static-item">
        <div class="item-title">异常</div>
        <div style="display: flex; margin-left: 65px">
          <div class="item-number" style="color: #ff0000">
            {{ failCountRef.penddingCount }}
          </div>
          <el-button
            size="mini"
            style="margin-left: 10px; line-height: 10px"
            @click="handleRefresh"
            >刷新</el-button
          >
        </div>
      </div>
      <div
        style="float: left; width: 1px; height: 50%; background: #d9d9d9"
      ></div>
      <div class="static-item">
        <div class="item-title">成功</div>
        <div class="item-number" style="color: #bbbbbb">
          {{ failCountRef.successCount }}
        </div>
      </div>
    </div>
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryAndRechargeAmountClick"
      @resetBtnClick="handleResetAndRechargeAmountClick"
      pageName="recharge"
    >
    </page-search>
    <el-alert
      style="
        width: 95%;
        margin: 0 auto;
        background-color: #e6f7ff;
        height: 40px;
        --el-alert-icon-large-size: 19px;
        margin-top: 15px;
      "
      type="info"
      show-icon
    >
      <div style="font-size: 14px; margin-bottom: 3px">
        累计消费金额 <span>{{ priceAmount }}</span> 元
      </div>
    </el-alert>
    <page-content
      pageName="recharge"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      :contentTableConfig="contentTableConfig"
    >
      <template #info="scope">
        <div class="info-name">
          {{ scope.row.realname }}({{
            scope.row.phone ? scope.row.phone : "没账号信息"
          }})
        </div>
      </template>
      <template #rechargechannel="scope">
        <div>
          {{ $filters.channelName(scope.row.channel_id).name }}
        </div>
      </template>
      <template #rechargeStatus="scope">
        <div
          :class="{
            'circle-item-success': scope.row.status == 1,
            'circle-item-fail': scope.row.status == -1,
            'circle-item-doing': scope.row.status == 0,
          }"
        >
          {{ $filters.rechargeStatusName(scope.row.status) }}
        </div>
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      clickName="recharge"
      :modalConfig="modalConfig"
      pageName="recharge"
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
      handleUploadClick,
      handleQueryAndpowerAmountClick,
      handleQueryAndRechargeAmountClick,
      handleResetAndpowerAmountClick,
      handleResetAndRechargeAmountClick,
    } = usePageSearch();
    const { pageModalRef, defaultInfo, handleNewData } = usePageModal();

    const store = useStore();
    store.dispatch("getInitialDataAction");
    const failCountRef = computed(() => {
      const failCount = store.state.rechargeState.fail_count;
      const penddingCount = store.state.rechargeState.pendding_count;
      const successCount = store.state.rechargeState.success_count;
      return { failCount, penddingCount, successCount };
    });
    store.dispatch("getRechargeAmount");
    store.dispatch("getStateNumber");
    const handleRefresh = () => {
      store.dispatch("getStateNumber");
    };

    const priceAmount = computed(() => {
      return store.state.rechargeAmount.amount;
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
      failCountRef,
      handleRefresh,
      priceAmount,
      handleUploadClick,
      handleQueryAndpowerAmountClick,
      handleQueryAndRechargeAmountClick,
      handleResetAndpowerAmountClick,
      handleResetAndRechargeAmountClick,
    };
  },
});
</script>

<style scoped lang="less">
.status-is-active {
  color: #18c087;
}
.status-cold-active {
  color: #969696;
}
.status-none-active {
  color: #ff3e3e;
}
.page-statistics {
  height: 108px;
  border-bottom: solid 20px #f0f2f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .static-item {
    height: 60%;
    display: flex;

    flex-direction: column;
    justify-content: space-around;
    .item-title {
      font-size: 14px;
    }
    .item-number {
      font-size: 24px;
    }
  }
}
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
