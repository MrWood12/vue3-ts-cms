<template>
  <div class="page-modal">
    <el-dialog
      v-model="centerDialogVisible"
      title="新建"
      width="60%"
      center
      destroy-on-close
    >
      <hy-form v-bind="modalConfig" v-model="formData"></hy-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button
            v-if="clickName === 'capitalpool'"
            type="primary"
            @click="handleCapitalpoolClick"
            >确定</el-button
          >
          <el-button
            v-if="clickName === 'modal'"
            type="primary"
            @click="handleConfirmClick"
            >确定</el-button
          >
          <el-button
            v-if="clickName === 'recharge'"
            type="primary"
            @click="handleRechargeClick"
            >确定</el-button
          >
          <el-button
            v-if="clickName === 'application'"
            type="primary"
            @click="handleApplicationClick"
            >确定</el-button
          >
          <el-button
            v-if="clickName === 'shop'"
            type="primary"
            @click="handleShopClick"
            >确定</el-button
          >
          <el-button
            v-if="clickName === 'users'"
            type="primary"
            @click="handleConfirmClick"
            >确定</el-button
          >
          <el-button @click="centerDialogVisible = false">取消</el-button>
        </span>
      </template>
      <el-divider></el-divider>

      <div class="dialog-bottom" v-if="clickName === 'recharge'">
        <el-table :data="rechargeList" height="250" border style="width: 100%">
          <el-table-column prop="order_no" label="订单号" />

          <el-table-column prop="phone" label="手机号" />
          <el-table-column prop="amount" label="充值金额" />
          <el-table-column prop="exp_date" label="金额到期时间" />
          <el-table-column prop="create_time" label="创建时间" />
          <el-table-column prop="opera_name" label="操作员" />
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import { useStore } from "vuex";
import HyForm from "@/base-ui/form";
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true,
    },
    defaultInfo: {
      type: Object,
      default: () => ({}),
    },
    clickName: {
      type: String,
      default: "",
    },
    otherInfo: {
      type: Object,
      default: () => ({}),
    },
    pageName: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const centerDialogVisible = ref(false);
    const formData = ref<any>({});

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`];
        }
      }
    );
    // 点击确定按钮的逻辑

    const store = useStore();
    const rechargeList = computed(() => {
      return store.state.member.rechargeList;
    });
    const handleConfirmClick = () => {
      centerDialogVisible.value = false;
      if (Object.keys(props.defaultInfo).length) {
        //编辑
        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          queryInfo: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id,
        });
      } else {
        // '新建
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          queryInfo: { ...formData.value, ...props.otherInfo },
        });
      }
    };
    const handleRechargeClick = () => {
      centerDialogVisible.value = false;
      store.dispatch("member/memberchargeAction", {
        pageName: props.pageName,
        queryInfo: { ...formData.value, ...props.otherInfo },
      });
    };
    const handleCapitalpoolClick = () => {
      centerDialogVisible.value = false;
      store.dispatch("system/createPageDataAction", {
        pageName: props.pageName,
        queryInfo: { ...formData.value, ...props.otherInfo },
      });
    };
    const handleShopClick = () => {
      centerDialogVisible.value = false;
      store.dispatch("system/createPageDataAction", {
        pageName: props.pageName,
        queryInfo: { ...formData.value, ...props.otherInfo },
      });
    };
    const handleApplicationClick = () => {
      centerDialogVisible.value = false;
      store.dispatch("getApplicationDeliverAction", {
        pageName: props.pageName,
        queryInfo: { ...formData.value, ...props.otherInfo },
      });
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          start: 1,
          limit: 10,
        },
      });
    };
    return {
      centerDialogVisible,
      formData,
      handleConfirmClick,
      handleRechargeClick,
      handleCapitalpoolClick,
      handleApplicationClick,
      handleShopClick,
      rechargeList,
    };
  },
  components: {
    HyForm,
  },
});
</script>

<style scoped></style>
