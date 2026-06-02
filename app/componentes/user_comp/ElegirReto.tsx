'use client'
import { useState } from 'react';
import { useInfoRetosData } from '@/app/hooks/utils/useInfoRetosData';
import { useInfoEquipoData } from '@/app/hooks/utils/useInfoEquipoData';
import { getToken } from '@/app/hooks/utils/getToken';

interface EstadoProps {
    tieneReto: boolean;
    esLider: boolean;
}

interface ClausulaProps {
    nombreAceptoClausula: string;
    onNombreChange: (nombre: string) => void;
    aceptoTerminos: boolean;
    onTerminosChange: (terminos: boolean) => void;
    aceptoClausula: boolean;
    onClausulaChange: (clausula: boolean) => void;
    yaAceptoClausula: boolean; 
}

interface Reto {
    id: number;
    titulo: string;
    descripcion: string;
}


const ElegirReto = ({ tieneReto: tieneRetoInicial, esLider }: EstadoProps) => {
    const { infoRetos, allRetos,  loadingInfoRetos, refetch: fetchMiEquipo  } = useInfoRetosData();
    const { infoEquipo, loadingInfo } = useInfoEquipoData();
    const [tieneReto, setTieneReto] = useState(tieneRetoInicial);
    const [opcion1, setOpcion1] = useState<Reto | null>(null);
    const [opcion2, setOpcion2] = useState<Reto | null>(null);
    const [aceptoTerminos, setAceptoTerminos] = useState(false); //Boton para aceptar terminos y condiciones
    const [aceptoClausula, setAceptoClausula] = useState(false); //Aceptar Checkbox clausula de patrocinador
    const [nombreAceptoClausula, setNombreAceptoClausula] = useState(''); //Nombre del integrante que acepto la clausula 
    const [error, setError] = useState('');
    let aceptoTerminosParticipante: boolean = infoRetos?.p_acepto_clausula || false; //bool, determinar si el equipo ya acepto terminos para mostrar estado de aceptación 

    
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


    const handleConfirmar = async () => {
        if (!opcion1 || !opcion2) {
            setError('Debes seleccionar dos opciones de reto.');
            return;
        }
        if (opcion1.id === opcion2.id) {
            setError('Las dos opciones deben ser diferentes.');
            return;
        }

        if (!verificarEquipoAceptoTerminos()) {
            setError('Todos los integrantes deben aceptar los términos y condiciones.');
            return;
        }   

        try {
        const BASE = process.env.NEXT_PUBLIC_API_URL;
        const token = getToken();

        const res = await fetch(`${BASE}/retos/elegir`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                opcion1_reto_id: opcion1.id,
                opcion2_reto_id: opcion2.id,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error || 'Error al guardar la selección.');
            return;
        }

        setTieneReto(true);
        await fetchMiEquipo(); 

    } catch (error) {
        setError('Error de conexión. Intenta de nuevo.');
    }

    };

    

    const getEstadoReto = (reto: Reto) => {
        if (opcion1?.id === reto.id) return 1;
        if (opcion2?.id === reto.id) return 2;
        return null;
    };

    const verificarEquipoAceptoTerminos= () => {
        if(infoEquipo?.lider_acepto_terminos === true && infoEquipo?.participante_2_acepto_terminos === true && infoEquipo?.participante_3_acepto_terminos === true && infoEquipo?.participante_4_acepto_terminos === true) {
            return true; //true; el equipo acepto terminos
        }
        return false; //false; el equipo no acepto terminos
    }

    if (loadingInfoRetos) return <div className="p-4 text-[#4A0C32] text-sm">Cargando retos...</div>;

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
                                { label: "Primera opción", titulo: infoRetos?.opcion1_titulo ? { titulo: infoRetos.opcion1_titulo, descripcion: infoRetos.opcion1_descripcion } : null },
                                { label: "Segunda opción", titulo: infoRetos?.opcion2_titulo ? { titulo: infoRetos.opcion2_titulo, descripcion: infoRetos.opcion2_descripcion } : null },
                            ].map(({ label, titulo }, i) => (
                                <div key={i} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0 gap-4">
                                    <p className="text-[#4A0C32]/60 text-sm shrink-0">{label}</p>
                                    <div className="text-right">
                                        <p className="text-[#4A0C32] font-medium text-sm">{titulo?.titulo}</p>
                                        <p className="text-[#4A0C32]/50 text-xs mt-0.5">{titulo?.descripcion}</p>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                        <ClausulaPatrocinador 
                            aceptoTerminos={aceptoTerminos} 
                            onTerminosChange={setAceptoTerminos}
                            nombreAceptoClausula={nombreAceptoClausula}
                            onNombreChange={setNombreAceptoClausula}
                            aceptoClausula={aceptoClausula}
                            onClausulaChange={setAceptoClausula}
                            yaAceptoClausula={aceptoTerminosParticipante} 
                        />
                    </div>

                ) : (

                    // Vista: selección de retos
                    <div className="space-y-5">

                       {/* Instrucciones */}
                        <div className="space-y-2">
                            <p className="text-[#4A0C32]/50 text-sm">
                                Solo la líder del equipo puede seleccionar las opciones de reto.
                            </p>
                            <p className="text-[#4A0C32]/50 text-sm">
                                Decidan en equipo los retos qué más les interesan en orden de preferencia antes de confirmar su selección.
                            </p>
                            <p className="text-[#4A0C32]/50 text-sm">
                                Todos los participantes deben aceptar los términos y condiciones para completar su participación y selección de reto.
                            </p>
                            <p className="text-[#4A0C32]/50 text-sm">
                                Seleccionen los dos retos en orden de preferencia.
                            </p>
                        </div>
                        

                        {/* Lista de retos */}
                        <div className="space-y-3">
                            {allRetos.map((reto) => {
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
                                                <h2 className="text-[#4A0C32] font-bold text-sm mb-1">{reto.titulo}</h2>
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
                                    <p className="text-[#4A0C32] font-medium">{opcion1?.titulo || '—'}</p>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <p className="text-[#4A0C32]/60">Segunda opción:</p>
                                    <p className="text-[#4A0C32] font-medium">{opcion2?.titulo || '—'}</p>
                                </div>
                            </div>
                        )}

                        {error && <p className="text-red-500 text-xs">{error}</p>}

                        {esLider &&(
                            <button
                                onClick={handleConfirmar}
                                disabled={!opcion1 || !opcion2}
                                className="w-full py-2.5 bg-[#C4649F] text-white font-semibold text-sm rounded-lg hover:bg-[#4A0C32] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                Confirmar selección
                            </button>
                        )}


                        <div className="space-y-2">
                            <ClausulaPatrocinador 
                                aceptoTerminos={aceptoTerminos} 
                                onTerminosChange={setAceptoTerminos}
                                nombreAceptoClausula={nombreAceptoClausula}
                                onNombreChange={setNombreAceptoClausula}
                                aceptoClausula={aceptoClausula}
                                onClausulaChange={setAceptoClausula}
                                yaAceptoClausula={aceptoTerminosParticipante} 
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ElegirReto;



{/* Componente Para aceptar clausula de patrocinador antes de la seleccion de reto*/}
const ClausulaPatrocinador = ({ aceptoTerminos, onTerminosChange, nombreAceptoClausula, onNombreChange, aceptoClausula, onClausulaChange, yaAceptoClausula  }: ClausulaProps) => {
    const [expandido, setExpandido] = useState(false);
    const [loadingAceptar, setLoadingAceptar] = useState(false);
    const [errorAceptar, setErrorAceptar] = useState('');
    const mostrarComoAceptado = yaAceptoClausula || aceptoTerminos;

    const handleAceptar = async () => {
        // Validaciones antes de llamar al backend
        if (!aceptoClausula) {
            setErrorAceptar('Debes marcar el checkbox para aceptar los términos.');
            return;
        }
        if (!nombreAceptoClausula.trim()) {
            setErrorAceptar('Debes escribir tu nombre completo.');
            return;
        }

        setLoadingAceptar(true);
        setErrorAceptar('');

        try {
            const BASE = process.env.NEXT_PUBLIC_API_URL;
            const token = getToken();

            const res = await fetch(`${BASE}/retos/aceptarclausula`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    acepto_clausula_arca: true,
                    nombre_acepto_clausula_arca: nombreAceptoClausula.trim(),
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorAceptar(data.error || 'Error al aceptar los términos.');
                return;
            }

          
            onTerminosChange(true);

        } catch (error) {
            setErrorAceptar('Error de conexión. Intenta de nuevo.');
        } finally {
            setLoadingAceptar(false);
        }
    };

    return (
        <div className='space-y-2'>
            {!mostrarComoAceptado  && (
                <p className="text-[#4A0C32]/50 text-sm bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
                    Es necesario que aceptes los términos y condiciones para completar tu participación y selección de reto.
                </p>
            )}

            <div className="border rounded-xl overflow-hidden transition-colors bg-[#F0CEE3]/50 border-[#C4649F]">

                {/* Header */}
                <div className="px-4 py-3 border-b transition-colors bg-[#C4649F]/20 border-[#C4649F]/30">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <span className="text-xs leading-relaxed font-semibold text-[#4A0C32]">
                            {mostrarComoAceptado
                                ? 'Aceptaste los Términos y Condiciones – Hackathon 2026'
                                : 'Aceptación de Términos y Condiciones – Hackathon 2026'
                            }
                            {!mostrarComoAceptado && <span className="text-red-500 ml-1">*</span>}
                        </span>
                    </label>
                </div>

                {/* Contenido colapsable */}
                <div className="px-4 pt-3 pb-1">
                    <div className={`text-xs text-[#4A0C32]/70 space-y-2 leading-relaxed ${expandido ? '' : 'line-clamp-2'}`}>
                        <p>
                            Al registrarme y/o participar en el Hackathon 2026, manifiesto mi consentimiento expreso y acepto que todas las ideas, propuestas, desarrollos, soluciones, materiales o entregables que genere, de forma individual o colectiva, podrán ser utilizados, adaptados, modificados, reproducidos, implementados y explotados por Arca Continental, S.A.B. de C.V., o cualquiera de sus filiales o empresas del grupo, para cualquier fin y sin limitación temporal o territorial.
                        </p>
                        <p>
                            Asimismo, cedo de manera total, gratuita, irrevocable y exclusiva a favor de Arca Continental todos los derechos patrimoniales de propiedad intelectual que pudieran derivarse de dichas creaciones, renunciando a cualquier reclamación presente o futura.
                        </p>
                        <p>
                            Reconozco que durante el evento podré tener acceso a información confidencial o reservada de Arca Continental, incluyendo información interna, materiales, procesos y datos compartidos, por lo que me obligo a mantener su estricta confidencialidad, incluso con posterioridad a la conclusión del evento.
                        </p>
                        <p>
                            Manifiesto que las creaciones que genere no infringen derechos de terceros y que cuento con la capacidad legal para aceptar los presentes términos. Autorizo el tratamiento de mis datos personales conforme al Aviso de Privacidad aplicable de Arca Continental. Los presentes términos se rigen por las leyes de los Estados Unidos Mexicanos y cualquier controversia será sometida a los tribunales competentes de Monterrey, Nuevo León.
                        </p>
                    </div>
                    
                    {/* Boton "ver mas" leer terminos completos*/}
                    <button
                        type="button"
                        onClick={() => setExpandido(!expandido)}
                        className="mt-2 mb-3 text-[#C4649F] hover:text-[#4A0C32] text-xs font-semibold transition-colors flex items-center gap-1"
                    >
                        {expandido ? 'Ver menos ▲' : 'Leer términos completos ▼'}
                    </button>
                    
                    {/* Se muestra solo cuando no se han aceptado los términos */}
                    {!mostrarComoAceptado && (
                        <div className="space-y-2">
                            <label className="flex items-start gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={aceptoClausula}
                                    onChange={(e) => onClausulaChange(e.target.checked)}
                                    className="mt-0.5 w-4 h-4 accent-[#C4649F] shrink-0"
                                />
                                <span className="text-xs text-[#4A0C32]/70">
                                    He leído y acepto los términos y condiciones para participar en el Hackathon 2026. <span className="text-red-500 ml-1">*</span>
                                </span>
                            </label>

                            <div className="">
                                <p className="text-xs text-[#4A0C32]/70">
                                    Escribe tu nombre completo<span className="text-red-500 ml-1">*</span>
                                </p>
                            
                                <input
                                    type="text"
                                    placeholder="Escribe tu nombre completo para confirmar aceptación"
                                    value={nombreAceptoClausula}
                                    onChange={(e) => onNombreChange(e.target.value)}
                                    className="mt-3 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4649F] transition-colors"
                                />
                            </div>
                                
                            {/* Muestra el error si hay alguno */}
                            {errorAceptar && (
                                <p className="text-red-500 text-xs">
                                    {errorAceptar}
                                </p>
                            )}

                            <button
                                type="button"
                                onClick={handleAceptar}
                                disabled={loadingAceptar || !aceptoClausula || !nombreAceptoClausula.trim()}
                                className="mt-4 w-full py-2.5 bg-[#C4649F] text-white font-semibold text-sm rounded-lg hover:bg-[#4A0C32] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                {loadingAceptar ? 'Guardando...' : 'Aceptar y continuar'}
                            </button>
                        </div>
                    )}
                    
                </div>

            </div>
        </div>
    );
};