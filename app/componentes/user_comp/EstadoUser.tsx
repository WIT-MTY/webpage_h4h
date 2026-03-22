'use client'

import { useState } from 'react';

interface EstadoProps {
    estado_actual: number
}

const EstadoUser = (props: EstadoProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const getEstadoConfig = () => {
        switch(props.estado_actual) {
            case 1:
                return {
                    titulo: "En revisión",
                    mensaje: "Tu registro está siendo revisado por nuestro equipo.",
                    detalles: "El proceso de revisión puede tomar hasta 5 días hábiles. Recibirás un correo cuando tu estado sea actualizado.",
                    bgColor: "bg-gradient-to-r from-yellow-900/30 to-yellow-800/30",
                    textColor: "text-yellow-300",
                    icon: "⏳"
                };
            case 2:
                return {
                    titulo: "¡Aceptada!",
                    mensaje: "Tu registro ha sido aceptado. Bienvenida a Hack4Her.",
                    detalles: "Próximos pasos: 1) Revisa tu correo para confirmar tu participación 2) Únete al grupo de WhatsApp 3) Prepara tus habilidades para la hackathon",
                    bgColor: "bg-gradient-to-r from-green-900/30 to-green-800/30",
                    textColor: "text-green-300",
                    icon: "🎉"
                };
            case 3:
                return {
                    titulo: "No aceptada",
                    mensaje: "Lamentablemente tu registro ha sido rechazado.",
                    detalles: "Motivo: No cumples con los requisitos mínimos de participación. Si consideras que es un error, contáctanos en contacto@hack4her.com",
                    bgColor: "bg-gradient-to-r from-red-900/30 to-red-800/30",
                    textColor: "text-red-300",
                    icon: "😔"
                };
            default:
                return {
                    titulo: "Estado desconocido",
                    mensaje: "No pudimos determinar el estado de tu registro.",
                    detalles: "Por favor contacta a soporte técnico para resolver este problema.",
                    bgColor: "bg-gradient-to-r from-gray-900/30 to-gray-800/30",
                    textColor: "text-gray-300",
                    icon: "❓"
                };
        }
    };

    const { titulo, mensaje, detalles, bgColor, textColor, icon } = getEstadoConfig();

    return (
        <div className={`${bgColor} backdrop-blur-sm rounded-xl shadow-lg overflow-hidden w-full max-w-md transition-all duration-300`}>
            {/* Header de la tarjeta */}
            <div className="p-6 pb-3">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{icon}</span>
                    <div>
                        <h3 className={`${textColor} font-bold text-xl`}>{titulo}</h3>
                        <p className="text-white/70 text-sm mt-1">{mensaje}</p>
                    </div>
                </div>
            </div>
            
            {/* Contenido expandible */}
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-6 py-3 text-left text-white/60 hover:text-white/80 text-xs font-medium transition-colors border-t border-white/10"
            >
                {isExpanded ? "▼ Mostrar menos" : "▶ Más información"}
            </button>
            
            {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-white/10">
                    <p className="text-white/70 text-sm leading-relaxed">
                        {detalles}
                    </p>
                    
                    {props.estado_actual === 2 && (
                        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors text-sm font-medium">
                            Continuar con el registro
                        </button>
                    )}
                    
                    {props.estado_actual === 3 && (
                        <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors text-sm font-medium">
                            Contactar soporte
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default EstadoUser;