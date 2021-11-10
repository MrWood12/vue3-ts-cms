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
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    >
    </page-search>
    <page-content
      pageName="powerorders"
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
      <template #rechargeStatus="scope">
        <div class="circle-item">
          {{ $filters.rechargeStatusName(scope.row.status) }}
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

import { useStore } from "vuex";
export default defineComponent({
  components: { PageSearch, PageContent, pageModal },
  setup() {
    const [handleQueryClick, handleResetClick, pageContentRef, handleNewClick] =
      usePageSearch();
    const [pageModalRef, defaultInfo, handleNewData] = usePageModal();

    const store = useStore();
    const failCountRef = computed(() => {
      const failCount = store.state.rechargeState.fail_count;
      console.log(failCount);
      const penddingCount = store.state.rechargeState.pendding_count;
      const successCount = store.state.rechargeState.success_count;
      return { failCount, penddingCount, successCount };
    });

    const handleRefresh = () => {
      store.dispatch("getStateNumber");
    };

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
.circle-item::before {
  content: "";
  width: 5px;
  height: 5px;
  border: 1px solid red;
  border-radius: 50%;
  background-color: red;
  display: inline-block;
}
</style>
