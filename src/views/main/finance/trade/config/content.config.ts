export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "order_no", label: "订单编号", minWidth: "100" },
    { prop: "info", label: "账号信息", minWidth: "100", slotName: "info" },
    { prop: "amount", label: "充值金额", minWidth: "100" },
    {
      prop: "status",
      label: "状态",
      minWidth: "100",
      slotName: "rechargeStatus",
    },
    { prop: "create_time", label: "充值时间", minWidth: "100" },
    { prop: "opera_name", label: "操作人", minWidth: "120" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
