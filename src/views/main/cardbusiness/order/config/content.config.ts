export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "order_no", label: "订单编号", minWidth: "100" },
    { prop: "info", label: "账号信息", minWidth: "100", slotName: "info" },
    { prop: "card_no", label: "车牌号", minWidth: "100" },
    {
      prop: "status",
      label: "状态",
      minWidth: "100",
      slotName: "cardorderStatus",
    },
    { prop: "amount", label: "油品类型", minWidth: "100" },
    { prop: "oil_card_no", label: "卡号", minWidth: "100" },

    {
      prop: "orin_amount",
      label: "充值金额",
      minWidth: "100",
    },
    {
      prop: "amount",
      label: "实付金额",
      minWidth: "100",
    },
    { prop: "create_time", label: "下单时间", minWidth: "100" },
    // { label: "操作", minWidth: "120", slotName: "handler" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
