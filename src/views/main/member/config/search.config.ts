import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  itemStyle: {
    padding: "0 5px",
  },

  formItems: [
    {
      field: "name",
      type: "input",
      placeholder: "请输入用户名/手机号",
    },
    {
      field: "price",
      type: "input",
      placeholder: "请输入渠道名称",
    },
    {
      field: "status",
      type: "select",
      placeholder: "请选择状态",
      options: [
        {
          value: 1,
          label: "启用",
        },
        {
          value: -1,
          label: "禁用",
        },
      ],
    },
  ],
};
