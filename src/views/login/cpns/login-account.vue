<template>
  <div class="login-account">
    <div class="title">账号密码登录</div>
    <el-form :rules="rules" :model="account">
      <el-form-item prop="name">
        <el-input placeholder="账户" v-model="account.name">
          <template #prefix>
            <i class="el-input__icon el-icon-user"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="密码" v-model="account.password">
          <template #prefix>
            <i class="el-input__icon el-icon-lock"></i>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { rules } from "../config/account-config";
export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: "",
    });

    return {
      account,
      rules,
    };
  },
});
</script>

<style scoped lang="less">
.title {
  text-align: center;
  color: #87898b;
  margin-bottom: 20px;
}
</style>
