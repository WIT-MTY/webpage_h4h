'use client';
import { useState } from 'react';

interface Participante {
  id: number;
  nombre: string;
  apellidos: string;
  correo: string;
  telefono: string;
  fechaNacimiento: string;
  genero: string;
  talla: string;
  pais: string;
  estado?: string;
  universidad: string;
  carrera: string;
  semestre: string;
  vegano: string;
  restriccionAlimentaria: string;
  especificacionRestriccion?: string;
  cv: string;
  linkedin?: string;
  github?: string;
  estadoRegistro: number; // 1: en revisión, 2: aceptada, 3: rechazada
}

// Simulación
const participantesEjemplo: Participante[] = [
  {
    id: 1,
    nombre: "Ana", apellidos: "García López", correo: "ana@tec.mx",
    telefono: "81 1234 5678", fechaNacimiento: "2000-05-12", genero: "Mujer",
    talla: "M", pais: "México", estado: "Nuevo León",
    universidad: "Tec de Monterrey", carrera: "ITC", semestre: "6to semestre",
    vegano: "No", restriccionAlimentaria: "No",
    cv: "#", linkedin: "https://linkedin.com/in/ana", github: "https://github.com/ana",
    estadoRegistro: 1,
  },
  {
    id: 2,
    nombre: "Laura", apellidos: "Martínez Ruiz", correo: "laura@uanl.mx",
    telefono: "81 9876 5432", fechaNacimiento: "2001-08-20", genero: "Mujer",
    talla: "S", pais: "México", estado: "Jalisco",
    universidad: "UANL", carrera: "Sistemas Computacionales", semestre: "4to semestre",
    vegano: "Sí", restriccionAlimentaria: "Sí", especificacionRestriccion: "Sin gluten",
    cv: "#", linkedin: "", github: "https://github.com/laura",
    estadoRegistro: 1,
  },
];

const etiquetaEstado = (estado: number) => {
  switch (estado) {
    case 1: return <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">En revisión</span>;
    case 2: return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">Aceptada</span>;
    case 3: return <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-700">Rechazada</span>;
  }
};

export default function PageAdmin() {
  const [participantes, setParticipantes] = useState<Participante[]>(participantesEjemplo);
  const [expandida, setExpandida] = useState<number | null>(null);

  const cambiarEstado = (id: number, nuevoEstado: number) => {
    setParticipantes(prev =>
      prev.map(p => p.id === id ? { ...p, estadoRegistro: nuevoEstado } : p)
    );
  };

  return (
    <section className="w-full min-h-screen overflow-y-auto" style={{ background: "#F0CEE3" }}>
      <div className="max-w-7xl mx-auto px-4 py-8">

        <h1 className="font-high-cruiser text-6xl text-[#4A0C32] group-hover:text-pink-600 transition-colors">
          Panel de administración de participantes
        </h1>
        <p className="text-white/60 text-sm mb-6">Solicitudes de registro — Hack4Her</p>

        {/* Tabla */}
        <div className="bg-[#C4649F]/60 rounded-lg overflow-hidden">

          {/* Header */}
          <div className="grid grid-cols-12 gap-2 px-6 py-3 border-b border-white/10 text-white/60 text-xs font-semibold uppercase">
            <div className="col-span-2">Nombre</div>
            <div className="col-span-2">Correo</div>
            <div className="col-span-1">Edad</div>
            <div className="col-span-1">Talla</div>
            <div className="col-span-1">Teléfono</div>
            <div className="col-span-2">Universidad</div>
            <div className="col-span-1">Semestre</div>
            <div className="col-span-1">Estado</div>
            <div className="col-span-2">Acciones</div>
          </div>

          {/* Filas */}
          {participantes.map((p) => (
            <div key={p.id} className="border-b border-white/10 last:border-0">

              {/* Fila principal */}
              <div
                className="grid grid-cols-12 gap-2 px-6 py-4 items-center hover:bg-white/5 cursor-pointer transition-colors"
                onClick={() => setExpandida(expandida === p.id ? null : p.id)}
              >
                <div className="col-span-2">
                  <p className="text-white font-medium text-sm">{p.nombre} {p.apellidos}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-white/70 text-sm truncate">{p.correo}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-white/70 text-sm">{p.fechaNacimiento}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-white/70 text-sm">{p.talla}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-white/70 text-sm">{p.telefono}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-white/70 text-sm truncate">{p.universidad}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-white/70 text-sm">{p.semestre}</p>
                </div>
                <div className="col-span-1">
                  {etiquetaEstado(p.estadoRegistro)}
                </div>
                <div className="col-span-2 flex gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); cambiarEstado(p.id, 2); }}
                    className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded-md transition-colors"
                  >
                    Aceptar
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); cambiarEstado(p.id, 3); }}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-md transition-colors"
                  >
                    Rechazar
                  </button>
                </div>
              </div>

              {/* Fila expandida */}
              {expandida === p.id && (
                <div className="px-6 pb-6 bg-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

                  <div className="space-y-3">
                    <h3 className="text-white font-semibold border-b border-white/10 pb-1">Datos personales</h3>
                    <div><p className="text-white/50 text-xs">Teléfono</p><p className="text-white">{p.telefono}</p></div>
                    <div><p className="text-white/50 text-xs">Género</p><p className="text-white">{p.genero}</p></div>
                    <div><p className="text-white/50 text-xs">País</p><p className="text-white">{p.pais}</p></div>
                    {p.pais === "México" && (
                      <div><p className="text-white/50 text-xs">Estado</p><p className="text-white">{p.estado}</p></div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-white font-semibold border-b border-white/10 pb-1">Preferencias</h3>
                    <div><p className="text-white/50 text-xs">¿Vegano/a?</p><p className="text-white">{p.vegano}</p></div>
                    <div><p className="text-white/50 text-xs">Restricción alimentaria</p><p className="text-white">{p.restriccionAlimentaria}</p></div>
                    {p.especificacionRestriccion && (
                      <div><p className="text-white/50 text-xs">Especificación</p><p className="text-white">{p.especificacionRestriccion}</p></div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-white font-semibold border-b border-white/10 pb-1">Información profesional</h3>
                    <div>
                      <p className="text-white/50 text-xs">CV</p>
                      <a href={p.cv} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline">Ver CV</a>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">LinkedIn</p>
                      {p.linkedin ? <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline">Ver perfil</a> : <p className="text-white/40">No proporcionado</p>}
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">GitHub</p>
                      {p.github ? <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline">Ver perfil</a> : <p className="text-white/40">No proporcionado</p>}
                    </div>
                  </div>

                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}