import { ref } from "vue";
import PageContent from "@/components/page-content";
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  // 点击导入
  const handleUploadClick = (queryInfo: any) => {
    pageContentRef.value?.hanleLoadDataClick(queryInfo.file);
  };
  // 点击新建
  const handleNewClick = () => {
    console.log("点击新建");
    pageContentRef.value?.handleNewClick();
  };
  // // 点击搜索
  const handleQueryClick = (queryInfo: any) => {
    console.log(1);
    pageContentRef.value?.getPageData(queryInfo);
  };
  // 点击重置
  const handleResetClick = () => {
    pageContentRef.value?.getPageData();
  };

  return [
    handleQueryClick,
    handleResetClick,
    pageContentRef,
    handleNewClick,
    handleUploadClick,
  ];
}
