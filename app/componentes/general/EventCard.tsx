'use client'

import React from "react";

export interface Evento {
    titulo: string;
    descripcion: string;
    hora: string;
    detalles: string;
    imagenes: string[];
}

export interface EventCardProps {
    evento: Evento;
    eventoId: string;
    onOpen: (eventoId: string, totalImagenes: number) => void;
}

const EventCard: React.FC<EventCardProps> = ({ evento, eventoId, onOpen }) => {
    return (
    <div
    className="cursor-pointer group"
    onClick={() => onOpen(eventoId, evento.imagenes.length)}
    >
    <div className="bg-principal-rosa hover:bg-principal-rosa-700 transition-colors duration-200 rounded-md px-4 py-2 mb-1">
        <span className="font-montserrat font-black text-neutro-blanco text-sm uppercase tracking-wider">
        {evento.titulo}
        </span>
    </div>
    <p className="font-montserrat text-neutro-blanco text-center text-xs mb-3 opacity-80">
        {evento.hora}
    </p>
    </div>
);
};
export interface EventoModalProps {
    eventoSeleccionado: string | null;
    evento: Evento | null;
    imagenActual: number;
    onClose: () => void;
}

export const EventoModal: React.FC<EventoModalProps> = ({
    eventoSeleccionado,
    evento,
    imagenActual,
    onClose,
}) => {
    if (!eventoSeleccionado || !evento) return null;
    
    return (
    <div
    className="fixed inset-0 flex items-center justify-center z-50 p-4"
    style={{ backgroundColor: "rgba(145,24,118,0.75)" }}
    onClick={onClose}
    >
    <div
        className="bg-neutro-blanco rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full relative"
        style={{ border: "4px solid #ff2871" }}
        onClick={(e) => e.stopPropagation()}
    >
        {/* Botón cerrar */}
        <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-principal-rosa hover:bg-principal-rosa-700 text-neutro-blanco rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
        aria-label="Cerrar"
        >
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
            />
        </svg>
        </button>

        {/* Imagen */}
        <div className="h-64 bg-principal-morado overflow-hidden">
        <img
            src={evento.imagenes[imagenActual]}
            alt={`${evento.titulo} - Imagen ${imagenActual + 1}`}
            className="w-full h-full object-cover"
        />
        </div>

        {/* Contenido */}
        <div className="p-8">
        <div className="flex items-center justify-between mb-4">
            <h4 className="font-high-cruiser text-3xl font-bold text-principal-morado">
            {evento.titulo}
            </h4>
            <span className="font-montserrat font-bold text-sm bg-principal-rosa text-neutro-blanco px-4 py-2 rounded-full">
            {evento.hora}
            </span>
        </div>

        <p className="font-questrial text-neutro-gris text-base leading-relaxed mb-6">
            {evento.detalles}
        </p>
        <div className="flex items-center gap-3 pt-4 border-t-2 border-principal-rosa-200">
            <div className="w-3 h-3 bg-principal-rosa rounded-full animate-pulse" />
            <span className="font-montserrat text-sm text-neutro-gris-600 font-semibold">
            {evento.descripcion}
            </span>
        </div>

        <div className="mt-6 flex justify-center">
            <button
            onClick={onClose}
            className="bg-principal-rosa hover:bg-principal-rosa-700 text-neutro-blanco font-montserrat font-bold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
            Entendido
            </button>
        </div>
        </div>
    </div>
    </div>
);
};

export default EventCard;