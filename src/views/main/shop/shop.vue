<template>
  <div class="shop">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryAndpowerAmountClick"
      @resetBtnClick="handleResetAndpowerAmountClick"
    >
    </page-search>
    <page-content
      pageName="shop"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      :contentTableConfig="contentTableConfig"
      clickName="shop"
    >
      <template #images="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.picture"
          :preview-src-list="[scope.row.picture]"
          :initial-index="1"
        >
        </el-image>
      </template>
      <template #doing="scope">
        <!-- <el-upload
          style="display: inline-block"
          action="/backend/shop/pictureUpload"
          :http-request="handleImageUploadClick"
          multiple
          :limit="1"
        >
          <el-button type="text" v-if="scope.row" icon="el-icon-upload"
            >上传图片</el-button
          >
        </el-upload> -->

        <el-button
          type="text"
          icon="el-icon-delete"
          @click="handleDeleteShop(scope.row.id)"
          >删除</el-button
        >
      </template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      clickName="shop"
      :modalConfig="modalConfig"
      pageName="shop"
    ></page-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import pageModal from "@/components/page-modal";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";
import { deleteShop } from "@/service/main/shop/shop";
import { useStore } from "@/store";
// import { upLoadFile } from "@/service/main/system/system";
export default defineComponent({
  components: { PageSearch, PageContent, pageModal },
  setup() {
    const {
      pageContentRef,
      handleQueryAndpowerAmountClick,
      handleResetAndpowerAmountClick,
    } = usePageSearch();
    const { pageModalRef, defaultInfo, handleNewData } = usePageModal();

    const store = useStore();
    store.dispatch("getPowerAmount");

    // 图片上传
    // const handleImageUploadClick = (file: any) => {
    //   upLoadFile("/shop/pictureUpload", file.file).then((res) => {
    //     console.log(res);
    //   });
    // };
    // 删除
    const handleDeleteShop = (id: number) => {
      deleteShop(id);
      store.dispatch("system/getPageListAction", {
        pageName: "shop",
        queryInfo: {
          start: 0,
          limit: 10,
        },
      });
    };
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleQueryAndpowerAmountClick,
      handleResetAndpowerAmountClick,
      handleDeleteShop,
      // handleImageUploadClick,
    };
  },
});
</script>
<style scoped></style>
