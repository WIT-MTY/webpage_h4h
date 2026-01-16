// app/header.tsx
"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-secundario-rosa-300 shadow-md z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">


          <div className="text-2xl font-bold">Logo</div>

          <div className="space-x-6">
            
            <Link href="#acerca" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Acerca de
            </Link>

            <Link href="#desafios" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Desafíos
            </Link>

            <Link href="#calendario" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Calendario
            </Link>

            <Link href="#colaboradores" className="hover:text-secundario-morado-700 transition-colors"
              scroll={true}>
              Colaboradores
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