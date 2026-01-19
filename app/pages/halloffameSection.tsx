import React from "react";
import Section from "../componentes/general/Section";

const HallOfFameSection = () => {
    return (
        <Section id="halloffame" backgroundColor="bg-secundario-rosa-100" className="h-full flex flex-col items-center justify-center">
        <p className="text-secundario-morado text-2xl">Sección 2</p>
        <h2 className="text-3xl font-bold mt-4">Desafios</h2>
      </Section>
    )
}

export default HallOfFameSection;