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
      field: "order_no",
      type: "input",
      placeholder: "请输入订单号",
    },
    {
      field: "card_no",
      type: "input",
      placeholder: "请输入车牌号",
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
          label: "已付款",
        },
        {
          value: -1,
          label: "过期/关闭",
        },
      ],
    },
    {
      field: "type",
      type: "select",
      placeholder: "请选择充值类型",
      options: [
        {
          value: 1,
          label: "申请油卡预充值",
        },
        {
          value: 2,
          label: "油卡充值",
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
