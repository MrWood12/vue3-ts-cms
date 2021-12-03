export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "order_no", label: "订单编号", minWidth: "100" },
    { prop: "info", label: "账号信息", minWidth: "100", slotName: "info" },

    { prop: "orig_amt", label: "消费金额", minWidth: "100" },
    {
      prop: "amts",
      label: "联付（现金+余额）",
      minWidth: "100",
      slotName: "amts",
    },
    { prop: "shop_no", label: "消费终端", minWidth: "120" },
    { prop: "trans_date", label: "支付时间", minWidth: "100" },

    { prop: "create_time", label: "创建时间", minWidth: "100" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
