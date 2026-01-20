// app/header.tsx
"use client";
import React from "react";
import Link from "next/link";
import Logo from "../general/Logo";
import LogoWIT from "../general/LogoWIT";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-principal-morado-50 shadow-md z-50">
      
      <nav className="container mx-auto px-4 py-3">
        
        <div className="flex justify-between items-center ">
          
          <div className="flex space-x-15 items-center">
            <Logo image_logo="/images/h4h_logos/logo_h4h_corto.svg" w_logo="w-30"/>
            <LogoWIT w_logo="w-20"/>
          </div>

          <div className="space-x-4">
            <Link href="#acerca" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Acerca de
            </Link>

            <Link href="#colaboradores" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Colaborador
            </Link>

            <Link href="#ganadoras" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Hall of fame
            </Link>

            <Link href="#faq" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              FAQ
            </Link>

            <Link href="#ubicacion" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Ubicación
            </Link>

            <Link href="#calendario" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Calendario
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