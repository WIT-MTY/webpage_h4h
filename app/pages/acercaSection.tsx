import React from "react";
import Section from "../componentes/general/Section";

const AcercaSection = () => {
    return (
        <Section id="acerca" className="h-full flex items-center justify-center relative overflow-hidden" bg_color="linear-gradient(180deg, #761450, #5F1040)">
            {/* Content Container */}
            <div className="relative z-10 w-full px-8 md:pl-24 md:pr-16 flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Text Content */}
                <div className="w-full lg:w-3/5 xl:w-1/2 space-y-8 text-left">
                    <h1 className="font-high-cruiser text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide leading-tight">
                        Acerca de<br />Nosotras
                    </h1>

                    <div className="space-y-6 text-white font-questrial text-xl md:text-2xl lg:text-3xl leading-relaxed">
                        <p>
                            Somos un equipo de líderes con el propósito de crear un espacio seguro e inclusivo donde mujeres en tech puedan aprender, experimentar, y mostrar su talento, impulsando su confianza, creatividad y liderazgo dentro del ecosistema tecnológico.
                        </p>

                        <p>
                            Creando a Hack4Her, el primer hackaton exclusivamente de mujeres en México.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AcercaSection;