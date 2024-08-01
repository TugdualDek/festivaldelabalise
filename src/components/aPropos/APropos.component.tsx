import React from "react";
import { Card } from "@/components/ui/card";
import { Target, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-4 text-[var(--color-red)]">
        À Propos du festival
      </h2>
      <p className="text-xl text-center mb-8">
        Le Festival de la Balise est une célébration de la culture bretonne, de
        la musique et du mode de vie côtier. Organisé chaque année dans la ville
        de pêche historique de Lanildut, le festival propose de la musique live,
        de la cuisine bretonne traditionnelle, ainsi qu'une variété d'activités
        et d'expositions sur le thème de la mer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Target size={48} className="text-[var(--color-red)]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
          <p>
            Nous nous efforçons de fournir des solutions innovantes pour
            améliorer la vie quotidienne de nos clients.
          </p>
        </Card>

        <Card className="p-6 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Users size={48} className="text-[var(--color-red)]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Notre Équipe</h3>
          <p>
            Une équipe passionnée de professionnels dévoués à l'excellence et à
            l'innovation.
          </p>
        </Card>

        <Card className="p-6 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Heart size={48} className="text-[var(--color-red)]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Nos Valeurs</h3>
          <p>
            Intégrité, créativité et engagement envers la satisfaction client
            sont au cœur de notre philosophie.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
