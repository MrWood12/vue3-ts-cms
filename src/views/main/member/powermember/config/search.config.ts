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
      placeholder: "请选择状态",
      options: [
        {
          value: 1,
          label: "激活",
        },
        {
          value: -1,
          label: "冻结",
        },
      ],
    },
    {
      field: "is_exp",
      type: "select",
      placeholder: "请选择是否过期",
      options: [
        {
          value: 1,
          label: "过期",
        },
        {
          value: -1,
          label: "未过期",
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
