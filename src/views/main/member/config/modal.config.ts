import { IForm } from "@/base-ui/form";
export const modalConfig: IForm = {
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
      field: "channelId",
      type: "select",
      label: "渠道",
    },
    {
      field: "phone",
      type: "input",
      label: "生效时间",
      placeholder: "请输入生效时间",
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
    {
      field: "desc",
      type: "input",
      label: "备注",
    },
  ],
};
