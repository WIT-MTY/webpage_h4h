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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home", "inicio", "acerca", "quees", "ubicacion", "cronograma", 
        "retos", "equipo", "patrocinador", "galeria", "faq", "contactanos"
      ];

      const scrollPosition = window.scrollY + 200; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight
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
        
        <div className="hidden lg:block z-50"> {/* logo no visible en celular */}
          {isHome && <Logo image_logo="/images/wit_logos/logo_wit_blanco.png" w_logo="w-40" />}
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white focus:outline-none z-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        <div 
          className={`${isMenuOpen ? "flex" : "hidden"}
            lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:p-6 lg:py-1 
            lg:rounded-r-4xl lg:rounded-s-4xl lg:transition-all lg:duration-300
            fixed left-0 mx-20 p-6 rounded-2xl shadow-lg
            flex-col items-center space-y-5
            lg:flex-row lg:space-y-0 lg:space-x-6 lg:mx-0 lg:top-auto lg:shadow-none`}
            
            style={{backgroundColor: isHome && !isMenuOpen ? "transparent" : "#703D5C"}}
        >
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-6">
            {!isHome && (
            <Link href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors" scroll={true}>Inicio</Link>
            )}
            
            <Link href="#acerca" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors"> Acerca </Link>
            <Link href="#ubicacion" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors"> Ubicación </Link>
            <Link href="#calendario" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors"> Cronograma </Link>
            <Link href="#equipo" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors"> Equipo </Link>
            <Link href="#patrocinador" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors"> Colaborador </Link>
            <Link href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors"> FAQ </Link>
            <Link href="#contactanos" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors"> Contáctanos </Link>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;