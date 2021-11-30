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
      field: "batch_number",
      type: "input",
      placeholder: "请输入批次编号",
    },

    {
      field: "status",
      type: "select",
      placeholder: "请选择状态",
      options: [
        {
          value: 0,
          label: "待处理",
        },
        {
          value: -1,
          label: "失败",
        },
        {
          value: 1,
          label: "成功",
        },
      ],
    },

    {
      field: "start_date",
      type: "datepicker",
      placeholder: "请选择开始时间",
    },
    {
      field: "end_date",
      type: "datepicker",
      placeholder: "请选择结束时间",
    },
  ],
};
