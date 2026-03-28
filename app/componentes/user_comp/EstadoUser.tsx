'use client'
import { useState } from 'react';

interface EstadoProps {
    descripcion: string;
}

const EstadoUser = (props: EstadoProps) => {
    
    const getEstadoConfig = () => {
        switch(props.descripcion) {
            case "Aceptado":
                return {
                    titulo: "¡Solicitud aceptada!",
                    mensaje: "Tu registro ha sido aceptado. Bienvenida a Hack4Her.",
                    detalles: "Mantente al pendiente a nuestras redes sociales para conocer los próximos pasos",
                    textColor: "text-[#116630]",
                };

            case "Rechazado":
                return {
                    titulo: "Solicitud rechazada",
                    mensaje: "Lamentablemente tu registro ha sido rechazado.",
                    detalles: "Motivo: No cumples con los requisitos mínimos de participación. Si consideras que es un error, contáctanos en hack4her.mty@gmail.com",
                    textColor: "text-[#D43131]",
                };

            case "Pendiente":
                return {
                    titulo: "Solicitud en revisión",
                    mensaje: "Tu registro está siendo revisado por nuestro equipo.",
                    detalles: "El proceso de revisión puede tomar hasta 7 días hábiles.",
                    textColor: "text-[#FFDF59]",
                };

            default:
                return {
                    titulo: "Estado desconocido",
                    mensaje: "No pudimos determinar el estado de tu registro.",
                    detalles: "Por favor contacta a soporte técnico para resolver este problema.",
                    textColor: "text-gray-300",
                };
        }
    };

    

    const { titulo, mensaje, detalles, textColor } = getEstadoConfig();

    return (
        <div className="bg-[#C4649F] rounded-xl overflow-hidden w-full max-w-md transition-all duration-300">
            
            <div className="p-6 pb-3">
                <div className="flex items-center gap-3">
                    <div>
                        <h3 className={`${textColor} font-bold text-xl`}>{titulo}</h3>
                        <p className="text-white/70 text-sm mt-1">{mensaje}</p>
                        <div className="px-6 pb-6 pt-2 border-t border-white/10">
                            <p className="text-white/70 text-sm leading-relaxed">
                                {detalles}
                            </p>
                        </div>
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default EstadoUser;