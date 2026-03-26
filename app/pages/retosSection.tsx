"use client";
import React from "react";
import Section from "../componentes/general/Section";
import RetoCard from "../componentes/reto_comp/RetoCard";
import { useRetos } from "../hooks/utils/useRetos";
import BackgroundDecor from "../componentes/general/BackgroundDoodles";

const RetosSection = () => {
    const { retos, setRetos } = useRetos();

    return (
        <Section id="retos" className="flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-6" bg_color="#4A0C32" overflow="overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <BackgroundDecor />
                <style jsx>{`
                    /* Ocultar el sol superior derecha que está cerca del título */
                    div :global(.absolute.top-10.right-1\/3) {
                        display: none;
                    }
                `}</style>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-[2vw] py-[2vh]">
                {/* Title */}
                <h1 className="font-high-cruiser text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center mb-6 uppercase tracking-wider px-2">
                    RETOS
                </h1>

                {/* Grid of Reto Cards - totalmente escalable con viewport */}
                <div className="relative">
                    {/* Panel Muy Pronto */}
                    <div
                        className="absolute -inset-4 rounded-2xl flex flex-col items-center justify-center gap-3 z-20"
                        style={{
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                            background: "rgba(74, 12, 50, 0.72)",
                            cursor: "default",
                        }}
                    >
                        <svg className="w-10 h-10" fill="none" stroke="#ff2871" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M16.5 10.5V7a4.5 4.5 0 10-9 0v3.5M5 10.5h14a1 1 0 011 1V20a1 1 0 01-1 1H5a1 1 0 01-1-1v-8.5a1 1 0 011-1z" />
                        </svg>
                        <p className="font-high-cruiser text-neutro-blanco text-4xl tracking-widest uppercase">
                            Muy Pronto
                        </p>
                        <p className="font-montserrat text-neutro-blanco text-sm opacity-70 tracking-wider uppercase">
                            ¡Vuelve más tarde!
                        </p>
                    </div>
                    {/* Fin Panel Muy Pronto */}

                    <div className="grid grid-cols-2 gap-[min(2vw,1.5vh,1rem)] w-[min(85vw,70vh,600px)] mx-auto">
                        {retos.map((reto) => (
                            <RetoCard key={reto.id} title={reto.title} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default RetosSection;