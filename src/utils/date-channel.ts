import { useStore } from "vuex";
export function getChannelById(id: number) {
  const store = useStore();
  const channelName = store.state.entireChannel.find((item: any) => {
    if (item.id === id) {
      return item;
    }
  });
  return channelName;
}
export function getChannelData(data: any) {
  const finalData = data.map((item: any) => {
    return item.name;
  });
  return finalData;
}
