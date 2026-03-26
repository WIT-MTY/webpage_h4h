import React from "react";
import Section from "../componentes/general/Section";
import Flor from "../componentes/figuras/Flor";
import Sol from "../componentes/figuras/Sol";
import Estrella from "../componentes/figuras/Estrella";
import DoodleFuerte from "../componentes/figuras/DoodleFuerte";
import DoodleRosa from "../componentes/figuras/DoodleRosa";

const PatrocinadorSection = () => {
  return (
    <Section id="patrocinador" bg_color="#4A0C32" overflow="overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Estrella top_position="4%" left_position="20%" width="w-27"/>
        <Flor top_position="77%" left_position="20%" width="w-27"/>
        <Sol top_position="50%" left_position="52%" width="w-53"/>
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 md:px-6 mb-8 md:mb-12 relative">
        <h1 className="font-high-cruiser text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-white text-center mb-6 z-10">
          COLABORADOR
        </h1>
      </div>

      <div className="flex justify-center w-full z-10 relative">
        <div className="max-w-4xl px-6 md:px-8 text-center space-y-6 mb-12 z-10 relative">
          <p className="text-xl md:text-2xl lg:text-2xl text-white leading-relaxed font-light">
            Arca Continental, uno de los embotelladores de Coca-Cola más grandes del mundo con presencia en 5 países.
          </p>
          <p className="text-xl md:text-2xl lg:text-2xl text-white leading-relaxed font-light">
            El AC Digital Nest, es el equipo del desarrollo digital de la fuerza de ventas de Arca Continental y más de un millón de tiendas de abarrotes y pequeños comercios en Latinoamérica.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center w-full z-10 relative">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg md:max-w-xl lg:max-w-2xl p-8 md:p-10 hover:scale-105 transition-transform duration-300 mx-auto">
          <img 
            src="/images/colaborador_images/ACDigitalNest.png" 
            alt="Logo de Arca Continental"
            className="w-full h-auto object-contain"
            />
        </div>
      </div>
      
    </Section>
  )
}

export default PatrocinadorSection;