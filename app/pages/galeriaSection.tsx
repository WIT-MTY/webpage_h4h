import React from "react";
import Section from "../componentes/general/Section";
import CarrouselFoto from "../componentes/general/CarrouselFoto";

// #4A0C32
const GaleriaSection = () => {
    return (
        <Section id="galeria" className="h-full flex flex-col items-center justify-center" bg_color="#4A0C32">
          
          <div className="justify-center p-10 items-center">
            <h1 className="font-high-cruiser text-6xl text-white">GALERÍA</h1>
            <p className="text-2xl text-white">¡En Hack4Her nos comprometemos a que nunca falte la diversión!</p>
            <p className="text-2xl text-white">Mira como se vivió la edición de Hack4Her 2025</p>
          </div>

          <CarrouselFoto />
      </Section>
    )
}

export default GaleriaSection;