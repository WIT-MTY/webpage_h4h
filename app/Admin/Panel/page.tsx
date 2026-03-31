'use client';
import { useState } from 'react';
import { useParticipantesData } from '@/app/hooks/utils/useParticipantesData';

type FiltroEstado = "Pendiente" | "Aceptado" | "Rechazado";

const FILTROS: { valor: FiltroEstado; label: string; bg: string; activeBg: string }[] = [
  { valor: "Pendiente", label: "Pendientes", bg: "bg-yellow-100 text-yellow-700", activeBg: "bg-yellow-400 text-yellow-900" },
  { valor: "Aceptado", label: "Aceptadas", bg: "bg-green-100 text-green-700", activeBg: "bg-green-500 text-white" },
  { valor: "Rechazado", label: "Rechazadas", bg: "bg-red-100 text-red-700", activeBg: "bg-red-500 text-white" },
];

export default function PagePanel() {

  const { DATA, loading } = useParticipantesData();
  const [expandida, setExpandida] = useState<number | null>(null);
  const [filtro, setFiltro] = useState<FiltroEstado>("Pendiente");
  const [loadingId, setLoadingId] = useState<number | null>(null);
  if (loading) return <div className="p-8 text-[#4A0C32]">Cargando...</div>;

  const participantesFiltrados = DATA.filter(p => p.estatus === filtro);

  // Calcula si es mayor de edad
  const esMayorEdad = (fechaNacimiento: string): boolean => {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    return edad >= 18;
  };


  // actualizar estatus de participante  
  /*const handleStatusUpdate = async (id: number, nuevoEstatus: number) => {
  setLoadingId(id); // Bloqueamos el botón visualmente
  try {
    const token = document.cookie
      .split("; ")
      .find(row => row.startsWith("token="))
      ?.split("=")[1];

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/participantes/${id}/estatus`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ estatus: nuevoEstatus }),
    });
    console.log("URL:", `${process.env.NEXT_PUBLIC_API_URL}/participantes/${id}/estatus`);
    if (!response.ok) throw new Error("Error en la petición");


    alert("Estado actualizado correctamente");
    
  } catch (error) {
    console.error(error);
    alert("Hubo un error al procesar la solicitud");
  } finally {
    setLoadingId(null); // Liberamos el estado de carga
  }
};*/
  


  return (
    <div className="p-8">
        
        {/* titulo */}
        <h1 className="font-high-cruiser text-6xl text-[#4A0C32] mb-2">
            panel de administración de equipos
        </h1>
        <p className="text-[#4A0C32]">Gestión de solicitudes de registro de participantes</p>
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
                <div className="w-44 shrink-0">Nombre</div>
                <div className="w-28 shrink-0">Nacimiento</div>
                <div className="w-24 shrink-0">Mayor de edad</div>
                
                <div className="w-32 shrink-0">País universidad</div>
                <div className="w-44 shrink-0">Universidad</div>
                <div className="w-24 shrink-0">CV</div>
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
                      onClick={() => setExpandida(expandida === p.id ? null : p.id)}
                    >
                      <div className="w-44 shrink-0">
                        <p className="text-black font-medium text-sm">{p.nombre} {p.apellido}</p>
                      </div>
                      <div className="w-32 shrink-0">
                        <p className="text-black text-sm">
                          {new Date(p.fecha_nacimiento).toLocaleDateString('es-MX', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                          })}
                        </p>
                      </div>
                      

                      <div className="w-28 shrink-0">
                        {!esMayorEdad(p.fecha_nacimiento) ? (
                        <span className="bg-red-200 text-red-900 text-xs font-bold px-2 py-0.5 rounded-full">No</span>
                      ) : (
                        <span className="bg-[#0D543D]/20 text-[#0D543D] text-xs font-bold px-2 py-0.5 rounded-full">Sí</span>
                      )}
                      </div>


                      <div className="w-32 shrink-0">
                        <p className="text-black text-sm">{p.pais}</p>
                      </div>

                      <div className="w-44 shrink-0">
                        <p className="text-black text-sm truncate">{p.universidad_mexico || p.universidad_extranjera}</p>
                      </div>
                      <div className="w-24 shrink-0">
                        <a href={p.cv_url} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline text-xs">Ver CV</a>
                      </div>
                    </div>

                    {/* Fila expandida */}
                    {expandida === p.id && (
                      <div className="px-6 pb-6 pt-4 bg-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

                        <div className="space-y-3">
                          <h3 className="text-[#C4649F] font-semibold border-b border-[#C4649F] pb-1">Datos personales</h3>
                          <div><p className="text-[#C4649F] text-xs">Correo</p><p className="text-black">{p.email}</p></div>
                          <div><p className="text-[#C4649F] text-xs">Teléfono</p><p className="text-black">{p.telefono}</p></div>
                          <div><p className="text-[#C4649F] text-xs">Género</p><p className="text-black">{p.genero}</p></div>
                          <div><p className="text-[#C4649F] text-xs">Talla de</p><p className="text-black">{p.talla_playera}</p></div>
                          {p.pais === "México" && (
                            <div><p className="text-[#C4649F] text-xs">Estado</p><p className="text-black">{p.estado}</p></div>
                          )}
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-[#C4649F] font-semibold border-b border-[#C4649F] pb-1">Datos académicos</h3>
                          <div><p className="text-[#C4649F] text-xs">Univeridad</p><p className="text-black">{p.universidad_mexico || p.universidad_extranjera}</p></div>
                          <div><p className="text-[#C4649F] text-xs">Carrera (afín)</p><p className="text-black">{p.carrera}</p></div>
                          <div><p className="text-[#C4649F] text-xs">Semestre</p><p className="text-black">{p.semestre}</p></div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-[#C4649F] font-semibold border-b border-[#C4649F] pb-1">Preferencias y contacto</h3>
                          
                          
                          <div><p className="text-[#C4649F] text-xs">¿Vegano/a?</p><p className="text-black">{p.vegana ? "Sí" : "No"}</p></div>
                            

                          <div><p className="text-[#C4649F] text-xs">Restricción alimentaria</p><p className="text-black">{p.tiene_restriccion_alimentaria ? "Sí" : "No"}</p></div>
                          {p.detalle_restriccion_alimentaria && (
                            <div><p className="text-[#C4649F] text-xs">Especificación</p><p className="text-black">{p.detalle_restriccion_alimentaria}</p></div>
                          )}

                          <div>
                            <p className="text-[#C4649F] text-xs">LinkedIn</p>
                            {p.linkedin_url ? <a href={p.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline">Ver perfil</a> : <p className="text-black">No proporcionado</p>}
                          </div>
                          <div>
                            <p className="text-[#C4649F] text-xs">GitHub</p>
                            {p.github_url ? <a href={p.github_url} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline">Ver perfil</a> : <p className="text-black">No proporcionado</p>}
                          </div>

                        </div>

                      </div>
                    )}

                  </div>
                ))
              )}
            </div>

          {/* Columna de acciones fija — solo en Pendientes */}
          {filtro === "Pendiente" && (
            <div className="shrink-0 w-60 border-l border-[#C4649F]">
              <div className="px-4 py-3 border-b border-[#C4649F] text-[#C4649F] text-xs font-semibold uppercase">
                Acciones
              </div>
              {participantesFiltrados.length === 0 ? (
                <div className="py-8" />
              ) : (
                participantesFiltrados.map((p) => (
                  <div key={p.id} className="px-3 py-4 grid grid-cols-2 gap-2 items-center min-h-[64px]">
 {/* <button
    disabled={loadingId === p.id}
    onClick={() => handleStatusUpdate(p.id, 1)}
    className={`px-2 py-1 text-white text-[10px] font-medium rounded-md transition-all 
      ${loadingId === p.id 
        ? "bg-gray-400 cursor-not-allowed" 
        : "bg-green-600 hover:bg-green-700 active:scale-95"}`}
  >
    {loadingId === p.id ? "..." : "Aceptar"}
  </button>
  
  <button
    disabled={loadingId === p.id}
    onClick={() => handleStatusUpdate(p.id, 2)}
    className={`px-2 py-1 text-white text-[10px] font-medium rounded-md transition-all 
      ${loadingId === p.id 
        ? "bg-gray-400 cursor-not-allowed" 
        : "bg-red-600 hover:bg-red-700 active:scale-95"}`}
  >
    {loadingId === p.id ? "..." : "Rechazar"}
  </button>*/}
</div>
                ))
              )}
            </div>
          )}

          </div>
        </div>

   
      
    </div>
  );
}