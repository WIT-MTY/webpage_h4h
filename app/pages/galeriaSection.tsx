import React from "react";
import Section from "../componentes/general/Section";
import CarrouselFoto from "../componentes/general/CarrouselFoto";

const GaleriaSection = () => {
    return (
        <Section id="galeria" className="h-full flex flex-col items-center justify-center" bg_color="#4A0C32">
          
            {/* Contenedor de texto centrado */}
            <div className="text-center max-w-4xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
                <h1 className="font-high-cruiser text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6">
                    GALERÍA
                </h1>
                
                <p className="text-white text-lg md:text-xl lg:text-2xl mb-2 leading-relaxed">
                    ¡En Hack4Her nos comprometemos a que nunca falte la diversión!
                </p>
                
                <p className="text-white text-lg md:text-xl lg:text-2xl font-light opacity-90">
                    Mira cómo se vivió la edición de Hack4Her 2025
                </p>
            </div>

            {/* Carrusel de fotos */}
            <div className="w-full">
                <CarrouselFoto />
            </div>

        </Section>
    )
}

export default GaleriaSection;