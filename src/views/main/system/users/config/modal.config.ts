export const modalConfig = {
  formItems: [
    {
      field: "id",
      type: "input",
      label: "ID",
      isHidden: false,
    },
    {
      field: "username",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      field: "name",
      type: "input",
      label: "姓名",
      placeholder: "请输入姓名",
    },

    {
      field: "password",
      type: "input",
      label: "密码",
      placeholder: "请输入密码",
    },
    {
      field: "phone",
      type: "input",
      label: "联系号码",
      placeholder: "请输入姓名",
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
          value: 0,
          label: "禁用",
        },
      ],
    },
    {
      field: "role_name",
      type: "select",
      label: "角色信息",
      placeholder: "请选择角色",
    },
    {
      field: "channels",
      type: "checkbox",
      label: "选择渠道",
    },
  ],
};
