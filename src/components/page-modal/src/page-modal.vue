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
          <el-button @click="centerDialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
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

    const handleConfirmClick = () => {
      centerDialogVisible.value = false;
      if (Object.keys(props.defaultInfo).length) {
        //编辑
        console.log("编辑");
        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          queryInfo: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id,
        });
      } else {
        // '新建
        console.log("新建");
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
    const handleApplicationClick = () => {
      centerDialogVisible.value = false;
      store.dispatch("getApplicationDeliverAction", {
        pageName: props.pageName,
        queryInfo: { ...formData.value, ...props.otherInfo },
      });
    };
    return {
      centerDialogVisible,
      formData,
      handleConfirmClick,
      handleRechargeClick,
      handleCapitalpoolClick,
      handleApplicationClick,
    };
  },
  components: {
    HyForm,
  },
});
</script>

<style scoped></style>
