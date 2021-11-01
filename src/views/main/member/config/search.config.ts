import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  labelWidth: "10px",
  itemStyle: {
    padding: "0 5px",
  },

  formItems: [
    {
      field: "id",
      type: "input",
      placeholder: "请输入用户名/手机",
      otherOptions: {
        suffixIcon: "el-icon-search",
      },
    },
    {
      field: "date",
      type: "datepicker",
      placeholder: "创建时间范围",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
      },
    },
    {
      field: "way",
      type: "select",
      placeholder: "渠道来源",
      options: [
        {
          title: "自热渠道",
        },
        {
          title: "合作渠道1",
        },
      ],
    },
    {
      field: "state",
      type: "select",
      placeholder: "状态",
    },
  ],
};
