<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="userinfo">
      <el-button class="button-icon" icon="el-icon-search" circle></el-button>
      <el-button
        class="button-icon"
        style="margin-right: 15px"
        icon="el-icon-bell"
        circle
      ></el-button>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            :size="35"
            :src="circleUrl"
            style="margin-right: 10px"
          ></el-avatar>
          {{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-circle-close"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "@/store";
export default defineComponent({
  emits: ["foldChange"],
  setup(props, { emit }) {
    const store = useStore();
    const name = computed(() => store.state.login.userInfo.name);
    const isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };
    return {
      isFold,
      handleFoldClick,
      name,
    };
  },
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .userinfo {
    display: flex;
    align-items: center;
  }
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .button-icon {
    border: none;
    font-size: 17px;
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
