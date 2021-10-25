<template>
  <div class="login-panel">
    <div class="title">权益系统后台</div>
    <div class="title-tips">此后台仅剩工作人员登录</div>

    <login-account ref="accountRef"></login-account>

    <div class="account-control">
      <el-checkbox v-model="iskeepInfo">自动登录</el-checkbox>
    </div>

    <el-button type="primary" class="login-button" @click="handleLoginClick"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginAccount from "./login-account.vue";
export default defineComponent({
  components: {
    LoginAccount,
  },
  setup() {
    // 记住账号密码
    const iskeepInfo = ref(true);
    // 获取LoginAccount中的函数
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    // 点击登录
    const handleLoginClick = () => {
      console.log("登录");
      accountRef.value?.loginAction(iskeepInfo.value);
    };
    return {
      iskeepInfo,
      handleLoginClick,
      accountRef,
    };
  },
});
</script>

<style scoped lang="less">
.login-panel {
  width: 366px;
  margin-bottom: 120px;
  .title {
    text-align: center;
    font-size: 32px;
  }
  .title-tips {
    font-size: 14px;
    text-align: center;
    color: #87898b;
    margin-bottom: 70px;
    margin-top: 10px;
  }
  .account-control {
    margin-top: -10px;
  }
  .login-button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
