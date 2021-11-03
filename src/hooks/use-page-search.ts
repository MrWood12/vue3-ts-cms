import { ref } from "vue";
import PageContent from "@/components/page-content";
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  // // 点击搜索
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo);
  };
  return [handleQueryClick, pageContentRef];
}
