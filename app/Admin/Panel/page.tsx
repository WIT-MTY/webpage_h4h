'use client';

import { useState } from 'react';

interface Participante {
  id: number;
  nombre: string;
  apellidos: string;
  correo?: string;
  fechaNacimiento: string;
  mayorEdad: boolean;
  permisoMenoredad?: string;
  genero: string;
  talla: string;
  telefono: string;
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
  estadoRegistro: number;
}

const participantesEjemplo: Participante[] = [
  {
    id: 1,
    nombre: "Ana", apellidos: "García López", correo: "ana@tec.mx",
    telefono: "81 1234 5678", fechaNacimiento: "2000-05-12", mayorEdad: true,
    genero: "Mujer", talla: "M", pais: "USA", estado: "",
    universidad: "Furman", carrera: "ITC", semestre: "6to semestre",
    vegano: "No", restriccionAlimentaria: "No",
    cv: "#", linkedin: "https://linkedin.com/in/ana", github: "https://github.com/ana",
    estadoRegistro: 1,
  },
  {
    id: 2,
    nombre: "Laura", apellidos: "Martínez Ruiz", correo: "laura@uanl.mx",
    telefono: "81 9876 5432", fechaNacimiento: "2007-08-20", mayorEdad: false,
    permisoMenoredad: "#permiso",
    genero: "Mujer", talla: "S", pais: "México", estado: "Jalisco",
    universidad: "UANL", carrera: "Sistemas Computacionales", semestre: "4to semestre",
    vegano: "Sí", restriccionAlimentaria: "Sí", especificacionRestriccion: "Sin gluten",
    cv: "#", linkedin: "", github: "https://github.com/laura",
    estadoRegistro: 2,
  },
  {
    id: 3,
    nombre: "Sofía", apellidos: "López Torres", correo: "sofia@unam.mx",
    telefono: "55 1234 5678", fechaNacimiento: "1999-03-10", mayorEdad: true,
    genero: "Mujer", talla: "L", pais: "México", estado: "CDMX",
    universidad: "UNAM", carrera: "Diseño", semestre: "8vo semestre",
    vegano: "No", restriccionAlimentaria: "No",
    cv: "#", linkedin: "", github: "",
    estadoRegistro: 3,
  },
];

type FiltroEstado = 1 | 2 | 3;

const FILTROS: { valor: FiltroEstado; label: string; bg: string; activeBg: string }[] = [
  { valor: 1, label: "En revisión", bg: "bg-yellow-100 text-yellow-700", activeBg: "bg-yellow-400 text-yellow-900" },
  { valor: 2, label: "Aceptadas",   bg: "bg-green-100 text-green-700",  activeBg: "bg-green-500 text-white" },
  { valor: 3, label: "Rechazadas",  bg: "bg-red-100 text-red-700",      activeBg: "bg-red-500 text-white" },
];

