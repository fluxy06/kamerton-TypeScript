import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useSmoothScroll } from "@hooks/smoothScroll";

/**
 * 
 */
export const usePageScroll = () => {
  const { scrollTo } = useSmoothScroll();
  const location = useLocation();

  /**
   * 
   * @param blockIdHome - id блока на HomePage
   * @param blockIdCatalog - id блока на CatalogPage
   */
  const scrollToBlock = useCallback(
    (blockIdHome: string, blockIdCatalog: string) => {
      let targetId = "";

      if (location.pathname === "/") {
        targetId = blockIdHome;
      } else if (location.pathname === "/catalog") {
        targetId = blockIdCatalog;
      }

      if (targetId) {
        scrollTo(targetId);
      }
    },
    [location.pathname, scrollTo]
  );

  /**
   * Возвращает обработчик для onClick
   */
  const handleScrollToBlock = useCallback(
    (blockIdHome: string, blockIdCatalog: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      scrollToBlock(blockIdHome, blockIdCatalog);
    },
    [scrollToBlock]
  );

  return { scrollToBlock, handleScrollToBlock };
};
