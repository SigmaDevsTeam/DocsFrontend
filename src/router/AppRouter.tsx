import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "~/components/Layout";
import { routes } from "~/global/config/routes.config";
import { CreditsPage } from "~/pages/CreditsPage/CreditsPage";
import { DocsPage } from "~/pages/DocsPage/DocsPage";
import { HomePage } from "~/pages/HomePage/HomePage";
import { NotFoundPage } from "~/pages/NotFoundPage";

function AppRouter() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={routes.home} element={<Layout />}>
               {/* home */}
               <Route path={routes.home} element={<HomePage />} />

               <Route path={routes.credits} element={<CreditsPage />} />
               <Route path={routes.docs} element={<DocsPage />} />

               {/* Fallback */}
               <Route path="*" element={<NotFoundPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export { AppRouter };
