'use client'

import React, { useState } from "react";

interface FaqItem {
  pregunta: string;
  respuesta: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    pregunta: "¿Qué es un hackathon?",
    respuesta: (
      <p>
        Un hackathon es un evento intensivo de colaboración y competencia, que dura generalmente 24 horas, donde equipos multidisciplinarios trabajan juntos para crear prototipos funcionales de soluciones tecnológicas a retos específicos. El término combina "hack" (exploración tecnológica) y "maratón" (esfuerzo concentrado).
      </p>
    )
  },
  {
    pregunta: "¿Necesito un equipo para participar?",
    respuesta: (
      <p>
        No, todas son bienvenidas. Se recomienda tener a alguna persona de tu equipo con experiencia en programación ya que los retos se enfocarán en desarrollo tecnológico.
      </p>
    )
  },
  {
    pregunta: "¿Puedo llegar después del registro?",
    respuesta: (
      <p>
        Solo si hay <strong>2 personas como mínimo</strong> de tu equipo ya registradas podrás ingresar después de la hora asignada, como máximo a las <strong>3:00 pm</strong>.
      </p>
    )
  },
  {
    pregunta: "¿Puedo salir durante el hackathon?",
    respuesta: (
      <p>
        Claro, solo asegúrate de hacerlo <strong>antes de las 12:00 pm</strong>. Después de esa hora no se dejará entrar a nadie más; si sales después de esa hora no te dejarán entrar de nuevo.
      </p>
    )
  },
  {
    pregunta: "¿Puedo cambiar el reto una vez seleccionado?",
    respuesta: (
      <p>
        No, no se puede cambiar de reto. Es importante que todas estén de acuerdo desde el inicio ya que hay <strong>cupos limitados</strong> para cada uno.
      </p>
    )
  },
  {
    pregunta: "¿Puedo quedarme a dormir durante el evento?",
    respuesta: (
      <p>
        ¡Sí! Preparamos un espacio para que las participantes puedan descansar. Asegúrate de traer tu <strong>frazada y/o almohada</strong> para estar más cómoda — no se proporcionarán durante el evento.
      </p>
    )
  },
  {
    pregunta: "¿Se darán alternativas de comida (vegetariana o vegana)?",
    respuesta: (
      <p>
        ¡Sí! A la hora de tu registro se preguntará si hay preferencias para los alimentos. Asegúrate de seleccionar tu opción y en el día del evento se te proporcionará con tu nombre.
      </p>
    )
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
            "🛏️ Frazada", "🛏️ Almohada pequeña (si te quedas a dormir)"
          ].map((item) => (
            <li key={item} className="text-sm flex items-start gap-1">{item}</li>
          ))}
        </ul>
      </div>
    )
  }
];

const FaqCard: React.FC<{ faq: FaqItem; index: number; col: number; open: boolean; onToggle: () => void }> = ({ faq, open, onToggle }) => {
  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: open
          ? 'rgba(255,40,113,0.18)'
          : 'rgba(255,255,255,0.07)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: open
          ? '1.5px solid rgba(255,40,113,0.5)'
          : '1.5px solid rgba(255,255,255,0.12)',
        boxShadow: open ? '0 4px 24px rgba(255,40,113,0.2)' : '0 2px 12px rgba(0,0,0,0.2)'
      }}
      onClick={onToggle}
    >
      {/* Questions */}
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <h4 className="font-montserrat font-bold text-neutro-blanco text-base leading-snug flex-1">
          {faq.pregunta}
        </h4>
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ backgroundColor: open ? '#ff2871' : 'rgba(255,40,113,0.3)' }}
        >
          <svg
            className="w-4 h-4 text-neutro-blanco transition-transform duration-300"
            style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>

      {/* Answers */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <div className="px-6 pb-5 font-questrial text-neutro-blanco text-sm leading-relaxed opacity-90"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div className="pt-4">
            {faq.respuesta}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const col1 = faqs.filter((_, i) => i % 2 === 0);
  const col2 = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section
      id="faq"
      className="relative min-h-screen overflow-hidden py-20 px-4"
      style={{ backgroundColor: '#4A0C32' }}
    >

      <div className="absolute top-0 left-0 w-80 h-80 opacity-30 pointer-events-none figura-float-slow">
        <img src="/images/figuras/doodle_rosa.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-25 pointer-events-none figura-float-medium" style={{ transform: 'scaleX(-1) rotate(180deg)' }}>
        <img src="/images/figuras/doodle_fuerte.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="absolute top-1/3 right-0 w-64 h-64 opacity-20 pointer-events-none figura-float-medium">
        <img src="/images/figuras/doodle_rosa.svg" alt="" className="w-full h-full object-contain" style={{ transform: 'rotate(90deg)' }} />
      </div>

      <div className="absolute top-16 right-1/4 w-12 h-12 opacity-60 pointer-events-none figura-spin-slow">
        <img src="/images/figuras/estrella.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-1/2 left-10 w-10 h-10 opacity-50 pointer-events-none figura-spin-reverse">
        <img src="/images/figuras/estrella.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-24 left-1/3 w-8 h-8 opacity-40 pointer-events-none figura-spin-slow">
        <img src="/images/figuras/estrella.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="absolute top-20 left-1/4 w-14 h-14 opacity-35 pointer-events-none figura-spin-reverse">
        <img src="/images/figuras/sol.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-16 right-16 w-16 h-16 opacity-35 pointer-events-none figura-spin-slow">
        <img src="/images/figuras/sol.svg" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Contenido */}
      <div className="relative z-50 max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="font-high-cruiser text-7xl font-black text-neutro-blanco uppercase leading-tight tracking-tight">
            Preguntas<br />Frecuentes
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-0.5 w-16 bg-principal-rosa" />
            <span className="font-montserrat text-principal-rosa font-bold text-sm tracking-widest uppercase">FAQ</span>
            <div className="h-0.5 w-16 bg-principal-rosa" />
          </div>
        </div>
        <div className="relative grid lg:grid-cols-2 gap-4">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-4">
            {col1.map((faq, i) => {
              const realIndex = i * 2;
              return (
                <FaqCard key={realIndex} faq={faq} index={realIndex} col={0}
                  open={openIndex === realIndex}
                  onToggle={() => setOpenIndex(openIndex === realIndex ? null : realIndex)}
                />
              );
            })}
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-4">
            {col2.map((faq, i) => {
              const realIndex = i * 2 + 1;
              return (
                <FaqCard key={realIndex} faq={faq} index={realIndex} col={1}
                  open={openIndex === realIndex}
                  onToggle={() => setOpenIndex(openIndex === realIndex ? null : realIndex)}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-montserrat text-neutro-blanco text-lg opacity-80 mb-4">¿Sigues con dudas?</p>
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

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .figura-float-slow { animation: floatSlow 7s ease-in-out infinite; }
        .figura-float-medium { animation: floatMedium 5s ease-in-out infinite; }
        .figura-spin-slow { animation: spinSlow 12s linear infinite; }
        .figura-spin-reverse { animation: spinReverse 9s linear infinite; }
      `}</style>
    </section>
  );
};

export default FaqSection;