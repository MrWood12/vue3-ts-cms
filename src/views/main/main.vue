<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '256px'">
        <nav-menu :collapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header" style="border-bottom: 2px solid #f0f2f5">
          <nav-header @foldChange="handleFoldClick"></nav-header>
        </el-header>
        <div class="page-breadcrumb">
          <hy-breadcrumb :breadcrumbs="breadcrumbs"></hy-breadcrumb>
        </div>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import NavMenu from "@/components/nav-menu";
import NavHeader from "@/components/nav-header";
import { useRoute } from "vue-router";
import HyBreadcrumb from "@/base-ui/breadcrumb";
import { useStore } from "@/store";
import { pathMapBreadcrumbs } from "@/utils/map-menus";
export default defineComponent({
  setup() {
    const isCollapse = ref(false);
    const handleFoldClick = (isFold: boolean) => {
      isCollapse.value = isFold;
    };
    // 面包屑的数据 [{name:,path:}]
    const route = useRoute();
    const store = useStore();
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus;
      const currentPath = route.path;
      console.log(userMenus);
      console.log(currentPath);
      pathMapBreadcrumbs(userMenus, currentPath);
      console.log(pathMapBreadcrumbs);
      return pathMapBreadcrumbs(userMenus, currentPath);
    });
    return { handleFoldClick, isCollapse, breadcrumbs };
  },
  components: {
    NavMenu,
    NavHeader,
    HyBreadcrumb,
  },
});
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 65px);
  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}
.page-breadcrumb {
  padding: 0 20px 20px 20px;
}
.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 65px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  color: #f0f2f5;
  transition: width 0.5s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
