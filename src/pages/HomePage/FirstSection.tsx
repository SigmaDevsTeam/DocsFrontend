import { Card } from "@radix-ui/themes";
import { useIntersection } from "~/global/hooks/useInterSection";
import clsx from "clsx";

function FirstSection() {
   const { ref: right, isVisible: isRight } = useIntersection();
   const { ref: left, isVisible: isLeft } = useIntersection();
   const { ref: top, isVisible: isTop } = useIntersection();
   const { ref: bottom, isVisible: isBottom } = useIntersection();

   return (
      <section className="min-h-screen bg-(--color-background) border-y border-(--gray-6) overflow-x-hidden">
         <div className="containerX mt-20">
            <div
               ref={right}
               className={clsx("appear-right", { "--show": isRight })}
            >
               <TestCard text="right" />
            </div>

            <div
               ref={left}
               className={clsx("appear-left mt-20", { "--show": isLeft })}
            >
               <TestCard text="left" />
            </div>

            <div
               ref={top}
               className={clsx("appear-top mt-20", { "--show": isTop })}
            >
               <TestCard text="top" />
            </div>

            <div
               ref={bottom}
               className={clsx("appear-bottom mt-20", { "--show": isBottom })}
            >
               <TestCard text="bottom" />
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

export { FirstSection };
