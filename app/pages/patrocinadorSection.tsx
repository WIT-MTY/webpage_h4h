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
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-4/5 md:max-w-4/5 lg:max-w-9/10 p-8 md:p-10 hover:scale-105 transition-transform duration-300 mx-auto text-center space-y-4">
          <img 
            src="/images/colaborador_images/AC_100aniv_Digital_Nest_logo.png" 
            alt="Logo de Arca Continental"
            className="h-auto max-w-4/5 mx-auto"
          />
          <p className="text-xs md:text-xs lg:text-xl leading-relaxed font-light">
            Por segundo año consecutivo, la colaboración entre Arca Continental y el Tecnológico de Monterrey hace posible Hack4Her. Quienes destaquen en el reto podrán abrir la puerta a futuras oportunidades y formar parte de proyectos dentro del Digital Nest de Arca Continental.
          </p>

          <p className="text-xs md:text-xs lg:text-xl leading-relaxed font-light">
            Uno de los embotelladores de Coca-Cola más importantes del mundo, que en 2026 celebra 100 años como el primer embotellador de Coca-Cola en México. Cuenta con operaciones en cinco países y atiende a más de 130 millones de consumidores.
          </p>

          <p className="text-xs md:text-xs lg:text-xl leading-relaxed font-light">
            A través de su Digital Nest, Arca Continental integra expertos en tecnología digital, ciencia de datos y estrategia comercial para desarrollar soluciones dirigidas a clientes y eficiencia operativa.
          </p>
        </div>
      </div>
      
    </Section>
  )
}

export default PatrocinadorSection;