import React from "react";
import Section from "../componentes/general/Section";

const QueEsSection = () => {
    return (
        <Section id="quees" className="h-full flex flex-col items-center justify-center relative overflow-hidden" bg_color="linear-gradient(180deg, #5F1040, #4A0C32)">
            {/* Centered Title */}
            <div className="relative z-10 w-full text-center mb-12">
                <h1 className="font-high-cruiser text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase">
                    <div className="leading-none whitespace-pre">
                        <span className="font-big-shoulders font-normal">¿</span>qué      es</div>
                    <div className="-mt-20 md:-mt-24 lg:-mt-32 leading-none">
                         hack<span className="text-9xl md:text-[10rem] lg:text-[14rem] font-normal font-big-shoulders">4</span>her<span className="font-big-shoulders font-normal">?</span>
                    </div>
                </h1>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full pl-8 md:pl-16 pr-0 flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Text Content - Right Side */}
                <div className="w-full lg:w-5/6 space-y-8 text-right ml-auto -mr-8">
                    <p className="text-white font-montserrat font-normal text-2xl md:text-3xl lg:text-4xl leading-relaxed">
                        Somos un hackathon gratuito de 24 horas, organizado por y para mujeres estudiantes que te invita a proponer soluciones innovadoras a desafíos reales, participar en talleres dinámicos y conectar con una comunidad diversa de profesionales de la industria.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default QueEsSection;