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
    "https://www.google.com/maps/dir//Arena+Borregos+%7C+Gimnasio+Deportivo+ITESM,+Tecnologico,+Distrito+Tec,+64700+Monterrey,+N.L./@25.6770048,-100.450304,3737m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x8662bfbf27fbf617:0x15b097506b6ef1db!2m2!1d-100.2873348!2d25.6506473?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D";

    return (
    <Section
    id="ubicacion"
    className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20"
    bg_color="#4A0C32"
    >
    <BackgroundDecor mouseParallax mousePosition={mousePosition} />

      {/* Wrapper centrado con mx-auto explícito */}
    <div
        className="relative z-10"
        style={{
        width: "100%",
        maxWidth: "1000px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        }}
    >
        <h2 className="font-high-cruiser text-8xl font-black text-neutro-blanco text-center mb-10 tracking-tight uppercase">
        Ubicación
        </h2>

        {/* Panel */}
        <div
        style={{
            width: "100%",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1.5px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
            borderRadius: "1.5rem",
            padding: "2.5rem",
            boxSizing: "border-box" as const,
        }}
        >
        <div
            style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
            width: "100%",
            }}
        >
            {/* ── Mapa ── */}
            <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: "relative", display: "block", width: "100%" }}
            aria-label="Dirección en Google Maps"
            >
              {/* Glow */}
            <div
                style={{
                position: "absolute",
                inset: 0,
                borderRadius: "1rem",
                backgroundColor: "#ff2871",
                filter: "blur(28px)",
                opacity: 0,
                transition: "opacity 0.5s",
                pointerEvents: "none",
                }}
            />
              {/* Ratio 4:3 */}
            <div
                style={{
                position: "relative",
                width: "100%",
                paddingBottom: "75%",
                height: 0,
                borderRadius: "1rem",
                overflow: "hidden",
                border: "3px solid rgba(255,40,113,0.6)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
            >
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.7607084489795!2d-100.31287552375936!3d25.650684777382934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629531b437f8d9%3A0x3f6f1e5e9f6e9f6e!2sTecnol%C3%B3gico%20de%20Monterrey!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                style={{
                    border: 0,
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
                title="Mapa Tecnológico de Monterrey"
                />
                {/* Label hover */}
                <div
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: "1.25rem",
                    background: "linear-gradient(to top, rgba(92,14,72,0.75) 0%, transparent 55%)",
                }}
                >
                <span
                    style={{
                    fontFamily: "var(--font-montserrat, sans-serif)",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "0.875rem",
                    backgroundColor: "#ff2871",
                    padding: "0.5rem 1.25rem",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    }}
                >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Dirección en Google Maps
                </span>
                </div>
            </div>
            </a>

            {/* ── Info ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h3
                style={{
                fontFamily: "var(--font-montserrat, sans-serif)",
                fontWeight: 900,
                color: "#fff",
                fontSize: "1.875rem",
                lineHeight: 1.3,
                margin: 0,
                }}
            >
                Tecnológico de Monterrey
            </h3>
            <p
                style={{
                fontFamily: "var(--font-questrial, sans-serif)",
                color: "#fff",
                fontSize: "1.125rem",
                lineHeight: 1.6,
                opacity: 0.9,
                margin: 0,
                }}
            >
                Arena Borregos | Gimnasio Deportivo ITESM
            </p>
            <p
                style={{
                fontFamily: "var(--font-questrial, sans-serif)",
                color: "#fff",
                fontSize: "1.125rem",
                lineHeight: 1.6,
                opacity: 0.9,
                margin: 0,
                }}
            >
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