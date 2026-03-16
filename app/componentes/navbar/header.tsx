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
        "home", "inicio", "acerca", "quees", "ubicacion", "calendario", 
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
        
        {isHome && <Logo image_logo="/images/wit_logos/logo_wit_blanco.png" w_logo="w-40" />}

        <button className="lg:hidden flex flex-col justify-center items-center w-10 h-10 " 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`bg-white h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`bg-white h-0.5 w-6 rounded-sm my-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`bg-white h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        


        <div 
          className={`
    /* Estilos para Celular (Mobile) */
    ${isMenuOpen ? "fixed inset-0 flex flex-col items-center justify-center z-40" : "hidden"}
    
    /* Estilos para Computadora (Escritorio) */
    lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:p-6 lg:py-1 
    lg:rounded-r-4xl lg:rounded-s-4xl lg:transition-all lg:duration-300
  `}
          
          style={{ 
            backgroundColor: isHome ? "transparent": (isHome ? "transparent" : "#703D5C")
          }}
        >
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-6">
            {!isHome && (
              <Link 
                href="#home" 
                className="hover:text-secundario-morado-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                scroll={true}
              >
                Inicio
              </Link>
            )}
            
            <Link href="#acerca" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors"> Acerca </Link>
            <Link href="#ubicacion" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors"> Ubicación </Link>
            <Link href="#calendario" onClick={() => setIsMenuOpen(false)} className="hover:text-secundario-morado-700 transition-colors"> Calendario </Link>
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