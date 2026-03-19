import React from "react";
import Section from "../componentes/general/Section";

const QueEsSection = () => {
    return (
        <Section id="quees" className="h-full flex flex-col items-center justify-center relative overflow-hidden" bg_color="linear-gradient(180deg, #5F1040, #4A0C32)">
            {/* Centered Title */}
            <div className="relative z-10 w-full text-center mb-12">
                <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase">
                    ¿Qué es<br />HACK4HER?
                </h1>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full px-8 md:px-16 flex items-center justify-end">
                {/* Text Content - Right Side */}
                <div className="w-full lg:w-3/5 xl:w-1/2 text-right">
                    <p className="text-white font-questrial text-xl md:text-2xl lg:text-3xl leading-relaxed">
                        Somos un hackathon gratuito de 24 horas, organizado por y para mujeres estudiantes que te invita a proponer soluciones innovadoras a desafíos reales, participar en talleres dinámicos y conectar con una comunidad diversa de profesionales de la industria.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default QueEsSection;