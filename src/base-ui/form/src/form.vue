<template>
  <div class="hy-form">
    <el-form label-width="100px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名/手机">
            <el-input placeholder="请输入用户名/手机号"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IFormItem } from "../types";
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
