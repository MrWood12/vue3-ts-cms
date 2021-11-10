export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "order_no", label: "订单编号", minWidth: "100" },
    { prop: "info", label: "账号信息", minWidth: "100", slotName: "info" },
    {
      prop: "point_amt",
      label: "消费方式",
      minWidth: "100",
    },
    { prop: "orig_amt", label: "消费金额", minWidth: "100" },
    {
      prop: "amts",
      label: "联付（余额+现金）",
      minWidth: "100",
      slotName: "amts",
    },
    { prop: "create_time", label: "消费时间", minWidth: "100" },
    { prop: "shop_no", label: "消费终端", minWidth: "120" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
