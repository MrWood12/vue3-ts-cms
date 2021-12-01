·
<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form
      :label-width="labelWidth"
      class="formclass"
      inline
      :rules="rules"
      :ref="ref"
    >
      <template v-for="item in formItems" :key="item.placeholder">
        <el-form-item
          class="item-class"
          v-if="!item.isHidden"
          :label="item.label"
          :style="itemStyle"
          :prop="item.filed"
        >
          <template
            v-if="
              item.type === 'input' ||
              item.type === 'password' ||
              item.type === 'textarea'
            "
          >
            <el-input
              :disabled="item.disabled"
              :placeholder="item.placeholder"
              :show-password="item.type === 'password'"
              :type="item.type === 'textarea' ? 'textarea' : ''"
              :autosize="
                item.type === 'textarea' ? { minRows: 2, maxRows: 4 } : ''
              "
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
          <template v-else-if="item.type === 'upload'">
            <el-input
              :disabled="item.disabled"
              :placeholder="item.placeholder"
              :show-password="item.type === 'password'"
              action="/backend/shop/pictureUpload"
              size="small"
              style="width: 270px"
              minlength:150
              v-bind="item.otherOptions"
              :model-value="imageurl"
              @update:modelValue="handleValueChange($event, item.field)"
            ></el-input>
            <el-upload
              action="#"
              limit="1"
              list-type="picture-card"
              :http-request="handleImageUploadClick"
            >
              <template #default>
                <el-icon><plus /></el-icon>
              </template>
              <template #file="{ file }">
                <div>
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url"
                    alt=""
                  />
                </div>
              </template>
            </el-upload>
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
import { defineComponent, PropType, ref } from "vue";
import { IFormItem } from "../types";
import { Plus } from "@element-plus/icons";
import { upLoadFile } from "@/service/main/system/system";

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
    rules: {
      type: Array,
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
  components: {
    Plus,
  },
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
    const imageurl = ref("");
    // 图片上传
    const handleImageUploadClick = (file: any) => {
      console.log(file.file);
      upLoadFile("/shop/pictureUpload", file.file).then((res) => {
        imageurl.value = res.data;
      });
    };

    const handleValueChange = (value: any, field: string) => {
      emit("update:modelValue", { ...props.modelValue, [field]: value });
    };

    return {
      handleValueChange,
      handleImageUploadClick,
      imageurl,
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 130px;
  height: 130px;
  text-align: center;
}
.avatar-uploader-icon svg {
  margin-top: 74px; /* (178px - 28px) / 2 - 1px */
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
