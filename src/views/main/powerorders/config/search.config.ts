import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  itemStyle: {
    padding: "0 5px",
  },

  formItems: [
    {
      field: "realname_phone",
      type: "input",
      placeholder: "请输入用户名/手机号",
    },
    {
      field: "type",
      type: "select",
      placeholder: "请选择操作类型",
      options: [
        {
          value: 1,
          label: "后台创建",
        },
        {
          value: 2,
          label: "后台导入",
        },
        {
          value: 3,
          label: "用户购买",
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
