import React from "react";
import Section from "../componentes/general/Section";
import BackgroundDecor from "../componentes/general/BackgroundDoodles";

const AcercaSection = () => {
    return (
        <Section id="acerca" className="h-full flex items-start justify-start relative overflow-x-hidden pt-12 md:pt-12" bg_color="linear-gradient(180deg, #761450, #5F1040)" noPadding={true} minHeightViewport={true}>
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
            <div className="relative z-10 w-full max-w-full pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16 flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 overflow-x-hidden">
                {/* Text Content */}
                <div className="w-full lg:max-w-[min(100%,52rem)] space-y-6 md:space-y-8 text-left">
                    <h1 className="font-high-cruiser text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide leading-tight max-w-full">
                        <span className="inline-block">acerca de</span>
                        <br />
                        nosotras
                    </h1>

                    <div className="max-w-full space-y-6 md:space-y-8">
                        <p className="text-white font-montserrat font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide text-pretty max-w-[37ch] text-left">
                            Somos un equipo de líderes con el propósito de crear un espacio seguro e inclusivo donde mujeres en tech puedan aprender, experimentar y mostrar su talento, impulsando su confianza, creatividad y liderazgo dentro del ecosistema tecnológico.
                        </p>

                        <p className="text-white font-montserrat font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide text-pretty max-w-[38ch] text-left">
                            Creando Hack4Her, el primer hackathon en México dirigido a mujeres y actualmente en su segunda edición.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AcercaSection;