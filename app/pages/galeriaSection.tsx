import React from "react";
import CarrouselFoto from "../componentes/general/CarrouselFoto";
import BackgroundDecor from "../componentes/general/BackgroundDoodles";

const GaleriaSection = () => {
    return (
        <section
            id="galeria"
            className="relative min-h-screen overflow-hidden py-20"
            style={{ backgroundColor: "#4A0C32" }}
        >
            <BackgroundDecor />
            <div className="relative z-10">
                <div className="text-center max-w-4xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
                    <h1 className="font-high-cruiser text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center mb-6">
                        GALERÍA
                    </h1>
                    <p className="text-white text-lg md:text-xl lg:text-2xl mb-2 leading-relaxed">
                        ¡En Hack4Her nos comprometemos a que nunca falte la diversión!
                    </p>
                    <p className="text-white text-lg md:text-xl lg:text-2xl font-light opacity-90">
                        Mira cómo se vivió la edición de Hack4Her 2025.
                    </p>
                </div>
                {/* Carrusel de fotos*/}
                <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    <CarrouselFoto />
                </div>
            </div>

        </section>
    )
}

export default GaleriaSection;