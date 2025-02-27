import { HelmetX } from "~/components/HelmetX";

function DocsPage() {
   return (
      <>
         <HelmetX cannonicalPath="/docs" />
         <h1 className="containerX text-center mt-32 sm:mt-20">
            Documentation
         </h1>
         <section className="containerX">
            <p>Place for the future documentation</p>
         </section>
      </>
   );
}

export { DocsPage };
