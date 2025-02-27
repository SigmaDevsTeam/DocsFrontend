import { HelmetX } from "~/components/HelmetX";

function CreditsPage() {
   return (
      <>
         <HelmetX cannonicalPath="/credits" />
         <h1 className="containerX text-center mt-32 sm:mt-20">Credits</h1>
         <section className="containerX py-8">
            <h2>Bohdan Shovkoplias</h2>
            <p>Front-end Developer visual developer💅</p>
         </section>

         <section className="containerX py-8">
            <h2>Artem Fedorov</h2>
            <p>Back-end Java Assistant</p>
         </section>
         <section className="containerX py-8">
            <h2>Vlad Seluk</h2>
            <p>Team Leader, Back-end Java Developer</p>
         </section>

         <section className="containerX py-8">
            <h2>Maksym Bondarenko</h2>
            <p>Front-end Developer logic developer</p>
         </section>
      </>
   );
}

export { CreditsPage };
