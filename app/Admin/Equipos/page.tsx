'use client';
import { useState } from 'react';
import { useEquiposData } from '../../hooks/utils/useEquiposData';
import { useAsistenciaIndData } from "@/app/hooks/utils/useAsistenciaIndData";

type FiltroEstado = "Incompleto" | "Aceptado";

const FILTROS: { valor: FiltroEstado; label: string; bg: string; activeBg: string }[] = [
  { valor: "Incompleto", label: "Incompletos", bg: "bg-yellow-100 text-yellow-700", activeBg: "bg-yellow-400 text-yellow-900" },
  { valor: "Aceptado", label: "Aceptados", bg: "bg-green-100 text-green-700", activeBg: "bg-green-500 text-white" },
];

const getToken = (): string | undefined =>
  document.cookie.split("; ").find(row => row.startsWith("token="))?.split("=")[1];

export default function PagePanel() {
  const { retos } = useAsistenciaIndData();
  const { DATA, loading, refetch } = useEquiposData();
  const [filtro, setFiltro] = useState<FiltroEstado>("Incompleto");
  const [expandida, setExpandida] = useState<number | null>(null);

  // Estados para eliminar integrante
  const [integranteSeleccionado, setIntegranteSeleccionado] = useState<string>("");
  const [loadingAccion, setLoadingAccion] = useState(false);
  const [errorAccion, setErrorAccion] = useState("");
  const [exitoAccion, setExitoAccion] = useState("");

  // Estados para asignar/cambiar reto
  const [retoSeleccionado, setRetoSeleccionado] = useState<number | "">("");
  const [loadingReto, setLoadingReto] = useState(false);
  const [errorReto, setErrorReto] = useState("");
  const [exitoReto, setExitoReto] = useState("");

  if (loading) return <div className="p-8 text-[#4A0C32]">Cargando...</div>;

  const participantesFiltrados = DATA.filter(p => p.estatus === filtro);

  const resetAccion = () => {
    setIntegranteSeleccionado("");
    setErrorAccion("");
    setExitoAccion("");
  };

  const resetReto = () => {
    setRetoSeleccionado("");
    setErrorReto("");
    setExitoReto("");
  };

  const handleExpandir = (id: number) => {
    setExpandida(expandida === id ? null : id);
    resetAccion();
    resetReto();
  };

  const handleEliminarIntegrante = async (equipoId: number) => {
    if (!integranteSeleccionado) {
      setErrorAccion("Selecciona una integrante para eliminar.");
      return;
    }

    setLoadingAccion(true);
    setErrorAccion("");
    setExitoAccion("");

    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const res = await fetch(`${BASE}/equipos/${equipoId}/integrantes`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuarioBaseId: integranteSeleccionado }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorAccion(data.error || "Error al eliminar integrante.");
        return;
      }

      setExitoAccion("Integrante eliminada correctamente.");
      await refetch();
      setTimeout(() => resetAccion(), 1500);

    } catch {
      setErrorAccion("Error de conexión. Intenta de nuevo.");
    } finally {
      setLoadingAccion(false);
    }
  };

  const handleAsignarReto = async (equipoId: number, tieneRetoAsignado: boolean) => {
  if (!tieneRetoAsignado && !retoSeleccionado) {
    setErrorReto("Selecciona un reto para asignar.");
    return;
  }

  setLoadingReto(true);
  setErrorReto("");
  setExitoReto("");

  try {
    const BASE = process.env.NEXT_PUBLIC_API_URL;
    const token = getToken();

    // Si ya tiene reto → cambia a la opción restante automáticamente
    // Si no tiene reto → asigna el seleccionado
    const endpoint = tieneRetoAsignado ? "actualizar-reto" : "asignar-reto";
    const body = tieneRetoAsignado
      ? { equipo_id: equipoId }
      : { equipo_id: equipoId, reto_definitivo_id: retoSeleccionado };

    const res = await fetch(`${BASE}/retos/${endpoint}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      setErrorReto(data.error || "Error al asignar el reto.");
      return;
    }

    setExitoReto(tieneRetoAsignado ? "Reto actualizado correctamente." : "Reto asignado correctamente.");
    await refetch();
    setTimeout(() => resetReto(), 1500);

  } catch {
    setErrorReto("Error de conexión. Intenta de nuevo.");
  } finally {
    setLoadingReto(false);
  }
};

  return (
    <div className="p-8">
      <h1 className="font-high-cruiser text-6xl text-[#4A0C32] mb-2">
        panel de administración de equipos
      </h1>
      <p className="text-[#4A0C32]">Gestión de equipos</p>
      <div className="w-full h-0.5 bg-[#4A0C32] rounded-full mx-auto my-3" />

      <div className="flex pb-10 gap-6">
        {retos.map((reto, index) => (
          <div key={index} className="bg-white border-3 rounded-lg p-4 flex items-center justify-between border-[#C4649F]">
            <p className="text-[#4A0C32] font-medium text-sm flex-1 mr-4">{reto.reto}</p>
            <div className="bg-[#C4649F] rounded-full w-10 h-10 flex items-center justify-center">
              <p className="text-white font-bold text-sm">{reto.equipos_asignados}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de filtro */}
      <div className="flex gap-3 mb-4">
        {FILTROS.map(({ valor, label, bg, activeBg }) => (
          <button
            key={valor}
            onClick={() => setFiltro(valor)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filtro === valor ? activeBg : bg}`}
          >
            {label}
            <span className="ml-2 opacity-70">({DATA.filter(e => e.estatus === valor).length})</span>
          </button>
        ))}
      </div>

      {/* Tabla */}
      <div className="border-3 border-[#C4649F] bg-white rounded-lg overflow-hidden">
        <div className="flex-1 overflow-x-auto">

          {/* Header */}
          <div className="flex min-w-[900px] px-4 py-3 border-b-3 border-[#C4649F] text-[#C4649F] text-xs font-semibold uppercase gap-4">
            <div className="w-44 shrink-0">Nombre del equipo</div>
            <div className="w-32 shrink-0">Código</div>
            <div className="w-32 shrink-0">Líder</div>
            <div className="w-32 shrink-0">Participante 2</div>
            <div className="w-32 shrink-0">Participante 3</div>
            <div className="w-32 shrink-0">Participante 4</div>
            <div className="w-32 shrink-0">Fecha de creación</div>
            <div className="w-32 shrink-0">Fecha de validación</div>
            <div className="w-32 shrink-0">Reto</div>
          </div>

          {/* Filas */}
          {participantesFiltrados.length === 0 ? (
            <div className="px-4 py-8 text-center text-[#C4649F] text-sm">
              No hay participantes en esta categoría.
            </div>
          ) : (
            participantesFiltrados.map((p) => {
              // Opciones disponibles según si ya tiene reto asignado o no
              const opcionesReto = p.tiene_reto_asignado
                ? [
                    // Solo mostrar la opción que NO está asignada actualmente
                    p.opcion1_reto_id !== p.reto_asignado_id
                      ? { id: p.opcion1_reto_id, nombre: p.opcion1_reto_nombre }
                      : null,
                    p.opcion2_reto_id !== p.reto_asignado_id
                      ? { id: p.opcion2_reto_id, nombre: p.opcion2_reto_nombre }
                      : null,
                  ].filter(Boolean)
                : [
                    p.opcion1_reto_id ? { id: p.opcion1_reto_id, nombre: p.opcion1_reto_nombre } : null,
                    p.opcion2_reto_id ? { id: p.opcion2_reto_id, nombre: p.opcion2_reto_nombre } : null,
                  ].filter(Boolean);

              return (
                <div key={p.id} className="border-b border-[#C4649F]/20 last:border-0">

                  {/* Fila principal */}
                  <div
                    className="flex min-w-[900px] px-4 min-h-[64px] items-center gap-4 hover:bg-pink-50 cursor-pointer transition-colors"
                    onClick={() => handleExpandir(p.id)}
                  >
                    <div className="w-44 shrink-0"><p className="text-black font-medium text-sm">{p.nombre}</p></div>
                    <div className="w-32 shrink-0"><p className="text-black font-medium text-sm">{p.codigo}</p></div>
                    <div className="w-32 shrink-0"><p className="text-black font-medium text-sm">{p.lider}</p></div>
                    <div className="w-32 shrink-0"><p className="text-black font-medium text-sm">{p.participante2 ?? "—"}</p></div>
                    <div className="w-32 shrink-0"><p className="text-black font-medium text-sm">{p.participante3 ?? "—"}</p></div>
                    <div className="w-32 shrink-0"><p className="text-black font-medium text-sm">{p.participante4 ?? "—"}</p></div>
                    <div className="w-32 shrink-0">
                      <p className="text-black font-medium text-sm">
                        {new Date(p.fecha_creacion).toLocaleString("es-MX", { timeZone: "UTC", day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                    <div className="w-32 shrink-0">
                      <p className="text-black font-medium text-sm">
                        {p.fecha_validacion
                          ? new Date(p.fecha_validacion).toLocaleString("es-MX", { timeZone: "UTC", day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })
                          : "—"}
                      </p>
                    </div>
                    {/* Columna reto */}
                    <div className="w-32 shrink-0">
                      {p.tiene_reto_asignado ? (
                        <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                          {p.reto_asignado_nombre}
                        </span>
                      ) : (
                        <span className="inline-block bg-gray-100 text-gray-400 text-xs font-semibold px-2 py-1 rounded-full">
                          Sin reto
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Panel expandido */}
                  {expandida === p.id && (
                    <div className="px-6 pb-6 pt-4 bg-white/5 text-sm space-y-4">

                      {/* Sección asignar / cambiar reto */}
                      {p.tiene_dos_opciones && (
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-3">
                          <p className="text-purple-700 font-semibold text-xs">
                            {p.tiene_reto_asignado ? "Cambiar reto asignado" : "Asignar reto"}
                          </p>

                          {p.tiene_reto_asignado && (
                            <p className="text-purple-500 text-xs">
                              Reto actual: <span className="font-semibold">{p.reto_asignado_nombre}</span>
                            </p>
                          )}

                          <select
                            value={retoSeleccionado}
                            onChange={(e) => setRetoSeleccionado(Number(e.target.value))}
                            className="w-full border border-purple-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                          >
                            <option value="">Selecciona un reto</option>
                            {opcionesReto.map(o => (
                              <option key={o!.id} value={o!.id!}>{o!.nombre}</option>
                            ))}
                          </select>

                          {errorReto && <p className="text-red-500 text-xs">{errorReto}</p>}
                          {exitoReto && <p className="text-green-600 text-xs">{exitoReto}</p>}

                          <div className="flex gap-2">
                            <button
                              onClick={() => handleAsignarReto(p.id, p.tiene_reto_asignado)}
                              disabled={loadingReto}
                              className="px-4 py-2 rounded-lg bg-purple-500 text-white font-semibold text-xs hover:bg-purple-600 transition-colors disabled:opacity-40"
                            >
                              {loadingReto ? "Guardando..." : p.tiene_reto_asignado ? "Cambiar reto" : "Asignar reto"}
                            </button>
                            <button
                              onClick={resetReto}
                              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 font-semibold text-xs hover:bg-gray-200 transition-colors"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Sección eliminar integrante */}
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-3">
                        <p className="text-red-700 font-semibold text-xs">Eliminar integrante</p>

                        <select
                          value={integranteSeleccionado}
                          onChange={(e) => setIntegranteSeleccionado(e.target.value)}
                          className="w-full border border-red-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                          <option value="">Selecciona una integrante</option>
                          {[
                            { id: p.participante2_id, nombre: p.participante2 },
                            { id: p.participante3_id, nombre: p.participante3 },
                            { id: p.participante4_id, nombre: p.participante4 },
                          ]
                            .filter(i => i.id && i.nombre)
                            .map(i => (
                              <option key={i.id} value={i.id!}>{i.nombre}</option>
                            ))
                          }
                        </select>

                        {errorAccion && <p className="text-red-500 text-xs">{errorAccion}</p>}
                        {exitoAccion && <p className="text-green-600 text-xs">{exitoAccion}</p>}

                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEliminarIntegrante(p.id)}
                            disabled={loadingAccion}
                            className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold text-xs hover:bg-red-600 transition-colors disabled:opacity-40"
                          >
                            {loadingAccion ? "Eliminando..." : "Confirmar"}
                          </button>
                          <button
                            onClick={resetAccion}
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 font-semibold text-xs hover:bg-gray-200 transition-colors"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}