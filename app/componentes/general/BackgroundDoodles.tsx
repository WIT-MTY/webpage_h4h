'use client'

import React from "react";

interface BackgroundDecorProps {
    mouseParallax?: boolean;
    mousePosition?: { x: number; y: number };
    className?: string;
}
const BackgroundDecor: React.FC<BackgroundDecorProps> = ({
    mouseParallax = false,
    mousePosition = { x: 0, y: 0 },
    className = "",
}) => {
const px = mouseParallax ? mousePosition.x : 0;
const py = mouseParallax ? mousePosition.y : 0;

return (
    <>
      {/* ── Doodle grande superior izquierda ── */}
    <div
        className={`absolute top-0 left-0 w-72 h-72 pointer-events-none figura-float-slow ${className}`}
        style={
        mouseParallax
            ? { transform: `translate(${px * 0.3}px, ${py * 0.3}px)` }
            : undefined
        }
    >
        <img
        src="/images/figuras/doodle_rosa.svg"
        alt=""
        className="w-full h-full object-contain"
        />
    </div>

      {/* ── Doodle grande superior derecha ── */}
    <div
        className={`absolute top-0 right-0 w-80 h-80 pointer-events-none figura-float-medium ${className}`}
        style={
        mouseParallax
            ? { transform: `scaleX(-1) translate(${-px * 0.2}px, ${py * 0.2}px)` }
            : { transform: "scaleX(-1)" }
        }
    >
        <img
        src="/images/figuras/doodle_fuerte.svg"
        alt=""
        className="w-full h-full object-contain"
        />
    </div>

      {/* ── Estrella superior centro-izquierda ── */}
    <div
        className={`absolute top-24 left-1/4 w-16 h-16 pointer-events-none figura-spin-slow ${className}`}
    >
        <img
        src="/images/figuras/estrella.svg"
        alt=""
        className="w-full h-full object-contain"
        />
    </div>

      {/* ── Estrella derecha media ── */}
    <div
        className={`absolute top-1/3 right-16 w-12 h-12 pointer-events-none figura-spin-reverse ${className}`}
    >
        <img
        src="/images/figuras/estrella.svg"
        alt=""
        className="w-full h-full object-contain"
        />
    </div>

      {/* ── Sol inferior izquierda ── */}
    <div
        className={`absolute bottom-20 left-8 w-24 h-24 pointer-events-none figura-spin-slow ${className}`}
    >
        <img
        src="/images/figuras/sol.svg"
        alt=""
        className="w-full h-full object-contain"
        />
    </div>

      {/* ── Sol superior derecha ── */}
    <div
        className={`absolute top-10 right-1/3 w-10 h-10 pointer-events-none figura-spin-reverse ${className}`}
    >
        <img
        src="/images/figuras/sol.svg"
        alt=""
        className="w-full h-full object-contain"
        />
    </div>

      {/* ── Doodle inferior derecha ── */}
    <div
        className={`absolute bottom-0 right-0 w-64 h-64 pointer-events-none figura-float-medium ${className}`}
    >
        <img
        src="/images/figuras/doodle_rosa.svg"
        alt=""
        className="w-full h-full object-contain"
        style={{ transform: "rotate(180deg)" }}
        />
    </div>

      {/* ── Estrella inferior centro ── */}
    <div
        className={`absolute bottom-12 left-1/2 w-8 h-8 pointer-events-none figura-spin-slow ${className}`}
        style={{ marginLeft: "-1rem" }}
    >
        <img
        src="/images/figuras/estrella.svg"
        alt=""
        className="w-full h-full object-contain"
        />
    </div>

      {/* ── Keyframes y clases de animación ── */}
    <style jsx>{`
        @keyframes floatSlow {
        0%,
        100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-18px);
        }
        }
        @keyframes floatMedium {
        0%,
        100% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-12px) rotate(3deg);
        }
        }
        @keyframes spinSlow {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
        }
        @keyframes spinReverse {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
        }

        .figura-float-slow {
        animation: floatSlow 7s ease-in-out infinite;
        }
        .figura-float-medium {
        animation: floatMedium 5s ease-in-out infinite;
        }
        .figura-spin-slow {
        animation: spinSlow 12s linear infinite;
        }
        .figura-spin-reverse {
        animation: spinReverse 9s linear infinite;
        }
    `}</style>
    </>
);
};

export default BackgroundDecor;