import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  itemStyle: {
    padding: "0 5px",
  },

  formItems: [
    {
      field: "username",
      type: "input",
      placeholder: "请输入用户名称",
    },

    {
      field: "name",
      type: "input",
      placeholder: "请选择名称",
    },
  ],
};
