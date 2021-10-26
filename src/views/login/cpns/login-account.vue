<template>
  <div class="login-account">
    <div class="title">账号密码登录</div>
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item prop="name">
        <el-input placeholder="账户" v-model="account.name">
          <template #prefix>
            <i class="el-input__icon el-icon-user"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="密码" v-model="account.password" show-password>
          <template #prefix>
            <i class="el-input__icon el-icon-lock"></i>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/account-config";
import { ElForm } from "element-plus";
import localCache from "@/utils/localCache";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    // 声明响应式变量
    const account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? "",
    });
    // 获取ElForm中函数数据
    const formRef = ref<InstanceType<typeof ElForm>>();
    // 登录操作
    const loginAction = (iskeepInfo: boolean) => {
      formRef.value?.validate((valid) => {
        // 是否通过表单验证
        if (valid) {
          // console.log("真正登录");
          //1、是否记住账号密码
          if (iskeepInfo) {
            // 本地缓存
            localCache.setlocalCache("name", account.name);
            localCache.setlocalCache("password", account.password);
          } else {
            localCache.removeCache("name");
            localCache.removeCache("password");
          }

          // 2、开始登录验证
          store.dispatch("login/accountLoginAction", { ...account });
        }
      });
    };
    return {
      account,
      rules,
      loginAction,
      formRef,
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
