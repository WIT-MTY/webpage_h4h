"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../general/Logo";

interface HeaderProps {
    onSectionChange?: (section: string) => void; 
}

const Header = ({ onSectionChange }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const isHome = activeSection === "home";

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "acerca",
        "quees",
        "ubicacion",
        "calendario",
        "retos",
        "equipo",
        "patrocinador",
        "galeria",
        "faq",
        "contactanos"
      ];

      const scrollPosition = window.scrollY + 200; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            onSectionChange?.(section); 
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onSectionChange]);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      <nav className="px-6 py-3 flex font-montserrat font-semibold text-white">
        
        {isHome && <Logo image_logo="/images/wit_logos/logo_wit_blanco.png" w_logo="w-40" />}
        
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 p-6 py-1 rounded-r-4xl rounded-s-4xl transition-all duration-300`} 
          style={{ 
            backgroundColor: isHome ? "transparent" : "#703D5C"
          }}
        >
          <div className="space-x-6 py-6 items-center">
            {!isHome && (
              <Link href="#home" className="hover:text-secundario-morado-700 transition-colors" scroll={true}>
                Inicio
              </Link>
            )}
            
            <Link href="#acerca" className="hover:text-secundario-morado-700 transition-colors" scroll={true}>
              Acerca de
            </Link>
            <Link href="#ubicacion" className="hover:text-secundario-morado-700 transition-colors" scroll={true}>
              Ubicación
            </Link>
            <Link href="#calendario" className="hover:text-secundario-morado-700 transition-colors" scroll={true}>
              Calendario
            </Link>
            <Link href="#equipo" className="hover:text-secundario-morado-700 transition-colors" scroll={true}>
              Equipo
            </Link>
            <Link href="#patrocinador" className="hover:text-secundario-morado-700 transition-colors" scroll={true}>
              Colaborador
            </Link>
            <Link href="#faq" className="hover:text-secundario-morado-700 transition-colors" scroll={true}>
              FAQ
            </Link>
            <Link href="#contactanos" className="hover:text-secundario-morado-700 transition-colors" scroll={true}>
              Contáctanos
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;