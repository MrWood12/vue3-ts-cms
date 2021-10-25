// element组件局部导入

// 导入index.css
import "element-plus/dist/index.css";
// 局部导入的路径
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
} from "element-plus/lib/components";
import { App } from "vue";
const components = [ElButton, ElForm, ElFormItem, ElInput, ElCheckbox];
export default function (app: App): void {
  for (const component of components) {
    // 全局注册
    app.component(component.name, component);
  }
}