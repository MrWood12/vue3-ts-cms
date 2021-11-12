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
          value: 0,
          label: "待付款",
        },
        {
          value: 1,
          label: "已付款，待发货",
        },
        {
          value: 2,
          label: "已发货",
        },
        {
          value: 10,
          label: "完成",
        },
        {
          value: -1,
          label: "关闭",
        },
      ],
    },
    {
      field: "type",
      type: "select",
      placeholder: "请选择油卡类型",
    },
    {
      field: "gas",
      type: "select",
      placeholder: "请选择油品类型",
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
