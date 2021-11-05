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
