import { HelmetX } from "~/components/HelmetX";
import "./HomePage.css";
import "./HomePage.animations.css";

import HeroBackground from "/heroBackground.webp";
import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";

function HomePage() {
   return (
      <>
         <HelmetX />
         <section
            className="hero"
            style={{ backgroundImage: `url(${HeroBackground}` }}
         >
            <div className="hero-overlay"></div>
            <div className="absolute z-[2] flex flex-col justify-center items-center h-screen w-screen">
               <h1 className="!text-6xl text-center">
                  Sabaody <b className="text-(--accent-10)">space</b>
               </h1>
            </div>
         </section>
         <FirstSection />
         <SecondSection />
      </>
   );
}

export { HomePage };
