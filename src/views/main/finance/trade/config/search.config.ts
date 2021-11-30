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
      field: "status",
      type: "select",
      placeholder: "请选择操作类型",
      options: [
        {
          value: 1,
          label: "成功",
        },
        {
          value: 0,
          label: "处理中",
        },
        {
          value: -1,
          label: "异常",
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
