export const modalConfig = {
  formItems: [
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
      type: "input",
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
          title: 1,
        },
        {
          title: 0,
        },
      ],
    },
  ],
};
