<template>
  <div class="member">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="member"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { contentTableConfig } from "./config/content.config";
import PageContent from "@/components/page-content/src/page-content.vue";
export default defineComponent({
  components: {
    PageContent,
  },
  setup() {
    return {
      contentTableConfig,
    };
  },
});
</script>

<style scoped></style>
