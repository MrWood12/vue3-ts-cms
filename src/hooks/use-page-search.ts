import { ref } from "vue";
import PageContent from "@/components/page-content";
import store from "@/store";
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  // 点击导入
  const handleUploadClick = (queryInfo: any) => {
    console.log(5);
    pageContentRef.value?.hanleLoadDataClick(queryInfo.file);
  };
  // 点击新建
  const handleNewClick = () => {
    console.log(1);
    // store.dispatch("getInitialDataAction");
    pageContentRef.value?.handleNewClick();
  };
  // // 点击搜索
  const handleQueryClick = (queryInfo: any) => {
    console.log(2);

    pageContentRef.value?.getPageData(queryInfo);
  };
  // // 点击搜索并且获取权益累计总数
  const handleQueryAndpowerAmountClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo);
    store.dispatch("getPowerAmount", queryInfo);
  };
  // // 点击搜索并且获取余额充值累计总数
  const handleQueryAndRechargeAmountClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo);
    store.dispatch("getRechargeAmount", queryInfo);
  };
  // // 点击搜索并且获取消费订单累计总数
  const handleQueryAndPayorderAmountClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo);
    store.dispatch("getPayorderAmount", queryInfo);
  };
  // 点击重置
  const handleResetClick = () => {
    pageContentRef.value?.getPageData();
  };
  // // 点击重置并且获取权益累计总数
  const handleResetAndpowerAmountClick = () => {
    pageContentRef.value?.getPageData();
    store.dispatch("getPowerAmount");
  };
  // // 点击重置并且获取余额充值累计总数
  const handleResetAndRechargeAmountClick = () => {
    pageContentRef.value?.getPageData();
    store.dispatch("getRechargeAmount");
  };
  // // 点击重置并且获取消费订单累计总数
  const handleResetAndPayorderAmountClick = () => {
    pageContentRef.value?.getPageData();
    store.dispatch("getPayorderAmount");
  };
  return {
    handleQueryClick,
    handleResetClick,
    pageContentRef,
    handleNewClick,
    handleUploadClick,
    handleQueryAndpowerAmountClick,
    handleQueryAndRechargeAmountClick,
    handleResetAndpowerAmountClick,
    handleResetAndRechargeAmountClick,
    handleQueryAndPayorderAmountClick,
    handleResetAndPayorderAmountClick,
  };
}
