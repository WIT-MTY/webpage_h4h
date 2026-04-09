'use client';
import { useAsistenciaData } from "@/app/hooks/utils/useAsistenciaData";

export default function PagePanel() {
    const { asistencia, cantidad, loading, error } = useAsistenciaData();

    if (loading) {
        return (
            <div className="p-8">
                <div className="text-center text-[#4A0C32]">Cargando datos...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8">
                <div className="text-center text-red-600">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="p-8">
            {/* titulo */}
            <h1 className="font-high-cruiser text-6xl text-[#4A0C32] mb-2">
                panel de administración de asistencia
            </h1>
            <p className="text-[#4A0C32]">Gestión de asistencia</p>
            <div className="w-full h-0.5 bg-[#4A0C32] rounded-full mx-auto my-3">
                {/* Línea decorativa */}
            </div>

            <div className="flex pb-10 gap-6">
            {/* Mostrar cantidad de participantes */}
            {cantidad && (
               
                <div className="bg-white border-3 rounded-lg p-4 flex items-center justify-between border-[#C4649F] transition-colors">
                    <p className="text-[#4A0C32] font-medium text-sm flex-1 mr-4">
                        Participantes que han llegado
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                        <div className="bg-[#C4649F] rounded-full w-10 h-10 flex items-center justify-center">
                            <p className="text-white font-bold text-sm">{cantidad.cantidad_participantes}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Mostrar cantidad de equipos */}
            {cantidad && (
               
                <div className="bg-white border-3 rounded-lg p-4 flex items-center justify-between border-[#C4649F] transition-colors">
                    <p className="text-[#4A0C32] font-medium text-sm flex-1 mr-4">
                        Equipos que han llegado (Completos e Incompletos)
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                        <div className="bg-[#C4649F] rounded-full w-10 h-10 flex items-center justify-center">
                            <p className="text-white font-bold text-sm">{cantidad.cantidad_equipos}</p>
                        </div>
                    </div>
                </div>
            )}
            </div>

            <div className="flex gap-6 items-start">
                {/* Tabla de Participantes */}
                <div className="border-3 border-[#C4649F] bg-white rounded-lg overflow-hidden w-1/2">
                    <div className="flex">
                        <div className="flex-1 overflow-x-auto">
                            {/* Header */}
                            <div className="flex min-w-[500px] px-4 py-3 border-b-3 border-[#C4649F] text-[#C4649F] text-xs font-semibold uppercase gap-4">
                                <div className="w-40 shrink-0">Participante</div>
                                <div className="w-40 shrink-0">Equipo</div>
                                <div className="w-40 shrink-0">Hora de llegada</div>
                            </div>

                            {/* Filas de Participantes - CORREGIDO */}
                            {!asistencia || asistencia.participantes.length === 0 ? (
                                <div className="px-4 py-8 text-center text-[#C4649F] text-sm">
                                    No hay participantes registrados.
                                </div>
                            ) : (
                                asistencia.participantes.map((participante, index) => (
                                    <div key={index} className="border-b border-[#C4649F]/20 last:border-0 hover:bg-pink-50 transition-colors">
                                        <div className="flex min-w-[500px] px-4 h-14 items-center gap-4">
                                            <div className="w-40 shrink-0">
                                                <p className="text-black font-medium text-sm">
                                                    {participante.nombre} {participante.apellido}
                                                </p>
                                            </div>
                                            <div className="w-40 shrink-0">
                                                <p className="text-black text-sm">
                                                    {participante.equipo}
                                                </p>
                                            </div>
                                            
                                            <div className="w-40 shrink-0">
                                                <p className="text-black text-sm">
                                                    {participante.hora_llegada 
                                                        ? new Date(participante.hora_llegada).toLocaleTimeString() 
                                                        : '---'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Tabla de Equipos */}
                <div className="border-3 border-[#C4649F] bg-white rounded-lg overflow-hidden w-1/2">
                    <div className="flex">
                        <div className="flex-1 overflow-x-auto">
                            {/* Header */}
                            <div className="flex min-w-[300px] px-4 py-3 border-b-3 border-[#C4649F] text-[#C4649F] text-xs font-semibold uppercase gap-4">
                                <div className="w-40 shrink-0">Nombre del Equipo</div>
                                <div className="w-40 shrink-0">Cantidad</div>
                            </div>

                            {/* Filas de Equipos - CORREGIDO */}
                            {!asistencia || asistencia.equipos.length === 0 ? (
                                <div className="px-4 py-8 text-center text-[#C4649F] text-sm">
                                    No hay equipos registrados.
                                </div>
                            ) : (
                                asistencia.equipos.map((equipo, index) => (
                                    <div key={index} className="border-b border-[#C4649F]/20 last:border-0 hover:bg-pink-50 transition-colors">
                                        <div className="flex min-w-[300px] px-4 h-14 items-center gap-4">
                                            <div className="w-40 shrink-0">
                                                <p className="text-black font-medium text-sm">
                                                    {equipo.nombre}
                                                </p>
                                            </div>
                                            <div className="w-40 shrink-0">
                                                <p className="text-black text-sm">
                                                    {equipo.total} / 4
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}