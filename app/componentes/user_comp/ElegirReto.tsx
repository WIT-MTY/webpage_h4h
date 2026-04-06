'use client'
import { useState } from 'react';
import { useInfoRetosData } from '@/app/hooks/utils/useInfoRetosData';
interface EstadoProps {
    tieneReto: boolean;
    esLider: boolean;
}

interface Reto {
    id: number;
    nombre: string;
    descripcion: string;
}

const ElegirReto = ({ tieneReto: tieneRetoInicial, esLider }: EstadoProps) => {
    const { DATA, loading } = useInfoRetosData();
    const [tieneReto, setTieneReto] = useState(tieneRetoInicial);
    const [opcion1, setOpcion1] = useState<Reto | null>(null);
    const [opcion2, setOpcion2] = useState<Reto | null>(null);
    const [error, setError] = useState('');

    const handleSeleccionar = (reto: Reto, opcion: 1 | 2) => {
        if (opcion === 1) {
            // Si ya es opcion2, quitarlo de ahí
            if (opcion2?.id === reto.id) setOpcion2(null);
            setOpcion1(reto);
        } else {
            // Si ya es opcion1, quitarlo de ahí
            if (opcion1?.id === reto.id) setOpcion1(null);
            setOpcion2(reto);
        }
        setError('');
    };

    const handleConfirmar = () => {
        if (!opcion1 || !opcion2) {
            setError('Debes seleccionar dos opciones de reto.');
            return;
        }
        if (opcion1.id === opcion2.id) {
            setError('Las dos opciones deben ser diferentes.');
            return;
        }

        // Simulación — reemplaza con fetch al backend
        setTieneReto(true);

        // Cuando conectes el backend:
        // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/equipos/retos`, {
        //     method: "POST",
        //     body: JSON.stringify({ opcion1_id: opcion1.id, opcion2_id: opcion2.id }),
        //     headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
        // });
    };

    const getEstadoReto = (reto: Reto) => {
        if (opcion1?.id === reto.id) return 1;
        if (opcion2?.id === reto.id) return 2;
        return null;
    };

    if (loading) return <div className="p-4 text-[#4A0C32] text-sm">Cargando retos...</div>;

    return (
        <div className="bg-white border-2 border-[#C4649F] rounded-2xl overflow-hidden w-full max-w-xl">

            <div className="bg-[#C4649F] px-6 py-4">
                <h1 className="text-white font-bold text-xl">
                    {tieneReto ? "Retos seleccionados" : "Selección de reto"}
                </h1>
            </div>

            <div className="p-6">
                {tieneReto ? (

                    // Vista: ya tiene retos seleccionados
                    <div className="space-y-4">
                        <p className="text-[#4A0C32]/60 text-sm">Tu equipo ha seleccionado las siguientes opciones de reto:</p>

                        <div className="space-y-2">
                            {[
                                { label: "Primera opción", reto: opcion1 },
                                { label: "Segunda opción", reto: opcion2 },
                            ].map(({ label, reto }, i) => (
                                <div key={i} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0 gap-4">
                                    <p className="text-[#4A0C32]/60 text-sm shrink-0">{label}</p>
                                    <div className="text-right">
                                        <p className="text-[#4A0C32] font-medium text-sm">{reto?.nombre}</p>
                                        <p className="text-[#4A0C32]/50 text-xs mt-0.5">{reto?.descripcion}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                ) : (

                    // Vista: selección de retos
                    <div className="space-y-5">

                        {!esLider ? (
                            <p className="text-[#4A0C32]/50 text-sm bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
                                Solo la líder del equipo puede seleccionar las opciones de reto.
                            </p>
                        ) : (
                            <div className="space-y-2">
                            <p className="text-[#4A0C32]/50 text-sm bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
                                Solo la líder del equipo puede seleccionar las opciones de reto.
                            </p>
                            <p className="text-[#4A0C32]/50 text-sm">
                                Selecciona dos retos en orden de preferencia. Comenta con tu equipo antes de confirmar.
                            </p>
                            </div>
                        )}

                        {/* Lista de retos */}
                        <div className="space-y-3">
                            {DATA.map((reto) => {
                                const estado = getEstadoReto(reto);
                                return (
                                    <div
                                        key={reto.id}
                                        className={`border rounded-lg p-4 transition-colors ${
                                            estado ? 'border-[#C4649F] bg-[#F0CEE3]/30' : 'border-gray-200'
                                        }`}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <h2 className="text-[#4A0C32] font-bold text-sm mb-1">{reto.nombre}</h2>
                                                <p className="text-[#4A0C32]/60 text-xs">{reto.descripcion}</p>
                                            </div>

                                            {esLider && (
                                                <div className="flex flex-col gap-1 shrink-0">
                                                    <button
                                                        onClick={() => handleSeleccionar(reto, 1)}
                                                        className={`px-3 py-1 text-xs rounded-full font-semibold transition-colors ${
                                                            opcion1?.id === reto.id
                                                                ? 'bg-[#C4649F] text-white'
                                                                : 'bg-gray-100 text-gray-500 hover:bg-[#F0CEE3] hover:text-[#4A0C32]'
                                                        }`}
                                                    >
                                                        Opción 1
                                                    </button>
                                                    <button
                                                        onClick={() => handleSeleccionar(reto, 2)}
                                                        className={`px-3 py-1 text-xs rounded-full font-semibold transition-colors ${
                                                            opcion2?.id === reto.id
                                                                ? 'bg-[#C4649F] text-white'
                                                                : 'bg-gray-100 text-gray-500 hover:bg-[#F0CEE3] hover:text-[#4A0C32]'
                                                        }`}
                                                    >
                                                        Opción 2
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Resumen de selección */}
                        {esLider && (
                            <div className="bg-[#F0CEE3]/40 rounded-lg px-4 py-3 space-y-1">
                                <div className="flex justify-between text-sm">
                                    <p className="text-[#4A0C32]/60">Primera opción (mayor preferencia):</p>
                                    <p className="text-[#4A0C32] font-medium">{opcion1?.nombre || '—'}</p>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <p className="text-[#4A0C32]/60">Segunda opción:</p>
                                    <p className="text-[#4A0C32] font-medium">{opcion2?.nombre || '—'}</p>
                                </div>
                            </div>
                        )}

                        {error && <p className="text-red-500 text-xs">{error}</p>}

                        {esLider && (
                            <button
                                onClick={handleConfirmar}
                                disabled={!opcion1 || !opcion2}
                                className="w-full py-2.5 bg-[#C4649F] text-white font-semibold text-sm rounded-lg hover:bg-[#4A0C32] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                Confirmar selección
                            </button>
                        )}

                    </div>
                )}
            </div>
        </div>
    );
}

export default ElegirReto;