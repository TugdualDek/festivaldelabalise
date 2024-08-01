import { CustomBadge } from "@/components/customBadge/CustomBadge.component";
import Hero from "@/components/hero/Hero.component";
import Navbar from "@/components/navbar/Navbar.component";
import APropos from "@/components/aPropos/APropos.component";
import Program from "@/components/programme/Program.component";
import Register from "@/components/register/Register.component";

export default function IndexPage() {
  return (
    <section className="container grid items-center pb-8 pt-6 md:py-10">
      <Navbar />
      <div id="">
        <Hero />
      </div>
      <div id="a-propos">
        <div className="flex justify-center mt-5">
          <CustomBadge
            text="Highlights"
            color="var(--color-red)"
            size="medium"
          />
        </div>
        <APropos />
      </div>
      <div id="programme">
        <Program />
      </div>
      <div id="enregistrement">
        <Register />
      </div>
    </section>
  );
}
