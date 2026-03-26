'use client'

import React from "react";

export interface FaqItem {
    pregunta: string;
    respuesta: React.ReactNode;
}

export interface FaqCardProps {
    faq: FaqItem;
    open: boolean;
    onToggle: () => void;
}
const FaqCard: React.FC<FaqCardProps> = ({ faq, open, onToggle }) => {
return (
    <div
    className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
    style={{
        background: open
        ? "rgba(255,40,113,0.18)"
        : "rgba(255,255,255,0.07)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: open
        ? "1.5px solid rgba(255,40,113,0.5)"
        : "1.5px solid rgba(255,255,255,0.12)",
        boxShadow: open
        ? "0 4px 24px rgba(255,40,113,0.2)"
        : "0 2px 12px rgba(0,0,0,0.2)",
    }}
    onClick={onToggle}
    >
    {/* Pregunta */}
    <div className="flex items-center justify-between gap-4 px-6 py-5">
        <h4 className="font-montserrat font-bold text-neutro-blanco text-base leading-snug flex-1">
        {faq.pregunta}
        </h4>
        <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
        style={{ backgroundColor: open ? "#ff2871" : "rgba(255,40,113,0.3)" }}
        >
        <svg
            className="w-4 h-4 text-neutro-blanco transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M12 5v14M5 12h14"
            />
        </svg>
        </div>
    </div>

      {/* Respuesta */}
    <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0px" }}
    >
        <div
        className="px-6 pb-5 font-questrial text-neutro-blanco text-sm leading-relaxed opacity-90"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
        <div className="pt-4">{faq.respuesta}</div>
        </div>
    </div>
    </div>
);
};
export interface FaqGridProps {
    faqs: FaqItem[];
    openIndex: number | null;
    onToggle: (index: number) => void;
}

export const FaqGrid: React.FC<FaqGridProps> = ({ faqs, openIndex, onToggle }) => {
    const col1 = faqs.filter((_, i) => i % 2 === 0);
    const col2 = faqs.filter((_, i) => i % 2 !== 0);
    return (
    <div className="grid lg:grid-cols-2 gap-4">
      {/* Columna izquierda */}
    <div className="flex flex-col gap-4">
        {col1.map((faq, i) => {
          const realIndex = i * 2;
        return (
            <FaqCard
            key={realIndex}
            faq={faq}
            open={openIndex === realIndex}
            onToggle={() => onToggle(realIndex)}
            />
        );
        })}
    </div>

      {/* Columna derecha */}
    <div className="flex flex-col gap-4">
        {col2.map((faq, i) => {
          const realIndex = i * 2 + 1;
        return (
            <FaqCard
            key={realIndex}
            faq={faq}
            open={openIndex === realIndex}
            onToggle={() => onToggle(realIndex)}
            />
        );
        })}
    </div>
    </div>
);
};

export default FaqCard;