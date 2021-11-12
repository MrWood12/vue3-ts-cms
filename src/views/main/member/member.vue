<template>
  <div class="member">
    <div class="page-statistics">
      <div class="static-item">
        <div class="item-title">已激活</div>
        <div class="item-number" style="color: #596ef9">123</div>
      </div>
      <div
        style="float: left; width: 1px; height: 50%; background: #d9d9d9"
      ></div>
      <div class="static-item">
        <div class="item-title">未激活</div>
        <div class="item-number" style="color: #ff0000">123</div>
      </div>
      <div
        style="float: left; width: 1px; height: 50%; background: #d9d9d9"
      ></div>
      <div class="static-item">
        <div class="item-title">到期&冻结</div>
        <div class="item-number" style="color: #bbbbbb">123</div>
      </div>
    </div>
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>

    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="member"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      @chargeBtnClick="handleChargeData"
    >
      <template v-slot:headerHandler>
        <el-button type="primary" icon="el-icon-plus" @click="handleNewClick"
          >新建</el-button
        >
        <el-upload
          action="/backend/member/import"
          :http-request="handleUploadClick"
          accept=".xlsx"
          :show-file-list="false"
        >
          <el-button
            type="primary"
            icon="el-icon-plus"
            style="margin-left: 25px"
            >导入</el-button
          >
        </el-upload>
      </template>
      <template #info="scope">
        <div class="info-name">{{ scope.row.realname }}</div>
        <div class="info-phone">{{ scope.row.phone }}</div>
      </template>
      <template #right="scope">
        <div class="start-time">{{ scope.row.right_start_time }}</div>
        <div class="end-time">{{ scope.row.right_end_time }}</div>
      </template>
      <template #channel="scope">
        <div
          class="start-time"
          v-for="item in $filters.channelData(scope.row.channels)"
          :key="item.name"
        >
          <!-- {{ scope.row.channels.map((item) => item.name)[0] }} -->
          {{ item }}
        </div>
      </template>
      <template #memberStatus="scope">
        <div
          :class="{
            'status-is-active': scope.row.status == 1,
            'status-cold-active': scope.row.status == -1,
            'status-none-active': scope.row.status == -2,
          }"
        >
          {{ $filters.memberStatusName(scope.row.status) }}
        </div>
      </template>
    </page-content>
    <page-modal
      :modalConfig="
        modalName === 'newModal' ? modalConfigRef : rechargeConfigRef
      "
      :defaultInfo="defaultInfo"
      :clickName="modalName === 'newModal' ? 'modal' : 'recharge'"
      ref="pageModalRef"
      pageName="member"
    ></page-modal>
    <!-- <page-modal
      v-else-if="modalName === 'rechargeModal'"
      :modalConfig="rechargeConfig"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="member"
    ></page-modal> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

import { contentTableConfig } from "./config/content.config";
import { searchFormConfig } from "./config/search.config";
import { modalConfig, rechargeConfig } from "./config/modal.config";

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
    const {
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      handleNewClick,
      handleUploadClick,
    } = usePageSearch();

    // 动态添加
    const store = useStore();
    store.dispatch("getInitialDataAction");

    // 当组件数据发生改变，重新刷新组件
    const rechargeConfigRef = computed(() => {
      const departmentItem = rechargeConfig.formItems.find(
        (item) => item.field === "channel_id"
      );
      console.log(store.state.member.channelList);
      departmentItem!.options = store.state.member.channelList.map((item) => {
        return { label: item.channel_name, value: item.channel_id };
      });
      return rechargeConfig;
    });

    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "channel_id"
      );
      departmentItem!.options = store.state.entireChannel.map((item) => {
        return { label: item.name, value: item.id };
      });
      return modalConfig;
    });
    const [
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      handleChargeData,
      modalName,
    ] = usePageModal();
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
      handleResetClick,
      handleNewClick,
      handleUploadClick,
      handleChargeData,
      modalName,
      rechargeConfig,
      rechargeConfigRef,
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
</style>
