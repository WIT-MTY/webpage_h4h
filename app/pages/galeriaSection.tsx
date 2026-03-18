import React from "react";
import Section from "../componentes/general/Section";
import CarrouselFoto from "../componentes/general/CarrouselFoto";
import Estrella from "../componentes/figuras/Estrella";
import Flor from "../componentes/figuras/Flor";
import DoodleFuerte from "../componentes/figuras/DoodleFuerte";
import DoodleRosa from "../componentes/figuras/DoodleRosa";
import Sol from "../componentes/figuras/Sol";

const GaleriaSection = () => {
    return (
        <Section id="galeria" bg_color="#4A0C32">

            <div className="absolute inset-0 z-0">
                <Estrella top_position="6%" left_position="23%" width="w-27"/>
                <Flor top_position="4%" left_position="70%" width="w-27"/>
                <DoodleFuerte top_position="17%" left_position="7%" rotation="0" width="w-33"/> 
                <Sol top_position="2%" left_position="7%" width="w-27"/>
            </div>

            <div className="text-center max-w-4xl mx-auto px-4 md:px-6 mb-8 md:mb-12 relative">
                <div className="text-center max-w-4xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
                    <h1 className="font-high-cruiser text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center mb-6 z-10">
                        GALERÍA
                    </h1>
                </div>
                <p className="text-white text-lg md:text-xl lg:text-2xl mb-2 leading-relaxed">¡En Hack4Her nos comprometemos a que nunca falte la diversión!</p>
                <p className="text-white text-lg md:text-xl lg:text-2xl font-light opacity-90">Mira cómo se vivió la edición de Hack4Her 2025</p>
            </div>

            {/* Carrusel de fotos */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <CarrouselFoto />
            </div>

        </Section>
    )
}

export default GaleriaSection;