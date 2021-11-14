export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "order_no", label: "订单编号", minWidth: "100" },
    { prop: "info", label: "账号信息", minWidth: "100", slotName: "info" },
    // {
    //   prop: "productinfo",
    //   label: "商品信息",
    //   minWidth: "100",
    //   slotName: "productinfo",
    // },
    { prop: "card_no", label: "车牌号", minWidth: "100" },
    {
      prop: "type",
      label: "油卡类型",
      minWidth: "100",
      slotName: "oilCard",
    },
    {
      prop: "gas",
      label: "油品类型",
      minWidth: "100",
      slotName: "oilProduct",
    },
    {
      prop: "status",
      label: "油卡申请状态",
      minWidth: "100",
      slotName: "cardapplicationStatus",
    },
    { prop: "orin_amount", label: "充值金额", minWidth: "100" },
    { prop: "amount", label: "实付金额", minWidth: "100" },

    // {
    //   prop: "logiInfo",
    //   label: "店铺信息",
    //   minWidth: "100",
    //   slotName: "logiInfo",
    // },
    { prop: "create_time", label: "下单时间", minWidth: "100" },
    { label: "操作", minWidth: "120", slotName: "applicationLable" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
