export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "name", label: "名称", minWidth: "100" },
    { prop: "address", label: "地址", minWidth: "100" },
    {
      prop: "picture",
      label: "图片",
      minWidth: "100",
      slotName: "images",
    },
    { prop: "is_debt", label: "是否核销", minWidth: "100", slotName: "status" },
    { prop: "create_time", label: "创建时间", minWidth: "120" },
    { prop: "doing", label: "操作", minWidth: "120", slotName: "doing" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
