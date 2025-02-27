import { Card } from "@radix-ui/themes";
import HeroBackground from "/heroBackground.webp";
import clsx from "clsx";
import { useIntersection } from "~/global/hooks/useInterSection";

function SecondSection() {
   const { ref: top, isVisible: isTop } = useIntersection();
   const { ref: bottom, isVisible: isBottom } = useIntersection();
   return (
      <section
         className="overflow-x-hidden hero"
         style={{ backgroundImage: `url(${HeroBackground}` }}
      >
         <div className="hero-overlay !h-[10vh]"></div>
         <div className="hero-overlay !h-[90vh] !top-[10vh] !opacity-100 !bg-(--accent-1) border-y border-(--accent-6)">
            <div className="containerX">
               <div
                  ref={top}
                  className={clsx("appear-top-scale mt-20", {
                     "--show": isTop
                  })}
               >
                  <TestCard text="top scale" />
               </div>
               <div
                  ref={bottom}
                  className={clsx("appear-bottom-scale mt-20", {
                     "--show": isBottom
                  })}
               >
                  <TestCard text="bottom scale" />
               </div>
            </div>
         </div>
      </section>
   );
}

function TestCard({ text }: { text: string }) {
   return (
      <Card className="!mx-auto !w-[320px] !h-[120px]">
         <h2 className="text-center h-full flex items-center justify-center">
            Appear from {text}
         </h2>
      </Card>
   );
}

export { SecondSection };
