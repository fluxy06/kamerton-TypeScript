import { useLocation, useRoutes } from "react-router-dom";
import { PageTransitionWrapper } from "@hooks/page-swap";
import HomePage from "@pages/HomePage";
import CatalogPage from "@pages/CatalogPage";

export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/catalog", element: <CatalogPage /> }
  ]);

  return (
    <PageTransitionWrapper locationKey={location.pathname}>
      {routes}
    </PageTransitionWrapper>
  );
};
