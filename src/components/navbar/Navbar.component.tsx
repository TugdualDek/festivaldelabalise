"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactPopup from "../contact/Contact.component";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState("");
  const [activeSection, setActiveSection] = useState("");

  const anchors = [
    { id: "", label: "Accueil" },
    { id: "a-propos", label: "A propos" },
    { id: "programme", label: "Programme" },
  ];

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    // Gérer la première section (Accueil)
    if (scrollPosition < 100) {
      // Vous pouvez ajuster cette valeur selon vos besoins
      setActiveSection("");
      return;
    }

    for (const anchor of anchors) {
      if (anchor.id === "") continue; // Ignorer la section Accueil dans cette boucle
      const element = document.getElementById(anchor.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop - 100 &&
          scrollPosition < offsetTop + offsetHeight - 100
        ) {
          setActiveSection(anchor.id);
          return;
        }
      }
    }
  }, [anchors]); // Ajoutez les dépendances nécessaires ici

  const NavAnchor = ({ id, label }: { id: string; label: string }) => (
    <a
      href={id ? `#${id}` : "#"}
      onClick={() => {
        setIsOpen(false);
      }}
      className={`block w-full px-4 py-2 text-center transition-colors duration-200 ${
        (id === "" && activeSection === "") || activeSection === id
          ? "bg-[var(--color-red)] text-white"
          : "hover:bg-[var(--color-red)] hover:bg-opacity-20 hover:text-white"
      }`}
    >
      {label}
    </a>
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial pour définir la section active au chargement
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <nav className="w-4/5 bg-[var(--color-blue)] backdrop-blur-sm shadow-md rounded-lg my-4">
        <div className="flex justify-between items-center py-4 px-4 md:px-6">
          <Button
            variant="ghost"
            className="md:hidden p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                {anchors.slice(0, 2).map((anchor) => (
                  <NavigationMenuItem key={anchor.id || "section1"}>
                    <NavAnchor {...anchor} />
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Image
            src="/logo.svg"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "50px" }}
          />

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                {anchors.slice(2).map((anchor) => (
                  <NavigationMenuItem key={anchor.id}>
                    <NavAnchor {...anchor} />
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <ContactPopup>
                    <Button variant="ghost" className="px-4 py-2">
                      Contact
                    </Button>
                  </ContactPopup>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="md:hidden w-6"></div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            {anchors.map((anchor) => (
              <NavAnchor key={anchor.id || "section1"} {...anchor} />
            ))}
            <ContactPopup>
              <Button
                variant="ghost"
                className="block w-full px-4 py-2 text-center transition-colors duration-200 hover:bg-[var(--color-red)] hover:bg-opacity-20 hover:text-white"
              >
                Contact
              </Button>
            </ContactPopup>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
