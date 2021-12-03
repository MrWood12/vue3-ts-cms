export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "id", label: "ID", minWidth: "100" },
    { prop: "name", label: "名称", minWidth: "100" },
    { prop: "username", label: "用户名", minWidth: "100" },

    { prop: "phone", label: "联系方式", minWidth: "100" },
    {
      prop: "role_name",
      label: "角色名",
      minWidth: "100",
      slotName: "roleName",
    },
    { prop: "status", label: "状态", minWidth: "100", slotName: "userstatus" },
    { prop: "add_time", label: "添加时间", minWidth: "100" },
    { prop: "update_time", label: "更新时间", minWidth: "100" },
    { label: "操作", minWidth: "120", slotName: "handler" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
