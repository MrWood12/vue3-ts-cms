import { ref } from "vue";
import PageModal from "@/components/page-modal";

type CallbackType = () => void;
export function usePageModal(
  newCb?: CallbackType,
  editCb?: CallbackType,
  rechargeCb?: CallbackType
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});
  const handleNewData = () => {
    defaultInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    newCb && newCb();
  };
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    editCb && editCb();
  };
  const handleChargeData = () => {
    defaultInfo.value = {};
    console.log(2);
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    rechargeCb && rechargeCb();
  };
  return [
    pageModalRef,
    defaultInfo,
    handleNewData,
    handleEditData,
    handleChargeData,
  ];
}
