export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "member_id", label: "用户id", minWidth: "100" },

    { prop: "card_no", label: "车牌号", minWidth: "100" },
    { prop: "phone", label: "手机号", minWidth: "100" },
    { prop: "realname", label: "名称", minWidth: "100" },
    { prop: "type", label: "油卡类型", minWidth: "100", slotName: "oilCard" },
    { prop: "gas", label: "油品类型", minWidth: "100", slotName: "oilProduct" },
    {
      prop: "oil_card_no",
      label: "油卡卡号",
      minWidth: "100",
    },
    {
      prop: "create_time",
      label: "创建时间",
      minWidth: "100",
    },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
