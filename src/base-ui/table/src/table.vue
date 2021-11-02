<template>
  <div class="hy-table">
    <div class="header">
      <slot name="header">
        <div class="title" v-if="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      stripe
      style="width: 98%; margin: 0 auto"
      @selection-change="handelSelectionChange"
    >
      <el-table-column
        v-if="showSelectColum"
        type="selection"
        align="center"
        width="100%"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column
          :prop="propItem.prop"
          :label="propItem.label"
          align="center"
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    listData: {
      type: Array,
      required: true,
    },
    propList: {
      type: Array,
      required: true,
    },
    showIndexColumn: {
      type: Boolean,
      default: false,
    },
    showSelectColum: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["selectionChange"],
  setup(props, { emit }) {
    const handelSelectionChange = (value: any) => {
      emit("selectionChange", value);
    };
    return {
      handelSelectionChange,
    };
  },
});
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
}
.footer {
  display: flex;
  margin-top: 20px;
  justify-content: right;
}
</style>
