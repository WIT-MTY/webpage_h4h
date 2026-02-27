'use client'

import React, { useState, useRef } from "react";

interface Evento {
  titulo: string;
  descripcion: string;
  hora: string;
  detalles: string;
  imagenes: string[];
}

interface EventCardProps {
  evento: Evento;
  index: number;
  dia: string;
  onOpen: (eventoId: string, totalImagenes: number) => void;
}

const CalendarioSection = () => {
  const [eventoSeleccionado, setEventoSeleccionado] = useState<string | null>(null);
  // Lleva el contador de imagen por cada evento independientemente
  const imageCounters = useRef<Record<string, number>>({});

  const abrirEvento = (eventoId: string, totalImagenes: number) => {
    const current = imageCounters.current[eventoId] ?? 0;
    imageCounters.current[eventoId] = (current + 1) % totalImagenes;
    setEventoSeleccionado(eventoId);
  };

  const eventosSabado: Evento[] = [
    {
      titulo: "Registro y Check-in",
      descripcion: "Centro de Congresos",
      hora: "7:00 AM - 9:00 AM",
      detalles: "Llega temprano para recibir tu kit completo de bienvenida que incluye credencial, playera del evento, stickers y más sorpresas. ¡No te lo pierdas!",
      imagenes: [
        "/images/calendario_img/registro1.JPG",
        "/images/calendario_img/registro2.JPG",
        "/images/calendario_img/registro3.JPG"
      ]
    },
    {
      titulo: "Inauguración",
      descripcion: "Centro de Congresos",
      hora: "9:00 AM - 10:00 AM",
      detalles: "Conoce a los organizadores, sponsors y las reglas del hackathon.",
      imagenes: [
        "/images/calendario_img/Apertura1.jpg",
        "/images/calendario_img/Apertura2.jpg",
        "/images/calendario_img/Apertura3.jpg"
      ]
    },
    {
      titulo: "Presentación de Retos",
      descripcion: "Centro de Congresos",
      hora: "10:00 AM - 11:00 AM",
      detalles: "¡Es momento de poner manos a la obra! Se explicaran los retos a fondo y conoceras a los mentores que te acompañarán durante el evento.",
      imagenes: [
        "/images/calendario_img/Presentacion2.jpg",
        "/images/calendario_img/Presentacion4.jpg",
        "/images/calendario_img/Presentacion3.jpg"
      ]
    },
    {
      titulo: "¡Comienza el Hackathon!",
      descripcion: "Centro de Congresos",
      hora: "11:00 AM",
      detalles: "¡Manos a la obra! Es hora de empezar a desarrollar tu proyecto. Recuerda que el trabajo en equipo y la creatividad son clave para destacar.",
      imagenes: [
        "/images/calendario_img/Trabajo4.jpg",
        "/images/calendario_img/Trabajo2.jpg",
        "/images/calendario_img/Trabajo3.jpg"
      ]
    },
    {
      titulo: "Comida",
      descripcion: "Centro de Congresos",
      hora: "1:00 PM",
      detalles: "Recarga energías con deliciosa comida y snacks. Aprovecha para socializar y hacer networking.",
      imagenes: [
        "/images/calendario_img/Comida1.JPG",
        "/images/calendario_img/Comida2.JPG",
        "/images/calendario_img/Comida3.JPG"
      ]
    },
    {
      titulo: "Cena",
      descripcion: "Centro de Congresos",
      hora: "8:30 PM",
      detalles: "Después de horas de trabajo, es importante recargar energías con una buena cena. Disfruta de una variedad de platillos para mantener tu mente fresca y lista para seguir innovando.",
      imagenes: [
        "/images/calendario_img/Cena1.jpg",
        "/images/calendario_img/Cena2.JPG",
        "/images/calendario_img/Cena3.JPG"
      ]
    }
  ];

  const eventosDomingo: Evento[] = [
    {
      titulo: "Karaoke",
      descripcion: "Salon A2-201",
      hora: "12:00 AM",
      detalles: "Toma un descanso y libera el estrés cantando tus canciones favoritas. ¡La diversión también es parte del hackathon!",
      imagenes: [
        "/images/calendario_img/Karaoke3.jpg",
        "/images/calendario_img/Karaoke2.jpg",
        "/images/calendario_img/Karaoke1.jpg"
      ]
    },
    {
      titulo: "Desayuno",
      descripcion: "Centro de Congresos",
      hora: "8:00 AM - 9:30 AM",
      detalles: "Desayuno para recuperar energías y preparte para la recta final.",
      imagenes: [
        "/images/calendario_img/Desayuno1.jpg",
        "/images/calendario_img/Desayuno2.jpg",
        "/images/calendario_img/Desayuno3.jpg"
      ]
    },
    {
      titulo: "Finaliza el Reto",
      descripcion: "Centro de Congresos",
      hora: "11:00 AM",
      detalles: "Hora de hacer los últimos commits y preparar tu presentación. Asegúrate de que todo funcione correctamente.",
      imagenes: [
        "/images/calendario_img/Final1.jpg",
        "/images/calendario_img/Final2.jpg",
        "/images/calendario_img/Final3.jpg"
      ]
    },
    {
      titulo: "Evaluación",
      descripcion: "Centro de Congresos",
      hora: "11:30 AM - 1:00 PM",
      detalles: "Cada equipo presenta su proyecto ante los jueces y el público. ¡Es tu momento de brillar y mostrar todo tu trabajo!",
      imagenes: [
        "/images/calendario_img/Evaluacion1.jpg",
        "/images/calendario_img/Evaluacion2.jpg",
        "/images/calendario_img/Evaluacion3.jpg"
      ]
    },
    {
      titulo: "Networking",
      descripcion: "Centro de Congresos",
      hora: "12:30 PM - 2:00 PM",
      detalles: "Conoce a los demás equipos, comparte tu experiencia y desea suerte a los demás participantes. El networking es clave para futuras colaboraciones y oportunidades.",
      imagenes: [
        "/images/calendario_img/Networking1.jpg",
        "/images/calendario_img/Networking2.jpg",
        "/images/calendario_img/Networking3.jpg"
      ]
    },
    {
      titulo: "Premiación y Clausura",
      descripcion: "Centro de Congresos",
      hora: "2:00 PM",
      detalles: "Hora de contener la respiración y escuchar los resultados. Se anunciarán a los ganadores y se clausurará el evento con palabras de agradecimiento y motivación para seguir innovando.",
      imagenes: [
        "/images/calendario_img/Premios1.jpg",
        "/images/calendario_img/Premios2.jpg",
        "/images/calendario_img/Premios3.jpg"
      ]
    }
  ];

  const EventCard: React.FC<EventCardProps> = ({ evento, index, dia, onOpen }) => {
    const eventoId = `${dia}-${index}`;
    return (
      <div className="cursor-pointer group" onClick={() => onOpen(eventoId, evento.imagenes.length)}>
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

  const EventoModal = () => {
    if (!eventoSeleccionado) return null;

    const [dia, indexStr] = eventoSeleccionado.split('-');
    const index = parseInt(indexStr);
    const evento = dia === 'sabado' ? eventosSabado[index] : eventosDomingo[index];

    // Usa el contador actual para esta apertura
    const imagenActual = imageCounters.current[eventoSeleccionado] ?? 0;

    return (
      <div
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        style={{ backgroundColor: 'rgba(145,24,118,0.75)' }}
        onClick={() => setEventoSeleccionado(null)}
      >
        <div
          className="bg-neutro-blanco rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full relative"
          style={{ border: '4px solid #ff2871' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setEventoSeleccionado(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-principal-rosa hover:bg-principal-rosa-700 text-neutro-blanco rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Imagen — una sola, la que toca según el contador */}
          <div className="h-64 bg-principal-morado overflow-hidden">
            <img
              src={evento.imagenes[imagenActual]}
              alt={`${evento.titulo} - Imagen ${imagenActual + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-high-cruiser text-3xl font-bold text-principal-morado">{evento.titulo}</h4>
              <span className="font-montserrat font-bold text-sm bg-principal-rosa text-neutro-blanco px-4 py-2 rounded-full">
                {evento.hora}
              </span>
            </div>
            <p className="font-questrial text-neutro-gris text-base leading-relaxed mb-6">{evento.detalles}</p>
            <div className="flex items-center gap-3 pt-4 border-t-2 border-principal-rosa-200">
              <div className="w-3 h-3 bg-principal-rosa rounded-full animate-pulse" />
              <span className="font-montserrat text-sm text-neutro-gris-600 font-semibold">{evento.descripcion}</span>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setEventoSeleccionado(null)}
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

  return (
    <section
      id="calendario"
      className="relative min-h-screen overflow-hidden py-20 px-4"
      style={{ backgroundColor: '#4A0C32' }}
    >
      {/* ── Animated SVG background figures ── */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-30 pointer-events-none figura-float-slow">
        <img src="/images/figuras/doodle_rosa.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-0 right-0 w-80 h-80 opacity-25 pointer-events-none figura-float-medium" style={{ transform: 'scaleX(-1)' }}>
        <img src="/images/figuras/doodle_fuerte.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-24 left-1/4 w-16 h-16 opacity-60 pointer-events-none figura-spin-slow">
        <img src="/images/figuras/estrella.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-1/3 right-16 w-12 h-12 opacity-50 pointer-events-none figura-spin-reverse">
        <img src="/images/figuras/estrella.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 left-8 w-24 h-24 opacity-40 pointer-events-none figura-spin-slow">
        <img src="/images/figuras/sol.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-10 right-1/3 w-10 h-10 opacity-40 pointer-events-none figura-spin-reverse">
        <img src="/images/figuras/sol.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-25 pointer-events-none figura-float-medium">
        <img src="/images/figuras/doodle_rosa.svg" alt="" className="w-full h-full object-contain" style={{ transform: 'rotate(180deg)' }} />
      </div>
      <div className="absolute bottom-12 left-1/2 w-8 h-8 opacity-50 pointer-events-none figura-spin-slow" style={{ marginLeft: '-1rem' }}>
        <img src="/images/figuras/estrella.svg" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h3 className="font-high-cruiser text-7xl font-black uppercase text-neutro-blanco tracking-tight mb-4">
            Cronograma
          </h3>
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-16 bg-principal-rosa" />
            <p className="font-montserrat text-principal-rosa font-bold text-lg tracking-widest uppercase">
              24H de Innovación
            </p>
            <div className="h-0.5 w-16 bg-principal-rosa" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sábado */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(4px)', border: '1.5px solid rgba(255,40,113,0.3)' }}
          >
            <div className="rounded-xl py-4 px-6 mb-6 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.10)' }}>
              <h4 className="font-montserrat font-black text-neutro-blanco text-2xl uppercase tracking-wide">
                Sábado 14 de Junio
              </h4>
            </div>
            <div className="space-y-1">
              {eventosSabado.map((evento, index) => (
                <EventCard key={index} evento={evento} index={index} dia="sabado" onOpen={abrirEvento} />
              ))}
            </div>
          </div>

          {/* Domingo */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(4px)', border: '1.5px solid rgba(255,40,113,0.3)' }}
          >
            <div className="rounded-xl py-4 px-6 mb-6 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.10)' }}>
              <h4 className="font-montserrat font-black text-neutro-blanco text-2xl uppercase tracking-wide">
                Domingo 15 de Junio
              </h4>
            </div>
            <div className="space-y-1">
              {eventosDomingo.map((evento, index) => (
                <EventCard key={index} evento={evento} index={index} dia="domingo" onOpen={abrirEvento} />
              ))}
            </div>
          </div>
        </div>

        <EventoModal />
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

export default CalendarioSection;