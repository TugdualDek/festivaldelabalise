import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full">
        <Image
          src="/wave.svg"
          alt="Wave decoration"
          layout="responsive"
          width={1920}
          height={100}
        />
      </div>
      <div className="bg-gradient-to-b from-[var(--color-blue)] to-[var(--color-blue-dark)] p-4">
        <div className="container mx-auto flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image src="/logo.svg" alt="Logo" width={100} height={50} />
            <div className="flex space-x-4 mt-4 md:mt-0">
              <SocialIcons />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white order-2 md:order-1 mt-4 md:mt-0">
              © 2024 Festival de la Balise. Tous droits réservés.
            </p>
            <div className="flex space-x-4 order-1 md:order-2">
              <Link
                href="/confidentialite"
                className="text-white hover:underline text-sm"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/mentions-legales"
                className="text-white hover:underline text-sm"
              >
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcons = () => (
  <>
    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <Facebook className="text-white hover:text-gray-300" size={24} />
    </Link>
    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <Twitter className="text-white hover:text-gray-300" size={24} />
    </Link>
    <Link
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram className="text-white hover:text-gray-300" size={24} />
    </Link>
  </>
);

export default Footer;
