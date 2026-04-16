'use client'
import { useState } from 'react';
import { useInfoEquipoData } from '@/app/hooks/utils/useInfoEquipoData';


const CrearEquipo = () => {

    const { infoEquipo, loadingInfo, refetch } = useInfoEquipoData();

    const [nombreEquipo, setNombreEquipo] = useState('');
    const [codigoEquipo, setCodigoEquipo] = useState('');
    const [codigoGenerado, setCodigoGenerado] = useState('');
    const [mostrarCodigo, setMostrarCodigo] = useState(false);
    const [errorUnirse, setErrorUnirse] = useState('');

   const equipoActivo = infoEquipo;

    const handleCrearEquipo = async () => {
        if (!nombreEquipo.trim()) return;

        try {
            const BASE = process.env.NEXT_PUBLIC_API_URL;
            const token = document.cookie
                .split("; ")
                .find(row => row.startsWith("token="))
                ?.split("=")[1];

            const res = await fetch(`${BASE}/create`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre: nombreEquipo }),
            });

            if (!res.ok) throw new Error(`Error ${res.status}`);

            const data = await res.json();
            setCodigoGenerado(data.codigo); 
            setMostrarCodigo(true);

        } catch (error) {
            console.error('Error al crear equipo:', error);
        }
    };

    const handleConfirmarEquipo = async () => {
        setMostrarCodigo(false);
        await refetch();
    };
    
    const handleUnirse = async () => {
        if (!codigoEquipo.trim()) return;
        setErrorUnirse('');

        try {
            const BASE = process.env.NEXT_PUBLIC_API_URL;
            const token = document.cookie
                .split("; ")
                .find(row => row.startsWith("token="))
                ?.split("=")[1];

            const res = await fetch(`${BASE}/join/${codigoEquipo}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                if (res.status === 404) {
                    setErrorUnirse('El código no corresponde a ningún equipo.');
                } else if (res.status === 400) {
                setErrorUnirse('Este equipo ya está lleno.');
                }
                return;
            }

            await refetch();

        } catch (error) {
            setErrorUnirse('Ocurrió un error, intenta de nuevo.');
        }
    };

    if (loadingInfo) {
        return (
            <div className="bg-white border-2 border-[#C4649F] rounded-2xl overflow-hidden w-full max-w-xl">
                <div className="bg-[#C4649F] px-6 py-4">
                    <h1 className="text-white font-bold text-xl">Equipos</h1>
                </div>
                <div className="p-6">
                    <p className="text-[#4A0C32]/60 text-sm">Cargando...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white border-2 border-[#C4649F] rounded-2xl overflow-hidden w-full max-w-xl">
            
            <div className="bg-[#C4649F] px-6 py-4">
                <h1 className="text-white font-bold text-xl">
                    {equipoActivo ? "Mi equipo" : "Equipos"}
                </h1>
            </div>

            <div className="p-6">
                {equipoActivo ? (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[#4A0C32] font-bold text-2xl">{equipoActivo?.nombre}</h2>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                                {equipoActivo?.estatus}
                            </span>
                        </div>

                        <div className="bg-[#F0CEE3]/40 rounded-lg px-4 py-3 flex items-center justify-between">
                            <p className="text-[#4A0C32]/60 text-sm">Código de equipo</p>
                            <p className="text-[#4A0C32] font-bold tracking-widest text-sm">Pendiente *</p>
                        </div>

                        <div>
                            <p className="text-[#4A0C32] font-semibold text-sm mb-2">Integrantes</p>
                            <div className="space-y-2">
                                {[
                                    equipoActivo?.lider,
                                    equipoActivo?.participante2,
                                    equipoActivo?.participante3,
                                    equipoActivo?.participante4,
                                ].map((nombre, i) => (
                                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                                        <p className="text-[#4A0C32]/60 text-sm">
                                            {i === 0 ? "Líder" : `Integrante ${i + 1}`}
                                        </p>
                                        {nombre
                                            ? <p className="text-[#4A0C32] font-medium text-sm">{nombre}</p>
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
                                onChange={(e) => {
                                    setCodigoEquipo(e.target.value);
                                    setErrorUnirse(''); // limpia el error al escribir
                                }}
                                className="w-full px-4 py-2.5 rounded-lg border border-[#C4649F]/30 text-[#4A0C32] placeholder-gray-400 text-sm outline-none focus:border-[#C4649F] transition-colors"
                            />
                            {errorUnirse && (
                                <p className="text-red-500 text-xs mt-1">{errorUnirse}</p>
                            )}
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