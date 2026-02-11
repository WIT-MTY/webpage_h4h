import React from "react";
import Section from "../componentes/general/Section";

const QueEsSection = () => {
    return (
        <Section id="quees" className="h-full flex flex-col items-center justify-center" bg_color="linear-gradient(180deg, #5F1040, #4A0C32)">
        <p className="text-secundario-morado text-2xl">Sección 3</p>
        <h2 className="text-3xl font-bold mt-4">¿Qué es H4H?</h2>
      </Section>
    )
}

export default QueEsSection;