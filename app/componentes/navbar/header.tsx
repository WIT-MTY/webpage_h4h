// app/header.tsx
"use client";
import React from "react";
import Link from "next/link";
import Logo from "../general/Logo";
import LogoWIT from "../general/LogoWIT";

const Header = () => {
  return (
    <header className="fixed top-0 w-full shadow-md z-50"
      style={{
        background: 'linear-gradient(180deg, #A72A8E 0%, #A12989 33%, #411037 100%)'
      }}>
        
      <nav className="px-6 py-3 font-montserrat font-semibold text-base text-white">
        <div className="flex justify-between items-centers">

          <Logo image_logo="/images/wit_logos/logo_wit_blanco.png" w_logo="w-40"/>
          
          <div className="space-x-6 pr-[120px]">
            {/* -- 1 -- */}
            <Link href="#home" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Home
            </Link>

            {/* -- 2 -- */}
            <Link href="#acerca" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Acerca de
            </Link>

            {/* -- 3 -- */}
            {/*}
            <Link href="#quees" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              ¿Qué es H4hH?
            </Link> */}

            {/* -- 4 -- */}
            <Link href="#ubicacion" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Ubicación
            </Link> 

            {/* -- 5 -- */}
            <Link href="#calendario" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Calendario
            </Link>

            {/* -- 6 -- */}
            {/*}
            <Link href="#retos" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Retos
            </Link> */}

            {/* -- 7 -- */}
            <Link href="#equipo" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Equipo
            </Link>

            {/* -- 8 -- */}
            <Link href="#patrocinador" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Colaborador
            </Link>

            {/* -- 9 -- */}
            {/*}
            <Link href="#galeria" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Galería
            </Link> */}

            {/* -- 10 -- */}
            <Link href="#faq" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              FAQ
            </Link>

            {/* -- 10 -- */}
            <Link href="#contactanos" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Contáctanos
            </Link>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;