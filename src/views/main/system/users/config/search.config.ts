import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  itemStyle: {
    padding: "0 5px",
  },

  formItems: [
    {
      field: "name",
      type: "input",
      label: "名称",
      placeholder: "请输入名称",
    },
  ],
};
