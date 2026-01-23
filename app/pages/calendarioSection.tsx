'use client'

import React, { useState } from "react";

// Definir el tipo de evento
interface Evento {
  titulo: string;
  descripcion: string;
  hora: string;
  detalles: string;
  imagenes: string[];
}

// Definir los props del EventCard
interface EventCardProps {
  evento: Evento;
  index: number;
  isActive: boolean;
  dia: string;
}

const CalendarioSection = () => {
  const [diaActivo, setDiaActivo] = useState<"sabado" | "domingo">("sabado");
  const [eventoSeleccionado, setEventoSeleccionado] = useState<string | null>(null);

  const eventosSabado: Evento[] = [
    {
      titulo: "Registro y Check-in",
      descripcion: "Centro de Congresos",
      hora: "8:00 AM",
      detalles: "Llega temprano para recibir tu kit completo de bienvenida que incluye credencial, playera del evento, stickers y más sorpresas. ¡No te lo pierdas!",
      imagenes: [
        "/images/calendar_img/registro1.JPG",
        "/images/calendar_img/registro2.JPG",
        "/images/calendar_img/registro3.JPG"
      ]
    },
    {
      titulo: "Ceremonia de Apertura",
      descripcion: "Centro de Congresos",
      hora: "10:00 AM",
      detalles: "Conoce a los organizadores, sponsors y las reglas del hackathon. Escucha a speakers inspiradores que compartirán sus experiencias.",
      imagenes: [
        "/images/calendar_img/IMG_2345.JPG",
        "/images/calendar_img/IMG_2358.JPG",
        "/images/calendar_img/IMG_2389.JPG"
      ]
    },
    {
      titulo: "Comienza el Hackaton!",
      descripcion: "Centro de Congresos",
      hora: "11:00 AM",
      detalles: "¡Es momento de poner manos a la obra! Forma tu equipo y comienza a desarrollar tu proyecto innovador. Recuerda que tienes 24 horas para crear algo increíble.",
      imagenes: [
        "/images/calendar_img/_DSC0521.JPG",
        "/images/calendar_img/_DSC0532.JPG",
        "/images/calendar_img/_DSC0536.JPG"
      ]
    },
    {
      titulo: "Taller: Github",
      descripcion: "Salon A4-4301",
      hora: "2:00 PM",
      detalles: "Aprende las mejores prácticas de control de versiones con Git y GitHub. Ideal para colaborar efectivamente con tu equipo durante el hackathon.",
      imagenes: [
        "/images/calendar_img/_DSC0521.JPG",
        "/images/calendar_img/_DSC0532.JPG",
        "/images/calendar_img/_DSC0536.JPG"
      ]
    },
    {
      titulo: "Comida y Snacks",
      descripcion: "Salones de Centro de Congresos",
      hora: "6:00 PM",
      detalles: "Recarga energías con deliciosa comida y snacks. Aprovecha para socializar con otros participantes y hacer networking mientras disfrutas de una buena comida.",
      imagenes: [
        "/images/calendar_img/_DSC0521.JPG",
        "/images/calendar_img/_DSC0532.JPG",
        "/images/calendar_img/_DSC0536.JPG"
      ]
    }
  ];

  const eventosDomingo: Evento[] = [
    {
      titulo: "Karaoke",
      descripcion: "También hay que divertirse",
      hora: "12:00 AM",
      detalles: "Toma un descanso y libera el estrés cantando tus canciones favoritas. ¡La diversión también es parte del hackathon!",
      imagenes: [
        "/images/calendar_img/_DSC0571.JPG",
        "/images/calendar_img/_DSC0521.JPG",
        "/images/calendar_img/_DSC0532.JPG"
      ]
    },
    {
      titulo: "Desayuno Energético",
      descripcion: "Recarga para el sprint final",
      hora: "8:00 AM",
      detalles: "Desayuno completo para recuperar energías. Es el momento perfecto para hacer los últimos ajustes a tu proyecto.",
      imagenes: [
        "/images/calendar_img/_DSC0521.JPG",
        "/images/calendar_img/_DSC0532.JPG",
        "/images/calendar_img/_DSC0536.JPG"
      ]
    },
    {
      titulo: "Cierre de Proyectos",
      descripcion: "Últimos commits y preparación",
      hora: "10:00 AM",
      detalles: "Hora de hacer los últimos commits y preparar tu presentación. Asegúrate de que todo funcione correctamente antes de la entrega.",
      imagenes: [
        "/images/calendar_img/_DSC0521.JPG",
        "/images/calendar_img/_DSC0532.JPG",
        "/images/calendar_img/_DSC0536.JPG"
      ]
    },
    {
      titulo: "Presentaciones",
      descripcion: "Muestra tu proyecto al mundo",
      hora: "11:00 AM",
      detalles: "Cada equipo presenta su proyecto ante los jueces y el público. ¡Es tu momento de brillar y mostrar todo tu trabajo!",
      imagenes: [
        "/images/calendar_img/_DSC0521.JPG",
        "/images/calendar_img/_DSC0532.JPG",
        "/images/calendar_img/_DSC0536.JPG"
      ]
    },
    {
      titulo: "Premiación y Clausura",
      descripcion: "Celebremos juntos",
      hora: "1:00 PM",
      detalles: "Conoce a los ganadores y celebra el esfuerzo de todos. Premios increíbles esperan a los mejores proyectos. ¡Gracias por participar!",
      imagenes: [
        "/images/calendar_img/_DSC0521.JPG",
        "/images/calendar_img/_DSC0532.JPG",
        "/images/calendar_img/_DSC0536.JPG"
      ]
    }
  ];

  const EventCard: React.FC<EventCardProps> = ({ evento, index, isActive, dia }) => {
    const eventoId = `${dia}-${index}`;
    const isSelected = eventoSeleccionado === eventoId;

    return (
      <div 
        className={`relative bg-secundario-rosa-claro-200 p-5 rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl ${
          isActive ? 'opacity-100' : 'opacity-0'
        } ${isSelected ? 'ring-4 ring-principal-morado shadow-2xl' : ''}`}
        style={{
          transitionDelay: isActive ? `${index * 100}ms` : '0ms'
        }}
        onClick={() => setEventoSeleccionado(eventoId)}
      >
        <div className="flex items-start justify-between mb-2">
          <h5 className="font-bold text-lg text-neutro-negro flex-1">{evento.titulo}</h5>
          <span className="text-xs bg-principal-morado text-neutro-blanco px-3 py-1 rounded-full font-semibold ml-2">
            {evento.hora}
          </span>
        </div>
        <p className="text-sm text-neutro-gris-700">{evento.descripcion}</p>
      </div>
    );
  };

  // Modal de detalles del evento
  const EventoModal = () => {
    if (!eventoSeleccionado) return null;

    const [dia, indexStr] = eventoSeleccionado.split('-');
    const index = parseInt(indexStr);
    const evento = dia === 'sabado' ? eventosSabado[index] : eventosDomingo[index];
    const [imagenActual, setImagenActual] = useState(0);

    const siguienteImagen = () => {
      setImagenActual((prev) => (prev + 1) % evento.imagenes.length);
    };

    const imagenAnterior = () => {
      setImagenActual((prev) => (prev - 1 + evento.imagenes.length) % evento.imagenes.length);
    };

    return (
      <div 
        className="fixed inset-0 bg-neutro-negro bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fadeIn"
        onClick={() => setEventoSeleccionado(null)}
      >
        <div 
          className="bg-neutro-blanco rounded-3xl shadow-2xl overflow-hidden border-4 border-principal-morado max-w-2xl w-full animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón de cerrar */}
          <button
            onClick={() => setEventoSeleccionado(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-principal-morado hover:bg-secundario-morado text-neutro-blanco rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-90 shadow-lg"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Carrusel de imágenes del evento */}
          <div className="relative h-64 bg-gradient-to-br from-principal-rosa-300 via-secundario-rosa-claro-300 to-principal-morado-300 flex items-center justify-center overflow-hidden group">
            {/* Imagen real del evento */}
            <img 
              src={evento.imagenes[imagenActual]} 
              alt={`${evento.titulo} - Imagen ${imagenActual + 1}`} 
              className="w-full h-full object-cover" 
            />

            {/* Botón anterior */}
            <button
              onClick={imagenAnterior}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-principal-morado bg-opacity-80 hover:bg-opacity-100 text-neutro-blanco rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Imagen anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Botón siguiente */}
            <button
              onClick={siguienteImagen}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-principal-morado bg-opacity-80 hover:bg-opacity-100 text-neutro-blanco rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Imagen siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores de imagen */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {evento.imagenes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setImagenActual(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === imagenActual 
                      ? 'bg-neutro-blanco w-8' 
                      : 'bg-neutro-blanco bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-3xl font-bold text-principal-morado">{evento.titulo}</h4>
              <span className="text-base bg-secundario-morado text-neutro-blanco px-5 py-2 rounded-full font-bold">
                {evento.hora}
              </span>
            </div>
            
            <p className="text-neutro-gris-700 text-lg leading-relaxed mb-6">
              {evento.detalles}
            </p>

            <div className="flex items-center gap-3 pt-6 border-t-2 border-secundario-rosa-claro-300">
              <div className="w-4 h-4 bg-principal-rosa rounded-full animate-pulse"></div>
              <span className="text-base text-neutro-gris-600 font-semibold">
                {evento.descripcion}
              </span>
            </div>

            {/* Botón de acción */}
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => setEventoSeleccionado(null)}
                className="bg-gradient-to-r from-principal-rosa to-secundario-rosa text-neutro-blanco px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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
    <section id="calendario" className="relative min-h-screen bg-secundario-rosa-claro-50 overflow-hidden py-16 px-4">
      {/* Formas decorativas superiores - Animadas */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-principal-rosa opacity-80 transform -translate-x-32 -translate-y-32 rotate-45 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-principal-rosa-400 opacity-60 transform translate-x-48 -translate-y-48 rotate-45"></div>
      
      {/* Triángulo morado izquierdo */}
      <div className="absolute left-0 top-1/4 w-0 h-0 border-l-[200px] border-l-transparent border-b-[300px] border-b-principal-morado border-r-[200px] border-r-transparent transform -translate-x-32 opacity-90"></div>
      
      {/* Triángulo morado derecho */}
      <div className="absolute right-0 top-1/3 w-0 h-0 border-l-[150px] border-l-transparent border-t-[250px] border-t-secundario-morado border-r-[150px] border-r-transparent transform translate-x-24 opacity-90"></div>

      {/* Círculos decorativos flotantes */}
      <div className="absolute top-20 right-1/4 w-16 h-16 bg-principal-rosa-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-secundario-morado-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Título del calendario */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <span className="text-5xl text-principal-morado animate-spin" style={{ animationDuration: '3s' }}>✦</span>
            <h3 className="font-high-cruiser text-6xl font-black uppercase text-neutro-negro tracking-tight">Calendario</h3>
            <span className="text-5xl text-principal-rosa animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>✦</span>
          </div>
          <p className="text-3xl font-bold text-secundario-morado-700">24H DE INNOVACION</p>
        </div>

        {/* Selector de días - Versión móvil mejorada */}
        <div className="flex justify-center mb-12">
          <div className="bg-neutro-blanco rounded-2xl shadow-xl p-2 inline-flex gap-2">
            <button
              onClick={() => setDiaActivo("sabado")}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                diaActivo === "sabado"
                  ? "bg-gradient-to-r from-principal-morado to-secundario-morado text-neutro-blanco shadow-lg scale-105"
                  : "text-neutro-gris-600 hover:bg-secundario-rosa-claro-100"
              }`}
            >
              Sábado 14
            </button>
            <button
              onClick={() => setDiaActivo("domingo")}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                diaActivo === "domingo"
                  ? "bg-gradient-to-r from-principal-morado to-secundario-morado text-neutro-blanco shadow-lg scale-105"
                  : "text-neutro-gris-600 hover:bg-secundario-rosa-claro-100"
              }`}
            >
              Domingo 15
            </button>
          </div>
        </div>

        {/* Grid de calendarios - Vista responsiva mejorada */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Sábado 14 */}
          <div className={`transition-all duration-500 ${diaActivo === "sabado" ? "opacity-100" : "lg:opacity-100 opacity-0 hidden lg:block"}`}>
            <div className="bg-gradient-to-r from-principal-morado to-secundario-morado text-neutro-blanco text-center py-5 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-4xl font-bold">Sábado 14</h4>
            </div>
            <div className="space-y-4">
              {eventosSabado.map((evento, index) => (
                <EventCard 
                  key={index} 
                  evento={evento} 
                  index={index}
                  isActive={diaActivo === "sabado" || window.innerWidth >= 1024}
                  dia="sabado"
                />
              ))}
            </div>
          </div>

          {/* Domingo 15 */}
          <div className={`transition-all duration-500 ${diaActivo === "domingo" ? "opacity-100" : "lg:opacity-100 opacity-0 hidden lg:block"}`}>
            <div className="bg-gradient-to-r from-principal-morado to-secundario-morado text-neutro-blanco text-center py-5 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-4xl font-bold">Domingo 15</h4>
            </div>
            <div className="space-y-4">
              {eventosDomingo.map((evento, index) => (
                <EventCard 
                  key={index} 
                  evento={evento} 
                  index={index}
                  isActive={diaActivo === "domingo" || window.innerWidth >= 1024}
                  dia="domingo"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Espacio para mascota decorativa - Aquí puedes agregar tu imagen */}
      <div className="absolute bottom-8 right-12 w-40 h-40 z-20">
        <img src="/images/calendar_img/robot_feliz-removebg-preview.png" alt="Mascota" className="w-full h-full object-contain" />
        <div className="w-full h-full bg-gradient-to-br from-principal-rosa-400 to-secundario-rosa-claro rounded-3xl shadow-2xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
        </div>
      </div>

      {/* Forma decorativa inferior con gradiente */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-r from-principal-rosa via-secundario-rosa to-principal-morado transform -skew-y-2 opacity-80"></div>

      {/* Modal de detalles del evento */}
      <EventoModal />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default CalendarioSection;