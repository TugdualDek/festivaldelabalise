import Hero from "../components/hero/Hero.component";
import SpecialLayout from "../components/layout/layout";

export default function Home() {
  return (
    <SpecialLayout>
      <section>
        <Hero />
      </section>
    </SpecialLayout>
  );
}
