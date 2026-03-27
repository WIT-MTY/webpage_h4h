import React from "react";
import Section from "../componentes/general/Section";
import BackgroundDecor from "../componentes/general/BackgroundDoodles";

const AcercaSection = () => {
    return (
        <Section id="acerca" className="h-full flex items-center justify-center relative overflow-x-hidden" bg_color="linear-gradient(180deg, #761450, #5F1040)" noPadding={true}>
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <BackgroundDecor />
                <style jsx>{`
                    /* Ocultar la estrella superior que está en el título */
                    div :global(.absolute.top-24) {
                        display: none;
                    }
                `}</style>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-full px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 overflow-x-hidden">
                {/* Text Content */}
                <div className="w-full lg:max-w-[min(100%,52rem)] space-y-6 md:space-y-8 text-left">
                    <h1 className="font-high-cruiser text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide leading-tight max-w-full">
                        <span className="inline-block">acerca de</span>
                        <br />
                        nosotras
                    </h1>

                    <div className="max-w-full space-y-6 md:space-y-8 text-white font-montserrat font-normal">
                        <p className="max-w-[90vw] sm:max-w-[52ch] md:max-w-[56ch] lg:max-w-[58ch] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide text-pretty">
                            Somos un equipo de líderes con el propósito de crear un espacio seguro e inclusivo donde mujeres en tech puedan aprender, experimentar, y mostrar su talento, impulsando su confianza, creatividad y liderazgo dentro del ecosistema tecnológico.
                        </p>

                        <p className="max-w-[90vw] sm:max-w-[52ch] md:max-w-[56ch] lg:max-w-[58ch] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide text-pretty">
                            Creando a Hack4Her, el primer hackaton exclusivamente de mujeres en México.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AcercaSection;