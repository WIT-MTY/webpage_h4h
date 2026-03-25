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
                <h1 className="font-high-cruiser text-[min(10vw,8vh,4rem)] text-white text-center mb-[min(3vh,2rem)] uppercase tracking-wider px-2">
                    RETOS
                </h1>

                {/* Grid of Reto Cards - totalmente escalable con viewport */}
                <div className="grid grid-cols-2 gap-[min(2vw,1.5vh,1rem)] w-[min(85vw,70vh,600px)] mx-auto">
                    {retos.map((reto) => (
                        <RetoCard key={reto.id} title={reto.title} />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default RetosSection;