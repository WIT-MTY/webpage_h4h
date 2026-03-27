'use client'
import { useState } from "react";
import MiembroCard from "../equipo_comp/MiembroCard";
import MiembroFoto from "../equipo_comp/MiembroFoto";
import { useEquipo } from "@/app/hooks/utils/useEquipo";
import { useEffect } from "react";

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
    
    useEffect(() => {
    if (miembroSeleccionado) {
        document.body.dispatchEvent(new Event('modalopen'))
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.classList.add('modal-open'); 
    } else {
        document.body.dispatchEvent(new Event('modalclose'))
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        document.body.classList.remove('modal-open');
    }
}, [miembroSeleccionado]);

    const handleFotoClick = (miembro: Miembro) => {
        setMiembroSeleccionado(miembro);
    };

    const handleCerrarCard = () => {
        setMiembroSeleccionado(null);
    };
    return (
        <>
        <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8        
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
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-pink/90 backdrop-blur-sm"
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
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCerrarCard();
                            }}
                            className="absolute -top-8 sm:-top-10 right-0 text-white text-2xl sm:text-3xl hover:text-[#FF2871] transition-colors duration-300 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#4A0C32] rounded-full backdrop-blur-sm hover:scale-110 cursor-pointer"
                            aria-label="Cerrar"
                        > ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default EquipoBoard;