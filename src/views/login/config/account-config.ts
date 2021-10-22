// 验证规则
export const rules = {
  name: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      pattern: /^[A-Za-z0-9]{3,}$/,
      message: "密码必须是3位以上数字或字母",
      trigger: "blur",
    },
  ],
};
