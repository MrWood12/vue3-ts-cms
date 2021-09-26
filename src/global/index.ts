// 导入index.css
import "element-plus/dist/index.css";
// 局部导入的路径
import { ElButton } from "element-plus/lib/components";
import { App } from "vue";
const components = [ElButton];
export function registerApp(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
