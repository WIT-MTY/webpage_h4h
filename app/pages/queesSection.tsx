import React from "react";
import Section from "../componentes/general/Section";
import BackgroundDecor from "../componentes/general/BackgroundDoodles";

const QueEsSection = () => {
    return (
        <Section id="quees" className="h-full flex flex-col items-center justify-center relative" bg_color="linear-gradient(180deg, #5F1040, #4A0C32)" overflow="overflow-x-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <BackgroundDecor />
            </div>

            {/* Centered Title */}
            <div className="relative z-10 w-full text-center mb-12 -mt-8 px-4" style={{ maxWidth: '100vw', overflow: 'hidden' }}>
                <h1 className="font-high-cruiser text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase" style={{ maxWidth: '100%' }}>
                    <div className="leading-none whitespace-pre" style={{ transform: 'scale(min(1, calc(100vw / 800px)))', transformOrigin: 'center', display: 'inline-block' }}>
                        <span className="font-big-shoulders font-normal">   ¿</span>qué   es     </div>
                    <div className="-mt-20 md:-mt-24 lg:-mt-32 leading-none" style={{ transform: 'scale(min(1, calc(100vw / 900px)))', transformOrigin: 'center', display: 'inline-block' }}>
                         hack<span className="text-9xl md:text-[10rem] lg:text-[14rem] font-normal font-big-shoulders">4</span>her<span className="font-big-shoulders font-normal">?</span>
                    </div>
                </h1>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-full pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16 flex flex-col lg:flex-row items-start justify-between gap-12 overflow-x-hidden">
                {/* Text Content - Right Side */}
                <div className="w-full lg:w-5/6 space-y-8 text-right ml-auto">
                    <p className="text-white font-montserrat font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide text-pretty max-w-[44ch] ml-auto text-right">
                        Somos un hackathon gratuito de 24 horas, organizado por mujeres para impulsar el talento femenino universitario. Propón soluciones innovadoras a desafíos reales y conecta con profesionales de la industria.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default QueEsSection;