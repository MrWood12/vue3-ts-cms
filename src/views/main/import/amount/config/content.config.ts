export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "id", label: "ID", minWidth: "100" },
    { prop: "batch_number", label: "批次编号", minWidth: "100" },

    { prop: "info", label: "账号信息", minWidth: "100", slotName: "info" },

    {
      prop: "amount",
      label: "金额",
      minWidth: "100",
    },
    {
      prop: "channel_id",
      label: "渠道ID",
      minWidth: "100",
      slotName: "oilProduct",
    },
    {
      prop: "channel_code",
      label: "渠道码",
      minWidth: "100",
      slotName: "cardapplicationStatus",
    },
    {
      prop: "status",
      label: "状态",
      minWidth: "100",
      slotName: "batchStatus",
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
