'use client'
import { useState } from 'react';

interface EstadoProps {
    tieneEquipo: boolean;
}

const CrearEquipo = ({ tieneEquipo }: EstadoProps) => {

    const [nombreEquipo, setNombreEquipo] = useState('');
    const [codigoEquipo, setCodigoEquipo] = useState('');

    return (
        <div className="bg-[#C4649F] rounded-xl overflow-hidden w-full max-w-3xl transition-all duration-300">
            <div className="p-6">

                {tieneEquipo ? (
                    // Vista: ya tiene equipo
                    <div className="space-y-2">
                        <h1 className="text-white font-bold text-2xl">Tu equipo: <span className="text-pink-200 font-medium">Equipo X</span></h1>
                        <div className="px-6 pb-2 pt-2 border-t border-white/10">
                        <p className="text-white/70 text-sm">Estatus: <span className="text-white/70 font-medium">Incompleto</span></p>
                        <p className="text-white/70 text-sm">Código: <span className="text-white/70 font-medium">ABC123</span></p>
                        
                        </div>
                        <div className="space-y-1"> 
                        <h2 className="text-white">Integrantes:</h2>
                        <ul className='list-disc list-inside'>
                            <li>Integrante 1: <span className="text-pink-200 font-medium">Nombre Apellido</span></li>
                            <li>Integrante 2: <span className="text-pink-200 font-medium">[Faltante]</span></li>
                            <li>Integrante 3: <span className="text-pink-200 font-medium">[Faltante]</span></li>
                            <li>integrante 4: <span className="text-pink-200 font-medium">[Faltante]</span></li>
                        </ul>
                        </div>
                    </div>

                ) : (
                    // Vista: no tiene equipo
                    <div className="space-y-4">
                        <div className="space-y-1"> 
                        <h1 className="text-white font-bold text-2xl">Únete o crea un equipo</h1>
                        <p className="text-white/50">¿Sin equipo? Conéctate con otras participantes en nuestro <a className="underline text-pink-300" href="https://discord.gg/e5ENU6DDe">Discord</a>.</p>
                        <p className="text-white/50 ">Los equipos deben tener exactamente 4 integrantes para ser válidos.</p>
                        <p className="text-white/50">Quien cree el equipo será asignada como líder.</p>
                        </div>
                        <div>
                            <label className="text-white/70 text-xs mb-1 block">Crear nuevo equipo</label>
                            <input
                                type="text"
                                placeholder="Nombre del equipo"
                                value={nombreEquipo}
                                onChange={(e) => setNombreEquipo(e.target.value)}
                                className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/40 text-sm outline-none"
                            />
                            <button className="mt-2 w-full py-2 bg-white text-[#C4649F] font-semibold text-sm rounded-md hover:bg-white/90 transition-colors">
                                Crear equipo
                            </button>
                        </div>

                        <div className="border-t border-white/20 pt-4">
                            <label className="text-white/70 text-xs mb-1 block">Unirse a un equipo existente</label>
                            <input
                                type="text"
                                placeholder="Código del equipo"
                                value={codigoEquipo}
                                onChange={(e) => setCodigoEquipo(e.target.value)}
                                className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/40 text-sm outline-none"
                            />
                            <button className="mt-2 w-full py-2 bg-white text-[#C4649F] font-semibold text-sm rounded-md hover:bg-white/90 transition-colors">
                                Unirse
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default CrearEquipo;