import React from "react";
import Section from "../componentes/general/Section";

const AcercaSection = () => {
    return (
        <Section id="acerca" backgroundColor="bg-secundario-rosa-50" className="h-full flex flex-col items-center justify-center">
        <p className="text-secundario-morado text-2xl">Sección 1</p>
        <h2 className="font-questrial text-4xl font-bold text-principal-rosa">Acerca de</h2>
      </Section>
    )
}

export default AcercaSection;