import { ref } from "vue";
import PageModal from "@/components/page-modal";
import store from "@/store";
import { computed } from "vue";
import localCache from "@/utils/localCache";

type CallbackType = () => void;
export function usePageModal(
  newCb?: CallbackType,
  editCb?: CallbackType,
  rechargeCb?: CallbackType
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});
  const modalName = ref("");
  const handleNewData = () => {
    defaultInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    modalName.value = "newModal";
    newCb && newCb();
  };
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    editCb && editCb();
  };
  const handleChargeData = (item: any) => {
    defaultInfo.value = { member_id: item.id };
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    modalName.value = "rechargeModal";

    rechargeCb && rechargeCb();
  };
  const handleApplicationDetailData = (item: any) => {
    store.dispatch("getApplicationDetailAction", item.id);
    const applicationDataList = computed(() =>
      localCache.getCache("applicationDataList")
    );
    console.log(applicationDataList);
    defaultInfo.value = { ...applicationDataList.value };
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    modalName.value = "applicationDetailModal";
    rechargeCb && rechargeCb();
  };
  const handleApplicationDeliverData = (item: any) => {
    store.dispatch("getApplicationDetailAction", item.id);
    const applicationDataList = computed(() =>
      localCache.getCache("applicationDataList")
    );
    console.log(applicationDataList);
    defaultInfo.value = {
      order_no: applicationDataList.value.order_no,
    };
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    modalName.value = "applicationDeliverlModal";

    rechargeCb && rechargeCb();
  };
  return {
    pageModalRef,
    defaultInfo,
    handleNewData,
    handleEditData,
    handleChargeData,
    modalName,
    handleApplicationDetailData,
    handleApplicationDeliverData,
  };
}
