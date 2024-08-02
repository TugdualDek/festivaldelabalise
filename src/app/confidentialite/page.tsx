import Footer from "@/components/footer/Footer.component";
import Navbar from "@/components/navbar/Navbar.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Festival de la Balise",
  description: "Politique de confidentialité du Festival de la Balise",
};

const Confidentialite = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Politique de Confidentialité
        </h1>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          1. Collecte d&apos;informations
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Nous collectons les informations suivantes lors de l&apos;inscription
          au festival :
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Ces informations sont nécessaires pour la gestion des inscriptions et
          la communication avec les participants.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          2. Utilisation des informations
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Les informations collectées sont utilisées pour :
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Gérer les inscriptions au festival</li>
          <li>
            Communiquer des informations importantes concernant l&apos;événement
          </li>
          <li>
            Répondre aux demandes de renseignements via le formulaire de contact
          </li>
        </ul>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          3. Protection des données
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Nous mettons en place des mesures de sécurité pour protéger vos
          informations personnelles. Vos données ne sont jamais vendues ou
          partagées avec des tiers non autorisés.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          4. Droits des utilisateurs
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Vous avez le droit d&apos;accéder, de modifier ou de supprimer vos
          informations personnelles. Pour exercer ces droits, veuillez nous
          contacter via le formulaire de contact sur notre site.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          5. Cookies
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Notre site n&apos;utilise aucon cookie pour vous tracker ou collecter
          des informations personnelles.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          6. Modifications de la politique de confidentialité
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Les changements seront publiés sur
          cette page.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          7. Contact
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Pour toute question concernant notre politique de confidentialité,
          veuillez nous contacter via le formulaire sur notre site.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Confidentialite;
