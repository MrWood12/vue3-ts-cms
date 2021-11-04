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
      label: "渠道名称：",
      placeholder: "请输入渠道名称",
    },
    {
      field: "status",
      type: "select",
      label: "状态：",
      placeholder: "请选择",
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
