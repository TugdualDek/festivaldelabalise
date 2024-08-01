import Image from "next/image";
import TimelineItem from "./TimeLineItem.component";

const Program = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-red)]">
        Programme du Festival
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-1 w-full max-w-xl">
          <TimelineItem
            date={{
              day: "Vendredi",
              date: "23 Août",
            }}
            content={[
              "18 H 00 - 22 H 00 : Cérémonie d'ouverture et musique live",
            ]}
          />
          <TimelineItem
            date={{
              day: "Samedi",
              date: "24 Août",
            }}
            content={[
              "10 H 00 - 17 H 00 : Expositions et ateliers maritimes",
              "19 H 00 - 23 H 00 : Spectacles sur la scène principale",
            ]}
          />
          <TimelineItem
            date={{
              day: "Dimanche",
              date: "25 Août",
            }}
            content={[
              "11 H 00 - 16 H 00 : Cuisine bretonne et marché artisanal",
              "17 H 00 - 21 H 00 : Cérémonie de clôture et feux d'artifice",
            ]}
          />
        </div>

        <div className="flex-1 w-full max-w-xl flex justify-center items-center">
          <div className="relative w-full h-[300px]">
            <Image
              src="/balise_lieu_new.jpg"
              alt="nouvelle balise"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
