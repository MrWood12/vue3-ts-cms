import { IForm } from "@/base-ui/form";
export const modalConfig: IForm = {
  itemStyle: {
    width: "330px",
    padding: "0 5px",
  },
  formItems: [
    {
      field: "realname",
      type: "input",
      label: "姓名",
      placeholder: "请输入姓名",
    },
    {
      field: "phone",
      type: "input",
      label: "手机号",
      placeholder: "请输入手机号",
    },
    {
      field: "card_no",
      type: "input",
      label: "车牌号",
      placeholder: "请输入车牌号",
    },
    {
      field: "channel_id",
      type: "select",
      label: "渠道",
    },
    {
      field: "right_end_time",
      type: "datepicker",
      label: "到期时间",
      placeholder: "请输入到期时间",
    },
    {
      field: "status",
      type: "select",
      label: "状态",
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
    {
      field: "desc",
      type: "input",
      label: "备注",
    },
  ],
};
export const rechargeConfig: IForm = {
  labelWidth: "70px",
  itemStyle: {
    padding: "0 5px",
  },
  formItems: [
    {
      field: "member_id",
      type: "input",
      label: "用户id",
    },
    {
      field: "channel_id",
      type: "select",
      label: "渠道",
    },
    {
      field: "amount",
      type: "input",
      label: "金额",
      placeholder: "请输入充值金额",
    },
  ],
};
