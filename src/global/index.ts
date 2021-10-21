// ui组件引用的入口文件

import { App } from "vue";
import registerElement from "./register-element";
export function globalRegister(app: App): void {
  // 两种写法都是可以的 因为app.use可以传入一个对象或函数，会自动传入app参数
  // registerElement(app);
  app.use(registerElement);
}
