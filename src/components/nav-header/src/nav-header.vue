<template>
  <div class="nav-header">
    <div class="nav-header-first">
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
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              style="margin-right: 10px"
            ></el-avatar>
            {{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-circle-close" @click="clearLogin"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "@/store";
import localCache from "@/utils/localCache";
import { useRouter } from "vue-router";
export default defineComponent({
  emits: ["foldChange"],
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();

    const name = computed(() => store.state.login.userInfo.name);
    const isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };
    const clearLogin = () => {
      localCache.clearCache();
      router.push("/login");
    };
    return {
      isFold,
      handleFoldClick,
      name,
      clearLogin,
      localCache,
    };
  },
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  flex-direction: column;
  width: 100%;
  .nav-header-first {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
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
