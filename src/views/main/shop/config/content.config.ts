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
    { prop: "lng", label: "经度", minWidth: "100" },
    { prop: "lat", label: "纬度", minWidth: "100" },
    {
      prop: "type",
      label: "油卡类型",
      minWidth: "100",
      slotName: "oilCard",
    },

    { prop: "is_debt", label: "是否核销", minWidth: "100", slotName: "status" },
    { prop: "create_time", label: "创建时间", minWidth: "120" },
    { prop: "doing", label: "操作", minWidth: "120", slotName: "doing" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
