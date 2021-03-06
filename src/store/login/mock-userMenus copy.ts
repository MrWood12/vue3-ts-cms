const adminMenus = [
  {
    // 图标
    icon: "el-icon-house",
    id: 1,
    name: "工作台",
    sort: 1,
    // 1：有子菜单 2：无子菜单
    type: 2,
    // 路由
    url: "/main/workbench",
  },
  {
    icon: "el-icon-user",
    id: 2,
    name: "会员管理",
    sort: 2,
    type: 2,
    url: "/main/member",
  },
  {
    icon: "el-icon-money",
    id: 3,
    name: "资金池",
    sort: 3,
    type: 2,
    url: "/main/capitalpool",
  },
  {
    icon: "el-icon-shopping-cart-full",
    id: 4,
    name: "权益订单",
    sort: 4,
    type: 2,
    url: "/main/powerorders",
  },
  {
    icon: "el-icon-sold-out",
    id: 5,
    name: "消费订单",
    sort: 5,
    type: 2,
    url: "/main/payorders",
  },
  {
    icon: "el-icon-odometer",
    id: 6,
    name: "服务站管理",
    sort: 6,
    type: 2,
    url: "/main/shop",
  },

  {
    icon: "el-icon-bank-card",
    id: 7,
    name: "油卡业务",
    sort: 7,
    type: 1,
    url: "/main/cardbusiness",
    children: [
      {
        id: 71,
        name: "油卡申请",
        sort: 6,
        type: 2,
        url: "/main/cardbusiness/application",
      },
      {
        id: 72,
        name: "油卡管理",
        sort: 6,
        type: 2,
        url: "/main/cardbusiness/manage",
      },
      {
        id: 73,
        name: "油卡订单",
        sort: 6,
        type: 2,
        url: "/main/cardbusiness/order",
      },
    ],
  },
  {
    icon: "el-icon-coin",
    id: 8,
    name: "财务管理",
    sort: 7,
    type: 1,
    url: "/main/finance",
    children: [
      {
        id: 81,
        name: "对账系统",
        sort: 7,
        type: 2,
        url: "/main/finance/reconciliation",
      },
      {
        id: 82,
        name: "余额充值记录",
        sort: 7,
        type: 2,
        url: "/main/finance/recharge",
      },
    ],
  },
  {
    icon: "el-icon-document-copy",
    id: 9,
    name: "导入文件查询",
    sort: 8,
    type: 1,
    url: "/main/import",
    children: [
      {
        id: 91,
        name: "导入会员列表",
        sort: 8,
        type: 2,
        url: "/main/import/user",
      },
      {
        id: 92,
        name: "导入余额列表",
        sort: 8,
        type: 2,
        url: "/main/import/amount",
      },
      {
        id: 93,
        name: "导入批次列表",
        sort: 8,
        type: 2,
        url: "/main/import/list",
      },
    ],
  },
  {
    icon: "el-icon-setting",
    id: 10,
    name: "系统配置",
    sort: 10,
    type: 1,
    url: "/main/system",
    children: [
      {
        id: 101,
        name: "渠道管理",
        sort: 8,
        type: 2,
        url: "/main/system/channel",
      },
      {
        id: 101,
        name: "后台用户管理",
        sort: 11,
        type: 2,
        url: "/main/system/users",
      },
    ],
  },
];
const channelMenus = [
  {
    icon: "el-icon-user",
    id: 1,
    name: "会员管理",
    sort: 1,
    type: 2,
    url: "/main/member",
  },

  {
    icon: "el-icon-shopping-cart-full",
    id: 2,
    name: "权益订单",
    sort: 2,
    type: 2,
    url: "/main/powerorders",
  },

  {
    icon: "el-icon-coin",
    id: 3,
    name: "财务管理",
    sort: 7,
    type: 1,
    url: "/main/finance",
    children: [
      {
        id: 31,
        name: "余额充值记录",
        sort: 7,
        type: 2,
        url: "/main/finance/recharge",
      },
    ],
  },
];
export { adminMenus, channelMenus };
