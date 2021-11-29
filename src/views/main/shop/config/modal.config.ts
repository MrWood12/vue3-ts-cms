export const modalConfig = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "站点名称",
      placeholder: "请输入站点名称",
    },
    {
      field: "address",
      type: "input",
      label: "地址",
      placeholder: "请输入地址",
    },
    {
      field: "lng",
      type: "input",
      label: "经度",
      placeholder: "请输入经度",
    },
    {
      field: "lat",
      type: "input",
      label: "维度",
      placeholder: "请输入维度",
    },
    {
      field: "type",
      type: "select",
      label: "类型",
      placeholder: "请选择",
      options: [
        {
          value: 1,
          label: "中石油",
        },
        {
          value: 2,
          label: "中石化",
        },
      ],
    },
    {
      field: "is_debt",
      type: "select",
      label: "是否显示",
      placeholder: "请选择",
      options: [
        {
          value: 0,
          label: "不支持",
        },
        {
          value: 1,
          label: "支持",
        },
      ],
    },
    {
      field: "picture",
      type: "upload",
      label: "上传图片",
    },
  ],
};
