<template>
  <div class="nav-menu">
    <div
      class="logo"
      :style="collapse ? 'padding-left: 15px;' : 'padding-left: 28px;'"
    >
      <img class="img" src="~@/assets/img/yuncanglogo.png" alt="logo" />
      <span v-show="!collapse" class="title">权益系统后台</span>
    </div>
    <el-menu
      default-active="39"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                style="padding-left: 49px; background-color: #000c17"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item
            :index="item.id + ''"
            @click="handleMenuItemClick(item)"
          >
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
// vuex对ts兼容并不完善,所以自己封装useStore
import { useStore } from "@/store/index";
import { useRouter } from "vue-router";
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useStore();
    const userMenus = computed(() => store.state.login.userMenus);
    const router = useRouter();
    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? "/not-found",
      });
    };
    return {
      userMenus,
      handleMenuItemClick,
    };
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
  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
