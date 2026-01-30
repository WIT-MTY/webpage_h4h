import React from "react";
import Section from "../componentes/general/Section";
import Image from "next/image";

const HomeSection = () => {
    return (
        <Section id="home" backgroundColor="bg-secundario-rosa-claro-300" className="h-full flex flex-col items-center justify-center">
       <h1 className="font-high-cruiser text-6xl">
          <span className="text-principal-morado">HACK</span>
          <span className="text-principal-rosa">4</span>
          <span className="text-principal-morado">HER</span>
          <span className="text-principal-rosa"> 2026</span>
        </h1> 
        <h2 className="font-questrial text-4xl font-bold text-neutro-negro">14-15 de marzo, 2026 · Evento presencial · Tec de Monterrey, Monterrey, MX</h2>
        
        <button className="mt-6 bg-principal-rosa text-white px-12 py-5 rounded-xl font-bold text-3xl hover:bg-principal-rosa-800 transition">
        ¡Regístrate ahora!
        </button> 
                
                
                <div className="absolute top-18 left-0">
                    <Image
                        src="/images/home_section/Vector1.svg"
                        alt="Decorative vector"
                        width={300}
                        height={300}
                        className="block"
                    />
                </div>
                <div className="absolute bottom-0 left-0">
                    <Image
                        src="/images/home_section/Vector2.svg"
                        alt="Decorative vector"
                        width={1500}
                        height={300}
                        className="block"
                    />
                </div>
      </Section>
    )
}

export default HomeSection;