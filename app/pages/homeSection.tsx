import React from "react";
import Section from "../componentes/general/Section";

const HomeSection = () => {
    return (
        <Section id="home" backgroundColor="bg-secundario-morado-300" className="h-full flex flex-col items-center justify-center">
        <p className="text-secundario-morado text-2xl">Sección 0</p>
        <h2 className="font-questrial text-4xl font-bold text-principal-rosa">Home</h2>
      </Section>
    )
}

export default HomeSection;