export default function PageAdmin() {
  const [participantes, setParticipantes] = useState<Participante[]>(participantesEjemplo);
  const [expandida, setExpandida] = useState<number | null>(null);
  const [filtro, setFiltro] = useState<FiltroEstado>(1);

  const cambiarEstado = (id: number, nuevoEstado: number) => {
    setParticipantes(prev =>
      prev.map(p => p.id === id ? { ...p, estadoRegistro: nuevoEstado } : p)
    );
  };

  const participantesFiltrados = participantes.filter(p => p.estadoRegistro === filtro);

  return (
    <div className="p-8">
        <h1 className="font-high-cruiser text-6xl text-[#4A0C32] mb-2">
          Panel de administración de participantes
        </h1>
        <p className="text-[#4A0C32]/60 text-sm mb-6">Solicitudes de registro — Hack4Her</p>

        {/* Botones de filtro */}
        <div className="flex gap-3 mb-4">
          {FILTROS.map(({ valor, label, bg, activeBg }) => (
            <button
              key={valor}
              onClick={() => { setFiltro(valor); setExpandida(null); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filtro === valor ? activeBg : bg}`}
            >
              {label}
              <span className="ml-2 opacity-70">
                ({participantes.filter(p => p.estadoRegistro === valor).length})
              </span>
            </button>
          ))}
        </div>

        {/* Tabla */}
        <div className="bg-[#C4649F]/60 rounded-lg overflow-hidden">
          <div className="flex">

            {/* Tabla scrolleable */}
            <div className="flex-1 overflow-x-auto">

              {/* Header */}
              <div className="flex min-w-[900px] px-4 py-3 border-b border-white/10 text-white/60 text-xs font-semibold uppercase gap-4">
                <div className="w-44 shrink-0">Nombre</div>
                <div className="w-28 shrink-0">Nacimiento</div>
                <div className="w-24 shrink-0">Mayor de edad</div>
                <div className="w-28 shrink-0">Permiso</div>
                <div className="w-32 shrink-0">País universidad</div>
                <div className="w-44 shrink-0">Universidad</div>
                <div className="w-24 shrink-0">CV</div>
              </div>

              {/* Filas */}
              {participantesFiltrados.length === 0 ? (
                <div className="px-4 py-8 text-center text-white/40 text-sm">
                  No hay participantes en esta categoría.
                </div>
              ) : (
                participantesFiltrados.map((p) => (
                  <div key={p.id} className="border-b border-white/10 last:border-0">

                    {/* Fila principal */}
                    <div
                      className="flex min-w-[900px] px-4 py-4 items-center gap-4 hover:bg-white/5 cursor-pointer transition-colors"
                      onClick={() => setExpandida(expandida === p.id ? null : p.id)}
                    >
                      <div className="w-44 shrink-0">
                        <p className="text-white font-medium text-sm">{p.nombre} {p.apellidos}</p>
                      </div>
                      <div className="w-28 shrink-0">
                        <p className="text-white/70 text-sm">{p.fechaNacimiento}</p>
                      </div>
                      <div className="w-24 shrink-0">
                        {p.mayorEdad
                          ? <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">Sí</span>
                          : <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-700">No</span>
                        }
                      </div>
                      <div className="w-28 shrink-0">
                        {!p.mayorEdad ? (
                          p.permisoMenoredad
                            ? <a href={p.permisoMenoredad} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline text-xs">Ver permiso</a>
                            : <span className="text-red-300 text-xs">Sin permiso</span>
                        ) : (
                          <span className="text-white/30 text-xs">—</span>
                        )}
                      </div>
                      <div className="w-32 shrink-0">
                        <p className="text-white/70 text-sm">{p.pais}</p>
                      </div>
                      <div className="w-44 shrink-0">
                        <p className="text-white/70 text-sm truncate">{p.universidad}</p>
                      </div>
                      <div className="w-24 shrink-0">
                        <a href={p.cv} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline text-xs">Ver CV</a>
                      </div>
                    </div>

                    {/* Fila expandida */}
                    {expandida === p.id && (
                      <div className="px-6 pb-6 pt-4 bg-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

                        <div className="space-y-3">
                          <h3 className="text-white font-semibold border-b border-white/10 pb-1">Datos personales</h3>
                          <div><p className="text-white/50 text-xs">Correo</p><p className="text-white">{p.correo}</p></div>
                          <div><p className="text-white/50 text-xs">Teléfono</p><p className="text-white">{p.telefono}</p></div>
                          <div><p className="text-white/50 text-xs">Género</p><p className="text-white">{p.genero}</p></div>
                          <div><p className="text-white/50 text-xs">Talla</p><p className="text-white">{p.talla}</p></div>
                          {p.pais === "México" && (
                            <div><p className="text-white/50 text-xs">Estado</p><p className="text-white">{p.estado}</p></div>
                          )}
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-white font-semibold border-b border-white/10 pb-1">Datos académicos</h3>
                          <div><p className="text-white/50 text-xs">Carrera</p><p className="text-white">{p.carrera}</p></div>
                          <div><p className="text-white/50 text-xs">Semestre</p><p className="text-white">{p.semestre}</p></div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-white font-semibold border-b border-white/10 pb-1">Preferencias y contacto</h3>
                          <div><p className="text-white/50 text-xs">¿Vegano/a?</p><p className="text-white">{p.vegano}</p></div>
                          <div><p className="text-white/50 text-xs">Restricción alimentaria</p><p className="text-white">{p.restriccionAlimentaria}</p></div>
                          {p.especificacionRestriccion && (
                            <div><p className="text-white/50 text-xs">Especificación</p><p className="text-white">{p.especificacionRestriccion}</p></div>
                          )}
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
                ))
              )}
            </div>

            {/* Columna de acciones fija */}
            <div className="shrink-0 w-36 border-l border-white/10">
              <div className="px-4 py-3 border-b border-white/10 text-white/60 text-xs font-semibold uppercase">
                Acciones
              </div>

              {/* Columna de acciones fija — solo en "En revisión" */}
              {filtro === 1 && (
                <div className="shrink-0 w-36 border-l border-white/10">
                  <div className="px-4 py-3 border-b border-white/10 text-white/60 text-xs font-semibold uppercase">
                    Acciones
                  </div>

                  {participantesFiltrados.length === 0 ? (
                    <div className="py-8" />
                  ) : (
                    participantesFiltrados.map((p) => (
                    <div key={p.id} className="border-b border-white/10 last:border-0">
                      <div className="px-3 py-4 flex flex-col gap-2 justify-center min-h-[64px]">
                        <button
                          onClick={() => cambiarEstado(p.id, 2)}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded-md transition-colors"
                        >
                          Aceptar
                        </button>
                        <button
                          onClick={() => cambiarEstado(p.id, 3)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-md transition-colors"
                        >
                          Rechazar
                        </button>
                      </div>
                      {expandida === p.id && <div className="py-6 px-3 bg-white/5 min-h-[200px]" />}
                    </div>
                  ))
                )}
              </div>
            )}
            </div>

          </div>
        </div>

   
      
    </div>
  );
}