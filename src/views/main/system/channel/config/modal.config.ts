export const modalConfig = {
  formItems: [
    {
      field: "id",
      type: "input",
      label: "ID",
    },
    {
      field: "name",
      type: "input",
      label: "渠道名称",
      placeholder: "请输入渠道名称",
    },
    {
      field: "price",
      type: "input",
      label: "权益定价",
      placeholder: "请输入定价",
    },
    {
      field: "desc",
      type: "textarea",
      label: "备注",
      isHidden: false,
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
  ],
};
