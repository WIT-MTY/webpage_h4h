'use client'
import { useState } from "react";
import MiembroCard from "../equipo_comp/MiembroCard";
import MiembroFoto from "../equipo_comp/MiembroFoto";
import { useEquipo } from "@/app/hooks/utils/useEquipo";

type Miembro = {
    img: string;
    nombre: string;
    puesto: string;
    area: string;
    contacto: {
        correo: string;
        linkedin: string;
    };
};

const EquipoBoard = () => {

     const { equipo } = useEquipo();
        const [miembroSeleccionado, setMiembroSeleccionado] = useState<Miembro | null>(null);
    
        const handleFotoClick = (miembro: Miembro) => {
            setMiembroSeleccionado(miembro);
        };
    
        const handleCerrarCard = () => {
            setMiembroSeleccionado(null);
        };
    
    return (
        <>
        <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-7        
                gap-2 sm:gap-2 md:gap-2 w-full max-w-7xl px-2 sm:px-2 md:px-2 lg:px-2 relative z-10 mx-auto">
                {equipo.map((miembro: Miembro, index: number) => (
                    <div 
                        key={index} 
                        onClick={() => handleFotoClick(miembro)}
                        className="cursor-pointer hover:scale-105 transition-transform duration-300 flex justify-center"
                    >
                        <MiembroFoto foto_m={miembro.img}/>
                    </div>
                ))}
            </div>

            {miembroSeleccionado && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={handleCerrarCard}
                >
                    <div 
                        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl relative animate-fadeIn" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <MiembroCard 
                            foto_m={miembroSeleccionado.img}
                            nombre_m={miembroSeleccionado.nombre}
                            puesto_m={miembroSeleccionado.puesto}
                            area_m={miembroSeleccionado.area}
                            contacto_m={{
                                correo_m: miembroSeleccionado.contacto.correo,
                                linkedin_m: miembroSeleccionado.contacto.linkedin
                            }}
                        />
                        
                        <button 
                            onClick={handleCerrarCard}
                            className="absolute -top-8 sm:-top-10 right-0 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-pink/30 rounded-full backdrop-blur-sm"
                            aria-label="Cerrar"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
         </>
    )
}

export default EquipoBoard;