"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Music2, Bike, Beer } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-4 text-[var(--color-red)]">
        À Propos du festival
      </h2>
      <p className="text-lg text-center mb-8">
        Le Festival de la Balise est une célébration de la culture bretonne, de
        la musique et du mode de vie côtier. Organisé chaque année dans la ville
        de pêche historique de Lanildut, le festival propose de la musique live,
        de la cuisine bretonne traditionnelle, ainsi qu&apos;une variété
        d&apos;activités et d&apos;expositions sur le thème de la mer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Music2 size={48} className="text-[var(--color-red)]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Musique</h3>
          <p>
            Profitez des spectacles musicaux envoûtants d&apos;artistes
            renommés, qui mettent en valeur le riche patrimoine culturel de la
            Bretagne.
          </p>
        </Card>

        <Card className="p-6 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Bike size={48} className="text-[var(--color-red)]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Activités en plein air</h3>
          <p>
            Plongez dans la beauté naturelle de Lanildut avec des activités de
            plein air, des randonnées côtières aux aventures en kayak.
          </p>
        </Card>

        <Card className="p-6 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Beer size={48} className="text-[var(--color-red)]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Délices culinaires</h3>
          <p>
            Laissez-vous tenter par les saveurs de la Bretagne avec un éventail
            varié de plats, des fruits de mer frais aux pâtisseries artisanales,
            en passant par les alccols locaux.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
