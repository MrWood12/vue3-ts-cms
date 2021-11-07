export const contentTableConfig = {
  // title: "列表",
  propList: [
    { prop: "info", label: "账号信息", minWidth: "100", slotName: "info" },
    { prop: "account", label: "有效余额", minWidth: "100" },
    { prop: "create_time", label: "创建时间", minWidth: "100" },
    { prop: "right", label: "权益有效期", minWidth: "100", slotName: "right" },
    {
      prop: "channel_id",
      label: "来源渠道",
      minWidth: "100",
      slotName: "channel",
    },
    {
      prop: "memberStatus",
      label: "状态",
      minWidth: "100",
      slotName: "memberStatus",
    },
    { label: "操作", minWidth: "120", slotName: "memberhandler" },
  ],
  // showIndexColumn: true,
  // showSelectColum: true,
};
