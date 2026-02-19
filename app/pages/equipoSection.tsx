import React, { useState } from "react";
import Section from "../componentes/general/Section";
import MiembroCard from "../componentes/equipo_comp/MiembroCard";
import MiembroFoto from "../componentes/equipo_comp/MiembroFoto";
import Estrella from "../componentes/figuras/Estrella";
import Flor from "../componentes/figuras/Flor";
import Sol from "../componentes/figuras/Sol";
import DoodleFuerte from "../componentes/figuras/DoodleFuerte";
import { useEquipo } from "../hooks/utils/useEquipo";
import DoodleRosa from "../componentes/figuras/DoodleRosa";


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

const EquipoSection = () => {
    const { equipo } = useEquipo();
    const [miembroSeleccionado, setMiembroSeleccionado] = useState<Miembro | null>(null);

    const handleFotoClick = (miembro: Miembro) => {
        setMiembroSeleccionado(miembro);
    };

    const handleCerrarCard = () => {
        setMiembroSeleccionado(null);
    };

    return (
        <Section id="equipo" className="h-full flex flex-col items-center justify-center relative" bg_color="#4A0C32">

            <div className="absolute inset-0 z-0">
                <Estrella top_position="10%" left_position="5%"/>
                <Flor top_position="70%" left_position="60%" width="w-60"/>
                <DoodleFuerte top_position="-30%" left_position="62%" rotation="130" width="w-200"/> 
                <DoodleRosa top_position="70%" left_position="2%" rotation="100" width="w-140"/>
            </div>
        
            <h1 className="font-high-cruiser text-6xl text-white relative z-10">EQUIPO</h1>

            
            <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 w-full max-w-5xl px-10 relative z-10">
                {equipo.map((miembro: Miembro, index: number) => (
                    <div 
                        key={index} 
                        onClick={() => handleFotoClick(miembro)}
                        className="cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                        <MiembroFoto foto_m={miembro.img}/>
                    </div>
                ))}
            </div>

            {miembroSeleccionado && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={handleCerrarCard}
                >
                    <div 
                        className="w-full max-w-4xl relative" 
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
                            className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
                            aria-label="Cerrar"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
      
        </Section>
    );
};

export default EquipoSection;