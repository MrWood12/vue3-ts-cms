import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  itemStyle: {
    padding: "0 5px",
  },

  formItems: [
    {
      field: "bank_account",
      type: "input",
      label: "账号名称：",
      placeholder: "请输入账号名称",
    },
    {
      field: "start_date",
      type: "datepicker",
      label: "开始时间：",
      placeholder: "请选择开始时间",
    },
    {
      field: "end_date",
      type: "datepicker",
      label: "结束时间：",
      placeholder: "请选择结束时间",
    },
  ],
};
