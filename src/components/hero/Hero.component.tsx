import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Première case : Titre */}
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center text-[var(--color-red)]">
            Le Festival de la Balise
          </h1>
        </div>

        {/* Deuxième case : Box blanche avec ombre */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md p-6 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold">Dates</h3>
                  <p className="text-sm text-gray-600">23 - 25 Aout 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold">Lieu</h3>
                  <p className="text-sm text-gray-600">Lanildut, Bretagne</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Troisième case : Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/balise_lieu.jpg"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "17rem" }}
            className="rounded-lg"
          />
        </div>

        {/* Quatrième case : Sous-titre */}
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-center text-[var(--color-green)]">
            Plongez dans l'univers captivant du Festival de la Balise, une
            célébration de l'art, de la musique et du riche patrimoine culturel
            de Lanildut, en Bretagne.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
