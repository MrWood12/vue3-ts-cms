<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/yuncanglogo.png" alt="logo" />
      <span class="title">权益系统后台</span>
    </div>
    <!-- <el-menu
      default-active="1"
      active-text-color="#ffff"
      background-color="#001529"
      class="el-menu-vertical-demo"
      text-color="#fff"
    >
      <el-menu-item index="1">
        <i class="el-icon-document"></i>
        <span>工作台</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span>资金池</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span>权益订单</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <span>消费订单</span>
      </el-menu-item>
      <el-sub-menu index="5">
        <template #title>
          <i class="el-icon-location"></i>
          <span>油卡业务</span>
        </template>
        <el-menu-item index="5-1">油卡申请</el-menu-item>
        <el-menu-item index="5-2">油卡管理</el-menu-item>
        <el-menu-item index="5-3">油卡订单</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <i class="el-icon-location"></i>
          <span>财务管理</span>
        </template>
        <el-menu-item index="6-1">余额充值记录</el-menu-item>
        <el-menu-item index="6-2">余额交易流水</el-menu-item>
        <el-menu-item index="6-3">现金交易流水</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <i class="el-icon-location"></i>
          <span>系统配置</span>
        </template>
        <el-menu-item index="7-1">渠道管理</el-menu-item>
      </el-sub-menu>
    </el-menu> -->
    <el-menu default-active="2" class="el-menu-vertical">
      <!-- <template v-for="item in "></template> -->
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 65px;
    padding-left: 28px;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    .img {
      width: 32px;
      height: 32px;
      margin-right: 15px;
    }
    .title {
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
}
</style>
