import Hero from "@/components/hero/Hero.component";
import Navbar from "@/components/navbar/Navbar.component";

export default function IndexPage() {
  return (
    <section className="container grid items-center pb-8 pt-6 md:py-10">
      <Navbar />
      <Hero />
    </section>
  );
}
