'use client';
import { useState } from 'react';
import { useRetosEquipoData } from '../../hooks/utils/useRetosData';

type FiltroEstado = "Incompleto" | "Aceptado";


export default function PagePanel() {

  const { DATA, METRICA, loading } = useRetosEquipoData();
  if (loading) return <div className="p-8 text-[#4A0C32]">Cargando...</div>;

  return (
    <div className="p-8">
        
        {/* titulo */}
        <h1 className="font-high-cruiser text-6xl text-[#4A0C32] mb-2">
            panel de administración de retos
        </h1>
        <p className="text-[#4A0C32]">Gestión de retos</p>
        <div className="w-full h-0.5 bg-[#4A0C32] rounded-full mx-auto my-3">
            {/* Línea decorativa */}
        </div>
        
        <div className="flex gap-6 items-start">

        {/* Tabla */}
        <div className="border border-[#C4649F] bg-white rounded-lg overflow-hidden w-3/5">
          <div className="flex">

            {/* Tabla scrolleable */}
            <div className="flex-1 overflow-x-auto">

              {/* Header */}
              <div className="flex min-w-900px px-4 py-3 border-b-3 border-#C4649F] text-[#C4649F] text-xs font-semibold uppercase gap-4">
                <div className="w-60 shrink-0">Nombre del equipo</div>
                <div className="w-60 shrink-0">Opción 1</div>
                <div className="w-60 shrink-0">Opción 2</div>
           
              </div>

              {/* Filas */}
              {DATA.length === 0 ? (
                <div className="px-4 py-8 text-center text-[#C4649F] text-sm">
                  No hay retos registrados.
                </div>
                ) : (
                DATA.map((p) => (
                  <div key={p.id} className="border-b border-white/10 last:border-0">

                    {/* Fila principal */}
                    <div className="flex min-w-900px px-4 h-14 items-center gap-4 hover:bg-white/5 cursor-pointer transition-colors">

                      <div className="w-60 shrink-0">
                        <p className="text-black font-medium text-sm">{p.nombre}</p>
                      </div>

                      <div className="w-60 shrink-0">
                        <p className="text-black font-medium text-sm">"{p.opcion1}"</p>
                      </div>

                      <div className="w-60 shrink-0">
                        <p className="text-black font-medium text-sm">"{p.opcion2}"</p>
                      </div>

                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>

        {/* Métricas de retos */}
        <div className="w-2/5 space-y-3">
  <p className="text-[#4A0C32] font-semibold text-sm uppercase tracking-wide mb-4">
    Retos como primera opción
  </p>

  {METRICA.map((r) => (
    <div key={r.reto_nombre} className="bg-white border border-[#C4649F]/30 rounded-lg p-4 flex items-center justify-between">
      
      <p className="text-[#4A0C32] font-medium text-sm flex-1 mr-4">"{r.reto_nombre}"</p>

      <div className="flex items-center gap-2 shrink-0">
        <div className="bg-[#C4649F] rounded-full w-10 h-10 flex items-center justify-center">
          <p className="text-white font-bold text-sm">{r.cantidad}</p>
        </div>
        <p className="text-[#4A0C32]/60 text-xs">equipos</p>
      </div>

    </div>
  ))}
</div>

        </div>

        
      </div>

   
      
    
  );
}