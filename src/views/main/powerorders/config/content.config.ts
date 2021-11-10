export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "order_no", label: "订单编号", minWidth: "100" },
    { prop: "info", label: "账号信息", minWidth: "100", slotName: "info" },
    {
      prop: "type",
      label: "操作方式",
      minWidth: "100",
      slotName: "ordersType",
    },
    { prop: "amount", label: "交易金额", minWidth: "100" },
    { prop: "name", label: "渠道来源", minWidth: "100" },
    { prop: "create_time", label: "交易时间", minWidth: "100" },
    { prop: "opera_name", label: "操作人", minWidth: "120" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
