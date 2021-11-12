// 会员状态
const memberStatus = [
  { status: 1, name: "激活" },
  {
    status: -1,
    name: "冻结",
  },
  {
    status: -2,
    name: "到期",
  },
];

export function getMemberStatusNameById(status: number) {
  const statusName = memberStatus.find((item: any) => {
    if (item.status === status) {
      return item;
    }
  });
  return statusName?.name;
}

// 权益订单操作方式
const powerordersType = [
  { type: 1, name: "后台创建" },
  {
    type: 2,
    name: "后台导入",
  },
  {
    type: 3,
    name: "用户购买",
  },
];
export function getpowerordersTypeById(type: number) {
  const powerOrdersName = powerordersType.find((item: any) => {
    if (item.type === type) {
      return item;
    }
  });
  return powerOrdersName?.name;
}

// 余额状态码
const rechargeType = [
  { type: 1, name: "成功" },
  {
    type: 0,
    name: "处理中",
  },
  {
    type: -1,
    name: "异常",
  },
];
export function rechargeTypeById(type: number) {
  const rechargeName = rechargeType.find((item: any) => {
    if (item.type === type) {
      return item;
    }
  });
  return rechargeName?.name;
}

// 油卡充值类型
const cardorderType = [
  { type: 1, name: "申请油卡预充值" },
  {
    type: 2,
    name: "油卡充值",
  },
];
export function cardorderTypeById(type: number) {
  const cardorderName = cardorderType.find((item: any) => {
    if (item.type === type) {
      return item;
    }
  });
  return cardorderName?.name;
}

// 油卡充值状态
const cardorderStatus = [
  { status: 0, name: "待付款" },
  {
    status: 1,
    name: "已付款",
  },
  {
    status: -1,
    name: "过期/关闭",
  },
];
export function cardorderStatusById(status: number) {
  const cardorderStatuName = cardorderStatus.find((item: any) => {
    if (item.status === status) {
      return item;
    }
  });
  return cardorderStatuName?.name;
}
