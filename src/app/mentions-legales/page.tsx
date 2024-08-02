import Footer from "@/components/footer/Footer.component";
import Navbar from "@/components/navbar/Navbar.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales - Festival de la Balise",
  description: "Mentions légales du Festival de la Balise",
};

const MentionsLegales = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Mentions Légales
        </h1>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          1. Éditeur du site
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Le site est édité par Tugdual Audren de Kerdrel, étudiant à l'ISEP,
          contact@tugdual.com.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          2. Hébergeur
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <p>
            Le site est hébergé par Tugdual Audren de Kerdrel chez Scaleway, une
            entreprise française spécialisée dans l'hébergement cloud.
          </p>
          <ul>
            <li>
              <strong>Nom de l'hébergeur</strong> : Scaleway
            </li>
            <li>
              <strong>Adresse</strong> : 8 Rue de la Ville L'Évêque, 75008
              Paris, France
            </li>
            <li>
              <strong>Site web</strong> :{" "}
              <a
                href="https://www.scaleway.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.scaleway.com
              </a>
            </li>
          </ul>
          <p>
            Scaleway fournit des services d'hébergement fiables et sécurisés,
            adaptés aux besoins des entreprises et des développeurs.
          </p>
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          3. Propriété intellectuelle
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Tous les contenus présents sur ce site (textes, images, logos, etc.)
          sont protégés par le droit d'auteur. Toute reproduction est interdite
          sans autorisation préalable.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          4. Données personnelles
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Conformément à la loi Informatique et Libertés, vous disposez d'un
          droit d'accès, de modification et de suppression des données vous
          concernant.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          5. Contact
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Pour toute question concernant ces mentions légales, vous pouvez nous
          contacter à l'adresse e-mail suivante : contact@festivaldelabalise.fr.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default MentionsLegales;
