'use client';
import { useState } from 'react';
import { useEquiposData } from '../../hooks/utils/useEquiposData';

type FiltroEstado = "Incompleto" | "Aceptado";

const FILTROS: { valor: FiltroEstado; label: string; bg: string; activeBg: string }[] = [
  { valor: "Incompleto", label: "Incompletos", bg: "bg-yellow-100 text-yellow-700", activeBg: "bg-yellow-400 text-yellow-900" },
  { valor: "Aceptado", label: "Aceptados", bg: "bg-green-100 text-green-700", activeBg: "bg-green-500 text-white" },
];

export default function PagePanel() {

  const { DATA, loading } = useEquiposData();
  const [expandida, setExpandida] = useState<number | null>(null);
  const [filtro, setFiltro] = useState<FiltroEstado>("Incompleto");
  const [loadingId, setLoadingId] = useState<number | null>(null);
  if (loading) return <div className="p-8 text-[#4A0C32]">Cargando...</div>;

  const participantesFiltrados = DATA.filter(p => p.estatus === filtro);



  

  return (
    <div className="p-8">
        
        {/* titulo */}
        <h1 className="font-high-cruiser text-6xl text-[#4A0C32] mb-2">
            panel de administración de equipos
        </h1>
        <p className="text-[#4A0C32]">Gestión de equipos</p>
        <div className="w-full h-0.5 bg-[#4A0C32] rounded-full mx-auto my-3">
            {/* Línea decorativa */}
        </div>
        

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
                ({DATA.filter(p => p.estatus === valor).length})
              </span>
            </button>
          ))}
        </div>

        {/* Tabla */}
        <div className="border-3 border-[#C4649F] bg-white rounded-lg overflow-hidden">
          <div className="flex">

            {/* Tabla scrolleable */}
            <div className="flex-1 overflow-x-auto">

              {/* Header */}
              <div className="flex min-w-900px px-4 py-3 border-b-3 border-#C4649F] text-[#C4649F] text-xs font-semibold uppercase gap-4">
                <div className="w-44 shrink-0">Nombre del equipo</div>
                <div className="w-32 shrink-0">Código</div>
                <div className="w-24 shrink-0">Líder</div>
                <div className="w-32 shrink-0">Participante 2</div>
                <div className="w-32 shrink-0">Participante 3</div>
                <div className="w-32 shrink-0">Participante 4</div>
                <div className="w-32 shrink-0">Fecha de creación</div>
                <div className="w-32 shrink-0">Fecha de validación</div>
              </div>

              {/* Filas */}
              {participantesFiltrados.length === 0 ? (
                <div className="px-4 py-8 text-center text-[#C4649F] text-sm">
                  No hay participantes en esta categoría.
                </div>
              ) : (
                participantesFiltrados.map((p) => (
                  <div key={p.id} className="border-b border-white/10 last:border-0">

                    {/* Fila principal */}
                    <div
                      className="flex min-w-[900px] px-4 h-14 items-center gap-4 hover:bg-white/5 cursor-pointer transition-colors"
                     
                    >

                      <div className="w-44 shrink-0">
                        <p className="text-black font-medium text-sm">{p.nombre}</p>
                      </div>

                      <div className="w-32 shrink-0">
                        <p className="text-black font-medium text-sm">{p.id}</p>
                      </div>

                      <div className="w-32 shrink-0">
                        <p className="text-black font-medium text-sm">{p.lider}</p>
                      </div>

                      <div className="w-32 shrink-0">
                        <p className="text-black font-medium text-sm">{p.participante2}</p>
                      </div>

                      <div className="w-32 shrink-0">
                        <p className="text-black font-medium text-sm">{p.participante3}</p>
                      </div>

                      <div className="w-32 shrink-0">
                        <p className="text-black font-medium text-sm">{p.participante4}</p>
                      </div>

                      <div className="w-32 shrink-0">
                        <p className="text-black font-medium text-sm">{p.fecha_creacion}</p>
                      </div>

                      <div className="w-32 shrink-0">
                        <p className="text-black font-medium text-sm">{p.fecha_validacion}</p>
                      </div>

                    </div>


                  </div>
                ))
              )}
            </div>

          

          </div>
        </div>

   
      
    </div>
  );
}