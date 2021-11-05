import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  itemStyle: {
    padding: "0 5px",
  },

  formItems: [
    {
      field: "realname",
      type: "input",
      placeholder: "请输入用户名",
    },
    {
      field: "channel",
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
          label: "激活",
        },
        {
          value: -1,
          label: "冻结",
        },
        {
          value: -2,
          label: "到期",
        },
      ],
    },
  ],
};
