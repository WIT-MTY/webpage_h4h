'use client'
import { useState } from 'react';

interface EstadoProps {
    tieneEquipo: boolean;
}

const CrearEquipo = ({ tieneEquipo: tieneEquipoInicial }: EstadoProps) => {

    const [nombreEquipo, setNombreEquipo] = useState('');
    const [codigoEquipo, setCodigoEquipo] = useState('');
    const [tieneEquipo, setTieneEquipo] = useState(tieneEquipoInicial);
    const [equipoCreado, setEquipoCreado] = useState<{ nombre: string; codigo: string } | null>(null);
    const [codigoGenerado, setCodigoGenerado] = useState('');
    const [mostrarCodigo, setMostrarCodigo] = useState(false);

    const handleCrearEquipo = () => {
        if (!nombreEquipo.trim()) return;

        // Simulación — reemplaza con fetch al backend
        const codigoAleatorio = Math.random().toString(36).substring(2, 8).toUpperCase();
        setCodigoGenerado(codigoAleatorio);
        setMostrarCodigo(true);

        // Cuando conectes el backend:
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/equipos`, {
        //     method: "POST",
        //     body: JSON.stringify({ nombre: nombreEquipo }),
        //     headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
        // });
        // const data = await res.json();
        // setCodigoGenerado(data.codigo);
        // setMostrarCodigo(true);
    };

    const handleConfirmarEquipo = () => {
        setEquipoCreado({ nombre: nombreEquipo, codigo: codigoGenerado });
        setTieneEquipo(true);
        setMostrarCodigo(false);
    };

    const handleUnirse = () => {
        if (!codigoEquipo.trim()) return;

        // Simulación — reemplaza con fetch al backend
        setEquipoCreado({ nombre: "Equipo encontrado", codigo: codigoEquipo });
        setTieneEquipo(true);

        // Cuando conectes el backend:
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/equipos/unirse`, {
        //     method: "POST",
        //     body: JSON.stringify({ codigo: codigoEquipo }),
        //     headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
        // });
        // if (res.ok) setTieneEquipo(true);
    };

    return (
        <div className="bg-white border-2 border-[#C4649F] rounded-2xl overflow-hidden w-full max-w-xl">
            
            <div className="bg-[#C4649F] px-6 py-4">
                <h1 className="text-white font-bold text-xl">
                    {tieneEquipo ? "Mi equipo" : "Equipos"}
                </h1>
            </div>

            <div className="p-6">
                {tieneEquipo ? (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[#4A0C32] font-bold text-2xl">{equipoCreado?.nombre || "Equipo X"}</h2>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                                Incompleto
                            </span>
                        </div>

                        <div className="bg-[#F0CEE3]/40 rounded-lg px-4 py-3 flex items-center justify-between">
                            <p className="text-[#4A0C32]/60 text-sm">Código de equipo</p>
                            <p className="text-[#4A0C32] font-bold tracking-widest text-sm">{equipoCreado?.codigo || "—"}</p>
                        </div>

                        <div>
                            <p className="text-[#4A0C32] font-semibold text-sm mb-2">Integrantes</p>
                            <div className="space-y-2">
                                {["Líder", "Integrante 2", "Integrante 3", "Integrante 4"].map((label, i) => (
                                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                                        <p className="text-[#4A0C32]/60 text-sm">{label}</p>
                                        {i === 0
                                            ? <p className="text-[#4A0C32] font-medium text-sm">Tú</p>
                                            : <span className="text-xs text-gray-400 italic">Lugar disponible</span>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                ) : mostrarCodigo ? (

                    // Vista: código generado
                    <div className="space-y-4 text-center">
                        <p className="text-[#4A0C32] font-semibold">¡Equipo creado!</p>
                        <p className="text-[#4A0C32]/60 text-sm">Comparte este código con tus compañeras para que se unan:</p>
                        <div className="bg-[#F0CEE3]/40 rounded-lg px-6 py-4">
                            <p className="text-[#4A0C32] font-bold tracking-widest text-3xl">{codigoGenerado}</p>
                        </div>
                        <button
                            onClick={handleConfirmarEquipo}
                            className="w-full py-2.5 bg-[#C4649F] text-white font-semibold text-sm rounded-lg hover:bg-[#4A0C32] transition-colors"
                        >
                            Continuar
                        </button>
                    </div>

                ) : (

                    // Vista: no tiene equipo
                    <div className="space-y-5">
                        <p className="text-[#4A0C32]/50 text-sm">
                            Los equipos deben tener exactamente <span className="font-semibold text-[#4A0C32]/60">4 integrantes</span> para ser válidos. Quien cree el equipo será asignada como líder. El nombre del equipo debe ser apropiado y respetuoso.
                        </p>
                        <p className="text-[#4A0C32]/50 text-sm">
                            ¿Sin equipo? Conéctate en nuestro{' '}
                            <a className="text-[#C4649F] underline hover:text-[#4A0C32] transition-colors" href="https://discord.gg/e5ENU6DDe">Discord</a>.
                        </p>

                        <div className="space-y-2">
                            <p className="text-[#4A0C32] font-semibold text-sm">Crear nuevo equipo</p>
                            <input
                                type="text"
                                placeholder="Nombre del equipo"
                                value={nombreEquipo}
                                onChange={(e) => setNombreEquipo(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-[#C4649F]/30 text-[#4A0C32] placeholder-gray-400 text-sm outline-none focus:border-[#C4649F] transition-colors"
                            />
                            <button
                                onClick={handleCrearEquipo}
                                className="w-full py-2.5 bg-[#C4649F] text-white font-semibold text-sm rounded-lg hover:bg-[#4A0C32] transition-colors"
                            >
                                Crear equipo
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-gray-200" />
                            <p className="text-gray-400 text-xs">o</p>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        <div className="space-y-2">
                            <p className="text-[#4A0C32] font-semibold text-sm">Unirse a un equipo existente</p>
                            <input
                                type="text"
                                placeholder="Ingresa el código del equipo"
                                value={codigoEquipo}
                                onChange={(e) => setCodigoEquipo(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-[#C4649F]/30 text-[#4A0C32] placeholder-gray-400 text-sm outline-none focus:border-[#C4649F] transition-colors"
                            />
                            <button
                                onClick={handleUnirse}
                                className="w-full py-2.5 bg-white border border-[#C4649F] text-[#C4649F] font-semibold text-sm rounded-lg hover:bg-[#F0CEE3] transition-colors"
                            >
                                Unirse al equipo
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CrearEquipo;