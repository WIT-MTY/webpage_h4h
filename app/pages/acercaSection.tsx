import React from "react";
import Section from "../componentes/general/Section";

const AcercaSection = () => {
    return (
        <Section id="acerca" backgroundColor="bg-background-figma-rosa" className="h-full flex flex-col items-center justify-center">
        <p className="text-secundario-morado text-2xl">Sección 1</p>
        <h2 className="font-questrial text-4xl font-bold text-principal-rosa">Acerca de</h2>
        <h1 className="font-high-cruiser text-6xl text-morado-700">Otra fuente [High Cruiser] AA Aa aa 67</h1>
        <p> Subtitulos [Questrial] (por default)</p>
      </Section>
    )
}

export default AcercaSection;