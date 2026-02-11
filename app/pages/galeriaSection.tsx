import React from "react";
import Section from "../componentes/general/Section";

const GaleriaSection = () => {
    return (
        <Section id="galeria" className="h-full flex flex-col items-center justify-center" bg_color="#4A0C32">
        <p className="text-secundario-morado text-2xl">Sección 9</p>
        <h2 className="text-3xl font-bold mt-4">Galería</h2>
      </Section>
    )
}

export default GaleriaSection;