import { Nav } from "./components";
import {
  Hero,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
  Ministeres,
  Vision,
} from "./sections";
import Pasteur from "./sections/Pasteur";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding bg-">
        <Vision />
      </section>

      <section className="padding">
        <Pasteur />
      </section>

      <section className="padding md:mt-[100px] bg-slate-400 text-white">
        <Ministeres />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
