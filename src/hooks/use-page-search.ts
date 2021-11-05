import { ref } from "vue";
import PageContent from "@/components/page-content";
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  // // 点击搜索
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo);
  };
  // 点击重置
  const handleResetClick = () => {
    pageContentRef.value?.getPageData();
  };

  return [handleQueryClick, handleResetClick, pageContentRef];
}
