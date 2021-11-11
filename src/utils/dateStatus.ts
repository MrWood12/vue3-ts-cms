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
