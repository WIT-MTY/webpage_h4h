'use client'

import React, { useState } from "react";
import BackgroundDecor from "../componentes/general/BackgroundDoodles";
import { FaqGrid, FaqItem } from "../componentes/general/FaqCard";

const faqs: FaqItem[] = [
{
    pregunta: "¿Qué es un hackathon?",
    respuesta: (
    <p>
        Un hackathon es un evento intensivo de colaboración y competencia, que dura generalmente 24 horas, donde equipos multidisciplinarios trabajan juntos para crear prototipos funcionales de soluciones tecnológicas a retos específicos. El término combina "hack" (exploración tecnológica) y "maratón" (esfuerzo concentrado).
    </p>
    ),
},
{
    pregunta: "¿Necesito un equipo para participar?",
    respuesta: (
    <p>
        No, todas son bienvenidas. Se recomienda tener a alguna persona de tu equipo con experiencia en programación ya que los retos se enfocarán en desarrollo tecnológico.
    </p>
    ),
},
{
    pregunta: "¿Puedo llegar después del registro?",
    respuesta: (
    <p>
        Solo si hay <strong>2 personas como mínimo</strong> de tu equipo ya registradas podrás ingresar después de la hora asignada, como máximo a las <strong>3:00 pm</strong>.
    </p>
    ),
},
{
    pregunta: "¿Puedo salir durante el hackathon?",
    respuesta: (
    <p>
        Claro, solo asegúrate de hacerlo <strong>antes de las 12:00 pm</strong>. Después de esa hora no se dejará entrar a nadie más; si sales después de esa hora no te dejarán entrar de nuevo.
    </p>
    ),
},
{
    pregunta: "¿Puedo cambiar el reto una vez seleccionado?",
    respuesta: (
    <p>
        No, no se puede cambiar de reto. Es importante que todas estén de acuerdo desde el inicio ya que hay <strong>cupos limitados</strong> para cada uno.
    </p>
    ),
},
{
    pregunta: "¿Puedo quedarme a dormir durante el evento?",
    respuesta: (
    <p>
        ¡Sí! Preparamos un espacio para que las participantes puedan descansar. Asegúrate de traer tu <strong>frazada y/o almohada</strong> para estar más cómoda — no se proporcionarán durante el evento.
    </p>
    ),
},
{
    pregunta: "¿Se darán alternativas de comida (vegetariana o vegana)?",
    respuesta: (
    <p>
        ¡Sí! A la hora de tu registro se preguntará si hay preferencias para los alimentos. Asegúrate de seleccionar tu opción y en el día del evento se te proporcionará con tu nombre.
    </p>
    ),
},
{
    pregunta: "¿Qué tengo que llevar para el evento?",
    respuesta: (
    <div>
        <p className="mb-2">Puedes traer lo que te ayude a trabajar mejor, pero nuestro equipo recomienda:</p>
        <ul className="grid grid-cols-2 gap-1">
        {[
            "💻 Computadora", "🎧 Audífonos", "🔌 Cargadores",
            "🔌 Extensión / Multicontacto", "🧃 Termo de agua", "🍿 Snacks favoritos",
            "👕 Ropa cómoda", "👟 Zapatos cómodos", "🧴 Artículos de higiene personal",
            "🛏️ Frazada", "🛏️ Almohada pequeña (si te quedas a dormir)",
        ].map((item) => (
            <li key={item} className="text-sm flex items-start gap-1">{item}</li>
        ))}
        </ul>
    </div>
    ),
},
];

const FaqSection = () => {
const [openIndex, setOpenIndex] = useState<number | null>(null);

return (
    <section
    id="faq"
    className="relative min-h-screen overflow-hidden py-20 px-4"
    style={{ backgroundColor: "#4A0C32" }}
    >
      {/* ── Fondo decorativo ── */}
    <BackgroundDecor />

      {/* ── Contenido ── */}
    <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
        <h2 className="font-high-cruiser text-7xl font-black text-neutro-blanco uppercase leading-tight tracking-tight">
            Preguntas<br />Frecuentes
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-0.5 w-16 bg-principal-rosa" />
            <span className="font-montserrat text-principal-rosa font-bold text-sm tracking-widest uppercase">
            FAQ
            </span>
            <div className="h-0.5 w-16 bg-principal-rosa" />
        </div>
        </div>

        {/* ── Grid de FAQs ── */}
        <FaqGrid
        faqs={faqs}
        openIndex={openIndex}
        onToggle={(i) => setOpenIndex(openIndex === i ? null : i)}
        />

        <div className="mt-16 text-center">
        <p className="font-montserrat text-neutro-blanco text-lg opacity-80 mb-4">
            ¿Sigues con dudas?
        </p>
        <a
            href="#contactanos"
            className="inline-flex items-center gap-2 bg-principal-rosa hover:bg-principal-rosa-700 text-neutro-blanco font-montserrat font-bold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
        >
            Contáctanos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </a>
        </div>
    </div>
    </section>
);
};

export default FaqSection;