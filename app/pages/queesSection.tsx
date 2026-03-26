import React from "react";
import Section from "../componentes/general/Section";
import BackgroundDecor from "../componentes/general/BackgroundDoodles";

const QueEsSection = () => {
    return (
        <Section id="quees" className="h-full flex flex-col items-center justify-center relative overflow-hidden" bg_color="linear-gradient(180deg, #5F1040, #4A0C32)">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <BackgroundDecor />
            </div>

            {/* Centered Title */}
            <div className="relative z-10 w-full text-center mb-12 -mt-8">
                <h1 className="font-high-cruiser text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase">
                    <div className="leading-none whitespace-pre">
                        <span className="font-big-shoulders font-normal">   ¿</span>qué   es     </div>
                    <div className="-mt-20 md:-mt-24 lg:-mt-32 leading-none">
                         hack<span className="text-9xl md:text-[10rem] lg:text-[14rem] font-normal font-big-shoulders">4</span>her<span className="font-big-shoulders font-normal">?</span>
                    </div>
                </h1>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full pl-8 md:pl-16 pr-8 md:pr-16 flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Text Content - Right Side */}
                <div className="w-full lg:w-5/6 space-y-8 text-right ml-auto">
                    <p className="text-white font-montserrat font-normal text-xl md:text-2xl lg:text-3xl leading-snug max-w-[42ch] sm:max-w-[45ch] md:max-w-[48ch] ml-auto">
                        Somos un hackathon gratuito de 24 horas, organizado por y para mujeres estudiantes que te invita a proponer soluciones innovadoras a desafíos reales, participar en talleres dinámicos y conectar con una comunidad diversa de profesionales de la industria.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default QueEsSection;