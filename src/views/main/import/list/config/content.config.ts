export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "id", label: "ID", minWidth: "100" },
    { prop: "batch_number", label: "批次编号", minWidth: "100" },

    { prop: "name", label: "文件名称", minWidth: "100" },

    {
      prop: "url",
      label: "批次源文件",
      minWidth: "100",
      slotName: "navigateToUrl",
    },
    {
      prop: "fail_url",
      label: "失败文件",
      minWidth: "100",
      slotName: "navigateToUrl",
    },
    {
      prop: "status",
      label: "状态",
      minWidth: "100",
      slotName: "batchStatus",
    },
    {
      prop: "type",
      label: "批次类型",
      minWidth: "100",
      slotName: "batchStatus_type",
    },
    {
      prop: "error_msg",
      label: "导入错误信息",
      minWidth: "100",
    },

    // {
    //   prop: "logiInfo",
    //   label: "店铺信息",
    //   minWidth: "100",
    //   slotName: "logiInfo",
    // },
    { prop: "create_time", label: "创建时间", minWidth: "100" },
    { prop: "opera_name", label: "操作人", minWidth: "100" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
