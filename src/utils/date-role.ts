import { useStore } from "vuex";
export function getRoleByName(name: string) {
  const store = useStore();
  const roleName = store.state.entireRoleList.find((item: any) => {
    if (item.name === name) {
      return item;
    }
  });
  return roleName?.value;
}
