import React from "react";
import Section from "../componentes/general/Section";
import AdaGuia from "../componentes/general/AdaGuia";

const HomeSection = () => {
    return (
        <Section id="home" className="h-full flex flex-col items-center justify-center" bg_color="linear-gradient(180deg, #AC1C75, #761450)">
        <p className="text-secundario-morado text-2xl">Sección 1</p>
        <h2 className="font-questrial text-4xl font-bold text-principal-rosa">Home</h2>
        <AdaGuia w_ada="w-200"/>
      </Section>
    )
}

export default HomeSection;