import { NavLink, Outlet, useLocation } from "react-router";
import { routes } from "~/global/config/routes.config";
import { AnimationProvider } from "./theme/animation/AnimationProvider";
import { Avatar, Button } from "@radix-ui/themes";
import { wait } from "~/global/utils/wait";
import { redirectToWebsite } from "~/global/utils/redirectToWebsite";
import { useAnimation } from "~/global/hooks/useAnimation";
import { Popup } from "./theme/Popup";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function Layout() {
   const { setAnimation } = useAnimation();

   const location = useLocation();

   const [visible, setVisible] = useState(false);

   useEffect(() => {
      if (location.pathname !== "/") {
         setVisible(location.pathname !== "/");
         return;
      } else {
         setVisible(false);
      }

      const handleScroll = () => {
         if (window.scrollY > window.innerHeight / 2) {
            setVisible(true);
         } else {
            setVisible(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [location]);

   const [isBurgerOpen, setIsBurgerOpen] = useState(false);

   const navigateTo = async (url: string) => {
      setAnimation("cover");
      await wait(0.7);
      redirectToWebsite(url);
   };

   const navigateToSpace = async () => {
      navigateTo(`${import.meta.env.SABAODY_MAIN_URL}?uncover=true`);
   };

   const navigateToSpaceLogin = async () => {
      navigateTo(`${import.meta.env.SABAODY_MAIN_URL}/login?uncover=true`);
   };

   const navigateToStudio = async () => {
      navigateTo(`${import.meta.env.SABAODY_STUDIO_URL}?uncover=true`);
   };

   return (
      <>
         <header
            className={clsx(
               "bg-(--color-panel-solid) border-b border-(--gray-6) fixed w-screen opacity-0 z-10 layout-opacity-transtition",
               { "opacity-100": visible }
            )}
         >
            <nav className="flex gap-4 justify-between items-center containerX py-2 flex-col sm:flex-row relative">
               <NavLink to={routes.home}>
                  <h2>
                     Sabaody <span className="text-(--accent-10)">Docs</span>
                  </h2>
               </NavLink>
               <div className="absolute top-2.5 right-3 sm:hidden">
                  <Button
                     variant="ghost"
                     className="!m-0 !text-xl"
                     onClick={() => setIsBurgerOpen((isO) => !isO)}
                  >
                     <i className="pi pi-bars" />
                  </Button>
               </div>
               <ul
                  className={clsx(
                     "flex gap-4 w-full sm:w-auto sm:flex-row items-center justify-center -mt-2 sm:mt-0 sm:!flex",
                     { hidden: !isBurgerOpen }
                  )}
               >
                  <li>
                     <NavLink
                        to={routes.credits}
                        className="text-(--gray-11) hover:text-(--gray-12)"
                     >
                        Credits
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to={routes.docs}
                        className="text-(--gray-11) hover:text-(--gray-12)"
                     >
                        Docs
                     </NavLink>
                  </li>
                  <li>
                     <Popup
                        trigger={
                           <Button
                              variant="ghost"
                              color="gray"
                              className="!text-base"
                           >
                              Other apps
                           </Button>
                        }
                        content={
                           <div className="-m-2 flex flex-col gap-2">
                              <small className="-mb-2">Main application:</small>
                              <Button
                                 variant="ghost"
                                 color="gray"
                                 className="!text-base"
                                 onClick={navigateToSpace}
                              >
                                 <b className="font-Montserrat">
                                    <span className="text-(--gray-12)">
                                       Sabaody
                                    </span>{" "}
                                    <span className="text-(--blue-10)">
                                       Space
                                    </span>
                                 </b>
                              </Button>
                              <small className="-mb-2">Admin panel:</small>
                              <Button
                                 variant="ghost"
                                 color="gray"
                                 className="!text-base"
                                 onClick={navigateToStudio}
                              >
                                 <b className="font-Montserrat">
                                    <span className="text-(--gray-12)">
                                       Sabaody
                                    </span>{" "}
                                    <span className="text-(--purple-10)">
                                       Studio
                                    </span>
                                 </b>
                              </Button>
                           </div>
                        }
                     />
                  </li>
                  <li className="sm:ml-4">
                     <Popup
                        trigger={
                           <Button
                              variant="ghost"
                              className="!p-1"
                              radius="full"
                           >
                              <Avatar fallback={<i className="pi pi-user" />} />
                           </Button>
                        }
                        content={
                           <div className="-m-2 flex flex-col gap-2">
                              <small className="text-center">
                                 You are not logged in
                              </small>
                              <Button onClick={navigateToSpaceLogin}>
                                 Login / Sign up
                              </Button>
                           </div>
                        }
                     />
                  </li>
               </ul>
            </nav>
         </header>
         <main>
            <Outlet />
         </main>
         <AnimationProvider />
      </>
   );
}
