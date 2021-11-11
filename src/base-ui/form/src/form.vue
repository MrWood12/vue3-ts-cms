<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth" class="formclass" inline>
      <template v-for="item in formItems" :key="item.placeholder">
        <el-form-item
          class="item-class"
          v-if="!item.isHidden"
          :label="item.label"
          :rules="item.rules"
          :style="itemStyle"
        >
          <template v-if="item.type === 'input' || item.type === 'password'">
            <el-input
              :placeholder="item.placeholder"
              :show-password="item.type === 'password'"
              size="small"
              style="width: 270px"
              minlength:150
              v-bind="item.otherOptions"
              :model-value="modelValue[`${item.field}`]"
              @update:modelValue="handleValueChange($event, item.field)"
            ></el-input>
          </template>
          <template v-else-if="item.type === 'select'">
            <el-select
              :placeholder="item.placeholder"
              v-bind="item.otherOptions"
              size="small"
              style="width: 270px"
              :model-value="modelValue[`${item.field}`]"
              @update:modelValue="handleValueChange($event, item.field)"
            >
              <el-option
                v-for="option in item.options"
                :key="option.title"
                :label="option.label"
                :value="option.value"
              ></el-option>
            </el-select>
          </template>
          <template v-else-if="item.type === 'datepicker'">
            <el-date-picker
              size="small"
              style="width: 270px"
              v-bind="item.otherOptions"
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"
              :placeholder="item.placeholder"
              :model-value="modelValue[`${item.field}`]"
              @update:modelValue="handleValueChange($event, item.field)"
            ></el-date-picker>
          </template>
        </el-form-item>
      </template>
      <div class="lineBtn">
        <slot name="lineBtn"></slot>
      </div>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IFormItem } from "../types";
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: "70px",
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: "0px 10px" }),
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // const formData = ref({ ...props.modelValue });
    // watch(
    //   formData,
    //   (newValue) => {
    //     emit("update:modelValue", newValue);
    //   },
    //   {
    //     deep: true,
    //   }
    // );
    const handleValueChange = (value: any, field: string) => {
      emit("update:modelValue", { ...props.modelValue, [field]: value });
    };
    return {
      handleValueChange,
    };
  },
});
</script>

<style scoped lang="less">
.hy-form {
  width: 98%;
  padding-top: 22px;
}
// .item-class {
//   display: flex;
// }
.lineBtn {
  display: inline-block;
  margin-left: 20px;
}
.formclass {
  display: flex;
  flex-wrap: wrap;
}
</style>
