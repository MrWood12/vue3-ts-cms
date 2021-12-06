<template>
  <div class="page-content content">
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1、header插槽 -->
      <template #headerHandler>
        <div class="content-button">
          <slot name="headerHandler"></slot>
        </div>
      </template>
      <!-- 2、列中插槽 -->
      <template #status="scope">
        <el-switch
          v-if="clickName != 'shop'"
          v-model="scope.row.status"
          :active-value="1"
          :inactive-value="-1"
          @click="handleUpdateClick(scope.row)"
        />
        <el-switch
          v-if="clickName == 'shop'"
          v-model="scope.row.is_debt"
          :active-value="1"
          :inactive-value="0"
          @click="handleUpdateClick(scope.row)"
        />
      </template>

      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            size="mini"
            icon="el-icon-edit"
            type="text"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
        </div>
      </template>
      <template #memberhandler="scope">
        <div class="handle-btns">
          <el-button
            size="mini"
            icon="el-icon-edit"
            type="text"
            @click="handleChargeClick(scope.row)"
            >充值</el-button
          >
        </div>
      </template>
      <template #navigateToUrl="scope">
        <div>
          <a :href="scope.row.url">
            <el-button type="text" icon="el-icon-bottom">下载</el-button>
          </a>
        </div>
      </template>
      <!-- 在pagecontent中动态插入剩余插槽 -->
      <template
        v-for="item in otherPropsSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "@/store";

import HyTable from "@/base-ui/table";
import localCache from "@/utils/localCache";

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true,
    },
    pageName: {
      type: String,
      require: true,
    },
    clickName: {
      type: String,
    },
  },
  emits: ["newBtnClick", "editBtnClick", "chargeBtnClick"],
  setup(props, { emit }) {
    const userInfo = localCache.getCache("userInfo");

    const store = useStore();
    // 分页点击下一页
    const pageInfo = ref({ currentPage: 0, pageSize: 10 });
    watch(pageInfo, () => getPageData());
    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          start: pageInfo.value.currentPage,
          limit: pageInfo.value.pageSize,
          // start: 0,
          // limit: 10,
          ...queryInfo,
        },
      });
    };
    getPageData();

    // 从vux中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    );

    // 获取其他的动态插槽名称
    const otherPropsSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        //用于过滤固定插槽
        if (item.slotName === "handler") return false;
        if (item.slotName === "status") return false;
        if (item.slotName === "memberhandler") return false;
        if (item.slotName === "navigateToUrl") return false;
        return true;
      }
    );
    // 更新状态
    const handleUpdateClick = (queryInfo: any = {}) => {
      console.log(queryInfo);
      if (props.pageName == "member") {
        store.dispatch("system/updatePageDataAction", {
          pageName: props.pageName,
          queryInfo: {
            member_id: queryInfo.member_id,
            status: queryInfo.status == 1 ? "active" : "freeze",
          },
        });
      } else if (props.pageName == "channel") {
        store.dispatch("system/updatePageDataAction", {
          pageName: props.pageName,
          queryInfo: {
            id: queryInfo.id,
            status: queryInfo.status,
          },
        });
      } else if (props.pageName == "shop") {
        // 是否支持核销
        store.dispatch("system/updatePageDataAction", {
          pageName: props.pageName,
          queryInfo: {
            id: queryInfo.id,
            is_debt: queryInfo.is_debt,
          },
        });
      }
    };
    // 导入
    const hanleLoadDataClick = (queryInfo: any = {}) => {
      store.dispatch("system/uploadPageDataAction", {
        pageName: props.pageName,
        queryInfo: queryInfo,
      });
    };
    const handleUploadAmountClick = (queryInfo: any = {}) => {
      store.dispatch("system/handleUploadAmountClick", {
        pageName: props.pageName,
        queryInfo: queryInfo,
      });
    };
    // 编辑/新建
    const handleNewClick = () => {
      emit("newBtnClick");
    };
    const handleEditClick = (item: any) => {
      emit("editBtnClick", item);
    };
    const handleChargeClick = (item: any) => {
      store.dispatch("member/getchannelListAction", {
        queryInfo: { member_id: item.member_id },
      });
      // 点击充值同时获取该用户充值列表
      store.dispatch("member/getRechargeList", {
        queryInfo: { realname_phone: item.phone },
      });
      emit("chargeBtnClick", item);
    };
    return {
      dataList,
      dataCount,
      getPageData,
      pageInfo,
      otherPropsSlots,
      handleNewClick,
      handleEditClick,
      handleUpdateClick,
      hanleLoadDataClick,
      handleChargeClick,
      handleUploadAmountClick,
      userInfo,
    };
  },
  components: {
    HyTable,
  },
});
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  .content-button {
    display: flex;
  }
}
</style>
