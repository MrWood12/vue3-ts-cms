import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  itemStyle: {
    padding: "0 5px",
  },

  formItems: [
    {
      field: "status",
      type: "select",
      placeholder: "请选择状态",
      options: [
        {
          value: 1,
          label: "待执行",
        },
        {
          value: 2,
          label: "执行中",
        },
        {
          value: 10,
          label: "执行完成",
        },
        {
          value: -1,
          label: "执行失败",
        },
      ],
    },
    {
      field: "type",
      type: "select",
      placeholder: "请选择类型",
      options: [
        {
          value: 10001,
          label: "权益会员",
        },
        {
          value: 20001,
          label: "资金池",
        },
        {
          value: 30001,
          label: "权益订单",
        },
        {
          value: 40001,
          label: "消费订单",
        },
        {
          value: 50001,
          label: "油卡申请",
        },
        {
          value: 60001,
          label: "油卡充值",
        },
        {
          value: 70001,
          label: "余额充值记录",
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
