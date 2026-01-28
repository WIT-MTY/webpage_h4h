import React from "react";
import Section from "../componentes/general/Section";

const PatrocinadorSection = () => {
  return (
    <Section id="patrocinador" backgroundColor="bg-secundario-rosa-300" className="h-full flex items-center justify-center p-4 relative overflow-hidden">
  
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-10 left-8 md:top-20 md:left-40">
          <img 
            src="images/colaborador_page/polaroid_colb_1.svg" 
            alt="colaborador" 
            className="w-80 h-80 md:w-80 md:h-80 object-contain opacity-100 animate-swing-rotate"
          />
        </div>
    
        <div className="absolute top-12 right-8 md:top-24 md:right-20">
          <img 
            src="images/colaborador_page/polaroid_colb_2.svg" 
            alt="colaborador" 
            className="w-80 h-80 md:w-80 md:h-80 object-contain transform -rotate-12 opacity-100"
          />
        </div>
    
        <div className="absolute bottom-1/8 left-4 md:left-20">
          <img 
            src="images/colaborador_page/polaroid_colb_3.svg" 
            alt="colaborador" 
            className="w-80 h-80 md:w-80 md:h-80 object-contain transform -rotate-20 opacity-100"
          />
        </div>
    
        <div className="absolute bottom-1/8 right-4 md:right-40">
          <img 
            src="images/colaborador_page/polaroid_colb_4.svg" 
            alt="colaborador" 
            className="w-80 h-80 md:w-80 md:h-80 object-contain transform rotate-8 opacity-100"
          />
        </div>
      </div>
  
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
      
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">
            ¡Conoce a nuestro colaborador!
          </h3>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            <div className="shrink-0 w-56 md:w-64 lg:w-72">
              <img 
                src="images/arca_logo/AC Digital Nest logo color_sin fondo.png" 
                alt="AC Digital Nest Logo" 
            
              />
            </div>
        
            <div className="flex-1">
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg md:text-xl leading-relaxed">
                  Arca Continental, uno de los embotelladores de Coca-Cola más grandes del mundo con presencia en 5 países.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  El AC Digital Nest es el equipo de desarrollo digital de la fuerza de ventas de Arca Continental y más de un millón de tiendas de abarrotes y pequeños comercios en Latinoamérica.
                </p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default PatrocinadorSection;

{/*<p className="text-secundario-morado text-2xl">Sección 4</p>
        <img src="images/colaborador_page/polaroid_colb_1.svg" alt="colaborador1" className="w-50 object-contain"/>
        <img src="images/colaborador_page/polaroid_colb_2.svg" alt="colaborador2" className="w-50 object-contain"/>
        <img src="images/colaborador_page/polaroid_colb_3.svg" alt="colaborador3" className="w-50 object-contain"/>
        <h2 className="text-3xl font-bold mt-4">Colaboradores</h2> */}