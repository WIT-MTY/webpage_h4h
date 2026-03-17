'use client'

import React, { useState, useEffect } from "react";
import Section from "../componentes/general/Section";
import BackgroundDecor from "../componentes/general/BackgroundDoodles";

const UbicacionSection = () => {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

const googleMapsUrl =
    "https://www.google.com/maps/dir//Centro+Estudiantil,+Av.+Eugenio+Garza+Sada+2501,+Tecnologico,+Distrito+Tec,+64700+Monterrey,+N.L./@25.649068,-100.2914857,981m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x8662bfb96c0b2719:0x3792e1a98d3a4b06!2m2!1d-100.2897698!2d25.6488054!3e0?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D";

return (
    <Section
    id="ubicacion"
    className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20"
    bg_color="#4A0C32"
    >
      {/* ── Fondo decorativo con parallax al mouse ── */}
    <BackgroundDecor mouseParallax mousePosition={mousePosition} />
    <div className="relative z-10 w-full max-w-5xl px-8">
        <h2 className="font-high-cruiser text-8xl font-black text-neutro-blanco text-center mb-10 tracking-tight uppercase">
        Ubicación
        </h2>

        {/*Panel con mapa*/}
        <div
        className="relative w-full rounded-3xl p-8"
        style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1.5px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
        }}
        >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/*Mapa clickeable*/}
            <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex-shrink-0"
            aria-label="Dirección en Google Maps"
            >
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{ backgroundColor: "#ff2871", filter: "blur(28px)" }}
            />

            <div
                className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                style={{
                border: "3px solid rgba(255,40,113,0.6)",
                width: "520px",
                height: "380px",
                }}
            >
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.7607084489795!2d-100.31287552375936!3d25.650684777382934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629531b437f8d9%3A0x3f6f1e5e9f6e9f6e!2sTecnol%C3%B3gico%20de%20Monterrey!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                width="520"
                height="380"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
                title="Mapa Tecnológico de Monterrey"
                />
                <div
                className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background:
                    "linear-gradient(to top, rgba(92,14,72,0.75) 0%, transparent 55%)",
                }}
                >
                <span className="font-montserrat font-bold text-neutro-blanco text-sm bg-principal-rosa px-5 py-2 rounded-full flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Dirección en Google Maps
                </span>
                </div>
            </div>
            </a>

            {/* Info de ubicacion */}
            <div className="flex flex-col gap-5 flex-1">
            <h3 className="font-montserrat font-black text-neutro-blanco text-3xl leading-snug">
                Tecnológico de Monterrey
            </h3>
            <p className="font-questrial text-neutro-blanco text-lg leading-relaxed opacity-90">
                Av. Eugenio Garza Sada 2501 Sur, Tecnológico,
                <br />
                Distrito Tec, 64700 Monterrey, N.L.
            </p>
            </div>
        </div>
        </div>
    </div>
    </Section>
);
};

export default UbicacionSection;