export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "id", label: "ID", minWidth: "100" },
    { prop: "name", label: "文件名", minWidth: "100" },

    { prop: "type", label: "类型", minWidth: "100", slotName: "exporttype" },
    {
      prop: "url",
      label: "下载",
      minWidth: "100",
      slotName: "navigateToUrl",
    },
    {
      prop: "status",
      label: "状态",
      minWidth: "120",
      slotName: "exportstatus",
    },
    { prop: "create_time", label: "创建时间", minWidth: "100" },
    { prop: "complete_time", label: "完成时间", minWidth: "100" },
    { prop: "msg", label: "提示信息", minWidth: "100" },
    { prop: "download_count", label: "下载次数", minWidth: "100" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
