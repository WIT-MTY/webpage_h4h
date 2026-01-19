// app/header.tsx
"use client";
import React from "react";
import Link from "next/link";
import Logo from "../general/Logo";

const Header = () => {
  return (
    <header className="fixed top-0 w-full shadow-md z-50"
      style={{
        background: 'linear-gradient(180deg, #A72A8E 0%, #A12989 33%, #411037 100%)'
      }}>
      <nav className="px-6 py-3 font-montserrat font-semibold text-base">
        <div className="flex justify-between items-center">

          <Logo image_logo="/images/wit_logos/logo_wit_blanco.png"/>
          
          <div className="space-x-6 pr-[120px]">
            <Link href="#acerca" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Acerca de
            </Link>

            <Link href="#halloffame" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Salón De La Fama 
            </Link>

            <Link href="#calendario" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Calendario
            </Link>

            <Link href="#patrocinador" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Patrocinador
            </Link>

            <Link href="#faq" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              FAQ
            </Link>

            <Link href="#equipo" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Equipo
            </Link>

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