import React from "react";
import Section from "../componentes/general/Section";
import AdaGuia from "../componentes/general/AdaGuia";


const AcercaSection = () => {
    return (
        <Section id="acerca" className="h-full flex flex-col items-center justify-center" bg_color="linear-gradient(180deg, #761450, #5F1040)">
        <p className="text-secundario-morado text-2xl">Sección 2</p>
        <h2 className="font-questrial text-4xl font-bold text-principal-rosa">Acerca de</h2>
        <h1 className="font-high-cruiser text-6xl text-morado-700">Otra fuente [High Cruiser] AA Aa aa</h1>
        <p> Subtitulos [Questrial] (por default)</p>
        <AdaGuia w_ada="w-200"/>
      </Section>
    )
}

export default AcercaSection;