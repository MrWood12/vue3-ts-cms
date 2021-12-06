<template>
  <div class="member">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>

    <page-content
      :contentTableConfig="
        userInfo.role == 'admin' ? contentTableConfig : channelTableConfig
      "
      pageName="normalmember"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      @chargeBtnClick="handleChargeData"
    >
      <!-- <template v-slot:headerHandler v-if="userInfo.role == 'admin'">
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
            >会员导入</el-button
          >
        </el-upload>
        <el-upload
          action="/backend/balance/import"
          :http-request="handleUploadAmountClick"
          accept=".xlsx"
          :show-file-list="false"
        >
          <el-button
            type="primary"
            icon="el-icon-plus"
            style="margin-left: 25px"
            >余额导入</el-button
          >
        </el-upload>
      </template>
      <template #info="scope">
        <div class="info-name">{{ scope.row.realname }}</div>
        <div class="info-phone">{{ scope.row.phone }}</div>
      </template>
      <template #right="scope">
        <div></div>
        <div class="start-time">{{ scope.row.right_start_time }}</div>
        <div class="end-time">{{ scope.row.right_end_time }}</div>
      </template>
      <template #channel="scope"> -->
      <!-- <div
          class="start-time"
          v-for="item in $filters.channelData(scope.row.channels)"
          :key="item.name"
        >
          {{ scope.row.channels.map((item) => item.name)[0] }}
          {{ item }}
        </div> -->
      <!-- <div
          style="
            display: flex;
            flex-direction: row;
            align-item: center;
            text-align: center;
            justify-content: center;
          "
        >
          <el-image
            style="width: 30px; height: 30px"
            :src="scope.row.picture"
            :preview-src-list="[scope.row.picture]"
            :initial-index="1"
          >
          </el-image>

          <div style="display: flex; align-items: center">
            {{ scope.row.name }}
          </div>
        </div>
      </template> -->
    </page-content>
    <page-modal
      :modalConfig="
        modalName === 'newModal' ? modalConfigRef : rechargeConfigRef
      "
      :defaultInfo="defaultInfo"
      :clickName="modalName === 'newModal' ? 'modal' : 'recharge'"
      ref="pageModalRef"
      pageName="normalmember"
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

import localCache from "@/utils/localCache";

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
      handleUploadAmountClick,
    } = usePageSearch();
    const userInfo = localCache.getCache("userInfo");
    // 动态添加
    const store = useStore();
    store.dispatch("getInitialDataAction");
    store.dispatch("getMemberStateAction");
    const memberStateRef = computed(() => {
      const unactive = store.state.memberStateList.unactive;
      const active = store.state.memberStateList.active;
      const exped = store.state.memberStateList.exped;
      const freeze = store.state.memberStateList.freeze;
      return { unactive, active, exped, freeze };
    });
    // 当组件数据发生改变，重新刷新组件
    const rechargeConfigRef = computed(() => {
      const departmentItem = rechargeConfig.formItems.find(
        (item) => item.field === "channel_id"
      );
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
        return { label: item.name, value: item.member_id };
      });
      return modalConfig;
    });
    const {
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      handleChargeData,
      modalName,
    } = usePageModal();
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
      handleUploadAmountClick,
      handleChargeData,
      modalName,
      rechargeConfig,
      rechargeConfigRef,
      memberStateRef,
      userInfo,
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
    width: 20%;

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
