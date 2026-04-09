'use client'

import React, { useState, useRef } from "react";
import BackgroundDecor from "../componentes/general/BackgroundDoodles";
import EventCard, { EventoModal, Evento } from "../componentes/general/EventCard";

const CalendarioSection = () => {
  const [eventoSeleccionado, setEventoSeleccionado] = useState<string | null>(null);
  const imageCounters = useRef<Record<string, number>>({});

  const abrirEvento = (eventoId: string, totalImagenes: number) => {
    const current = imageCounters.current[eventoId] ?? 0;
    imageCounters.current[eventoId] = (current + 1) % totalImagenes;
    setEventoSeleccionado(eventoId);
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.classList.add('modal-open');
    document.body.dispatchEvent(new Event('modalopen'));
  };

  const cerrarEvento = () => {
    setEventoSeleccionado(null);
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.body.classList.remove('modal-open');
    document.body.dispatchEvent(new Event('modalclose'));
  };

  const eventosSabado: Evento[] = [
    {
      titulo: "Registro y Check-in",
      descripcion: "Centro de Congresos",
      hora: "7:00 AM - 9:00 AM",
      detalles: "Llega temprano para recibir tu kit completo de bienvenida que incluye credencial, playera del evento, stickers y más sorpresas. ¡No te lo pierdas!",
      imagenes: ["/images/calendario_img/registro1.JPG", "/images/calendario_img/registro2.JPG", "/images/calendario_img/registro3.JPG"]
    },
    {
      titulo: "Inauguración",
      descripcion: "Centro de Congresos",
      hora: "9:00 AM - 10:00 AM",
      detalles: "Conoce a los organizadores, sponsors y las reglas del hackathon.",
      imagenes: ["/images/calendario_img/Apertura1.jpg", "/images/calendario_img/Apertura2.jpg", "/images/calendario_img/Apertura3.jpg"]
    },
    {
      titulo: "Presentación de Retos",
      descripcion: "Centro de Congresos",
      hora: "10:00 AM - 11:00 AM",
      detalles: "¡Es momento de poner manos a la obra! Se explicarán los retos a fondo y conocerás a los mentores que te acompañarán durante el evento.",
      imagenes: ["/images/calendario_img/Presentacion2.jpg", "/images/calendario_img/Presentacion4.jpg", "/images/calendario_img/Presentacion3.jpg"]
    },
    {
      titulo: "¡Comienza el Hackathon!",
      descripcion: "Centro de Congresos",
      hora: "11:00 AM",
      detalles: "¡Manos a la obra! Es hora de empezar a desarrollar tu proyecto. Recuerda que el trabajo en equipo y la creatividad son clave para destacar.",
      imagenes: ["/images/calendario_img/Trabajo4.jpg", "/images/calendario_img/Trabajo2.jpg", "/images/calendario_img/Trabajo3.jpg"]
    },
    {
      titulo: "Comida",
      descripcion: "Centro de Congresos",
      hora: "1:00 PM",
      detalles: "Recarga energías con deliciosa comida y snacks. Aprovecha para socializar y hacer networking.",
      imagenes: ["/images/calendario_img/Comida1.JPG", "/images/calendario_img/Comida2.JPG", "/images/calendario_img/Comida3.JPG"]
    },
    {
      titulo: "Cena",
      descripcion: "Centro de Congresos",
      hora: "8:30 PM",
      detalles: "Después de horas de trabajo, es importante recargar energías con una buena cena.",
      imagenes: ["/images/calendario_img/Cena1.jpg", "/images/calendario_img/Cena2.JPG", "/images/calendario_img/Cena3.JPG"]
    }
  ];

  const eventosDomingo: Evento[] = [
    {
      titulo: "Karaoke",
      descripcion: "Salon A2-201",
      hora: "12:00 AM",
      detalles: "Toma un descanso y libera el estrés cantando tus canciones favoritas. ¡La diversión también es parte del hackathon!",
      imagenes: ["/images/calendario_img/Karaoke3.jpg", "/images/calendario_img/Karaoke2.jpg", "/images/calendario_img/Karaoke1.jpg"]
    },
    {
      titulo: "Desayuno",
      descripcion: "Centro de Congresos",
      hora: "8:00 AM - 9:30 AM",
      detalles: "Desayuno para recuperar energías y prepararte para la recta final.",
      imagenes: ["/images/calendario_img/Desayuno1.jpg", "/images/calendario_img/Desayuno2.jpg", "/images/calendario_img/Desayuno3.jpg"]
    },
    {
      titulo: "Finaliza el Reto",
      descripcion: "Centro de Congresos",
      hora: "11:00 AM",
      detalles: "Hora de hacer los últimos commits y preparar tu presentación. Asegúrate de que todo funcione correctamente.",
      imagenes: ["/images/calendario_img/Final1.jpg", "/images/calendario_img/Final2.jpg", "/images/calendario_img/Final3.jpg"]
    },
    {
      titulo: "Evaluación",
      descripcion: "Centro de Congresos",
      hora: "11:30 AM - 1:00 PM",
      detalles: "Cada equipo presenta su proyecto ante los jueces y el público. ¡Es tu momento de brillar y mostrar todo tu trabajo!",
      imagenes: ["/images/calendario_img/Evaluacion1.jpg", "/images/calendario_img/Evaluacion2.jpg", "/images/calendario_img/Evaluacion3.jpg"]
    },
    {
      titulo: "Networking",
      descripcion: "Centro de Congresos",
      hora: "12:30 PM - 2:00 PM",
      detalles: "Conoce a los demás equipos, comparte tu experiencia y desea suerte a los demás participantes.",
      imagenes: ["/images/calendario_img/Networking1.jpg", "/images/calendario_img/Networking2.jpg", "/images/calendario_img/Networking3.jpg"]
    },
    {
      titulo: "Premiación y Clausura",
      descripcion: "Centro de Congresos",
      hora: "2:00 PM",
      detalles: "Se anunciarán a los ganadoras y se clausurará el evento con palabras de agradecimiento y motivación.",
      imagenes: ["/images/calendario_img/Premios1.jpg", "/images/calendario_img/Premios2.jpg", "/images/calendario_img/Premios3.jpg"]
    }
  ];

  const eventoActivo = (() => {
    if (!eventoSeleccionado) return null;
    const [dia, indexStr] = eventoSeleccionado.split("-");
    const index = parseInt(indexStr);
    return dia === "sabado" ? eventosSabado[index] : eventosDomingo[index];
  })();

  return (
    <section
      id="calendario"
      className="relative min-h-screen overflow-hidden py-20 px-4"
      style={{ backgroundColor: "#4A0C32" }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <BackgroundDecor />
        <style jsx>{`
          /* Ocultar la estrella superior centro-izquierda */
          div :global(.top-24) {
            display: none;
          }
        `}</style>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="font-high-cruiser text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center mb-6">
            CRONOGRAMA
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-16 bg-principal-rosa" />
            <p className="font-montserrat text-principal-rosa font-bold text-lg tracking-widest uppercase">
              24H de Innovación
            </p>
            <div className="h-0.5 w-16 bg-principal-rosa" />
          </div>
        </div>

        {/* <div> /}
        {/* --> panel muy pronto */}
        <div className="relative">
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
          {/* --> panel muy pronto: FIN */}

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Sábado */}
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(4px)",
                border: "1.5px solid rgba(255,40,113,0.3)",
              }}
            >
              <div
                className="rounded-xl py-4 px-6 mb-6 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
              >
                <h4 className="font-montserrat font-black text-neutro-blanco text-2xl uppercase tracking-wide">
                  Sábado 14 de Junio
                </h4>
              </div>
              <div className="space-y-1">
                {eventosSabado.map((evento, index) => (
                  <EventCard
                    key={index}
                    evento={evento}
                    eventoId={`sabado-${index}`}
                    onOpen={abrirEvento}
                  />
                ))}
              </div>
            </div>

            {/* Domingo */}
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(4px)",
                border: "1.5px solid rgba(255,40,113,0.3)",
              }}
            >
              <div
                className="rounded-xl py-4 px-6 mb-6 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
              >
                <h4 className="font-montserrat font-black text-neutro-blanco text-2xl uppercase tracking-wide">
                  Domingo 15 de Junio
                </h4>
              </div>
              <div className="space-y-1">
                {eventosDomingo.map((evento, index) => (
                  <EventCard
                    key={index}
                    evento={evento}
                    eventoId={`domingo-${index}`}
                    onOpen={abrirEvento}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
        {/* --> panel muy pronto: cierra el div wrapper del grid */}

      </div>

      <EventoModal
        eventoSeleccionado={eventoSeleccionado}
        evento={eventoActivo}
        imagenActual={
          eventoSeleccionado
            ? imageCounters.current[eventoSeleccionado] ?? 0
            : 0
        }
        onClose={cerrarEvento}
      />
    </section>
  );
};

export default CalendarioSection;