import React from "react";
import Section from "../componentes/general/Section";

const AcercaSection = () => {
    return (
        <Section id="acerca" className="h-full flex items-center justify-center relative overflow-hidden" bg_color="linear-gradient(180deg, #761450, #5F1040)" noPadding={true}>
            {/* Content Container */}
            <div className="relative z-10 w-full pl-8 md:pl-16 pr-16 flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Text Content */}
                <div className="w-full lg:max-w-[min(100%,52rem)] space-y-8 text-left pl-8 md:pl-12 lg:pl-16">
                    <h1 className="font-high-cruiser text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide leading-tight">
                        <span className="whitespace-nowrap">acerca de</span>
                        <br />
                        nosotras
                    </h1>

                    <div className="max-w-2xl xl:max-w-3xl space-y-8 text-white font-montserrat font-normal">
                        <p className="max-w-[52ch] sm:max-w-[56ch] md:max-w-[58ch] text-lg md:text-xl lg:text-2xl leading-snug tracking-wide text-pretty">
                            Somos un equipo de líderes con el propósito de crear un espacio seguro e inclusivo donde mujeres en tech puedan aprender, experimentar, y mostrar su talento, impulsando su confianza, creatividad y liderazgo dentro del ecosistema tecnológico.
                        </p>

                        <p className="max-w-[52ch] sm:max-w-[56ch] md:max-w-[58ch] text-lg md:text-xl lg:text-2xl leading-snug tracking-wide text-pretty">
                            Creando a Hack4Her, el primer hackaton exclusivamente de mujeres en México.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AcercaSection;