<template>
  <div class="capitalpool">
    <div class="page-statistics">
      <div class="static-item">
        <div class="item-title">未发货</div>
        <div class="item-number" style="color: #596ef9">
          {{ orderCountRef.undispatch }}
        </div>
      </div>
      <div
        style="float: left; width: 1px; height: 50%; background: #d9d9d9"
      ></div>
      <div class="static-item">
        <div class="item-title">已发货</div>
        <div>
          <div class="item-number" style="color: #ff0000">
            {{ orderCountRef.dispatch }}
          </div>
        </div>
      </div>
      <div
        style="float: left; width: 1px; height: 50%; background: #d9d9d9"
      ></div>
      <div class="static-item">
        <div class="item-title">完成</div>
        <div class="item-number" style="color: #bbbbbb">
          {{ orderCountRef.complete }}
        </div>
      </div>
    </div>
    <page-search
      :searchFormConfig="searchFormConfigRef"
      @queryBtnClick="handleQueryAndApplicationClick"
      @resetBtnClick="handleResetAndApplicationClick"
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
      <!-- <template #logiInfo="scope">
        <div>{{ scope.row.logi_name }}</div>
        <div>{{ scope.row.logi_number }}</div>
      </template> -->

      <template #cardapplicationStatus="scope">
        <div
          :class="{
            'circle-item-success': scope.row.status == 10,
            'circle-item-fail': scope.row.status == 0,
            'circle-item-doing': scope.row.status == 1 || scope.row.status == 2,
            'circle-item-undone': scope.row.status == -1,
          }"
        >
          {{ $filters.cardapplicationStatusName(scope.row.status) }}
        </div>
      </template>
      <template #applicationLable="scope">
        <div>
          <!-- <el-button
            type="text"
            v-if="scope.row.status == 1"
            @click="handleApplicationDeliverData(scope.row)"
            >发货</el-button
          >-->
          <el-button
            type="text"
            @click="handleApplicationDeliverData(scope.row)"
            >发货</el-button
          >
          <el-button type="text" @click="handleApplicationDetailData(scope.row)"
            >查看详情</el-button
          >
        </div>
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="
        modalName === 'applicationDetailModal'
          ? detailConfigRef
          : deliverConfigRef
      "
      pageName="application"
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
    store.dispatch("getPowerAmount");
    store.dispatch("getOilcardAction");
    store.dispatch("getOilproductAction");
    store.dispatch("getApplicationStateAction");
    // const priceAmount = computed(() => {
    //   return store.state.powerAmount.amount;
    // });
    console.log(store.state.oilcardList);
    console.log(store.state.applicationStateList);
    const orderCountRef = computed(() => {
      const undispatch = store.state.applicationStateList.undispatch;
      const dispatch = store.state.applicationStateList.dispatch;
      const complete = store.state.applicationStateList.complete;
      return { undispatch, dispatch, complete };
    });
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
      searchFormConfigRef,
      orderCountRef,
      handleQueryAndApplicationClick,
      handleResetAndApplicationClick,
      modalName,
      detailConfigRef,
      deliverConfigRef,
      handleApplicationDetailData,
      handleApplicationDeliverData,
    };
  },
});
</script>

<style scoped lang="less">
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
.circle-item-undone::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid #cacaca;
  background-color: #cacaca;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 1px;
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
