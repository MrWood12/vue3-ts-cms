import { useStore } from "vuex";
export function getChannelById(id: number) {
  const store = useStore();
  const channelName = store.state.entireChannel.find((item: any) => {
    if (item.id === id) {
      return item;
    }
  });
  return channelName.name;
}
