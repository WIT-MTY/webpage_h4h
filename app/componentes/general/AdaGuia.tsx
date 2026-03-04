// components/general/AdaGuia.tsx
"use client";
import React, { useEffect, useState } from "react";

interface AdaGuiaProps {
    w_ada?: string;
    activeSection?: string;
}

interface SectionStyle {
    top: string;
    left: string;
    rotation: number;
    size: string;
    mess: string;
    up_mess: number;
    left_mess: number;
}



const AdaGuia: React.FC<AdaGuiaProps> = ({
    w_ada = "w-24 md:w-32",
    activeSection = "home"
}) => {

    const [style, setStyle] = useState<SectionStyle>({
        /* posicion y orientacion incial - de preferencia que sea igual que home */
        top: '50%',
        left: '50%',
        rotation: -90,
        size: w_ada,
        mess: 'Ten un buen día',
        up_mess: 140,
        left_mess: 50
    });

    
    
    const sectionStyles: { [key: string]: SectionStyle } = {
        /* Modificar por seccion */
        home: {top: '50%', left: '50%', rotation: -90, size: 'w-96 md:w-96', mess: 'Mess Home', up_mess: 140, left_mess: 50},
        acerca: {top: '50%', left: '80%', rotation: 15, size: 'w-28 md:w-36', mess: 'Mess Cerca', up_mess: 10, left_mess: 50},
        quees: {top: '70%', left: '15%', rotation: -10, size: 'w-32 md:w-40', mess: 'Mess Qué es', up_mess: 140, left_mess: 50},
        ubicacion: {top: '40%', left: '75%', rotation: 20, size: 'w-24 md:w-32', mess: 'Mess ubicación', up_mess: 140, left_mess: 50},
        calendario: {top: '60%', left: '25%', rotation: -15, size: 'w-36 md:w-44', mess: 'Mess calendario', up_mess: 140, left_mess: 50},
        retos: {top: '55%', left: '85%', rotation: 25, size: 'w-40 md:w-48', mess: 'Mess Retos', up_mess: 10, left_mess: 50},
        equipo: {top: '80%', left: '85%', rotation: 35, size: 'w-32 md:w-100', mess: '!Conoce al equipo detrás de H4H!', up_mess: 170, left_mess: 70},
        patrocinador: {top: '60%', left: '15%', rotation: -1, size: 'w-100 md:w-120', mess: 'Mess Patrocinador', up_mess: 140, left_mess: 50},
        galeria: {top: '25%', left: '80%', rotation: 40, size: 'w-20 md:w-70', mess: 'Mess Galería', up_mess: 140, left_mess: 50},
        faq: {top: '75%', left: '80%', rotation: 30, size: 'w-32 md:w-40', mess: 'Mess FAQ', up_mess: 140, left_mess: 50},
        contactanos: {top: '40%', left: '15%', rotation: -30, size: 'w-40 md:w-48', mess: 'Mess Contactanos', up_mess: 140, left_mess: 50}
    };


    useEffect(() => {
        if (activeSection && sectionStyles[activeSection]) {
            setStyle(sectionStyles[activeSection]);
        }
    }, [activeSection]);

  

    return (
      <div>
        <img 
            src="/images/figuras/mascota_guia.svg" 
            alt="Ada Guía" 
            className={`${style.size} fixed transition-all duration-700 ease-in-out z-40 hover:scale-110 cursor-pointer`}
            style={{
                top: style.top,
                left: style.left,
                transform: `translate(-50%, -50%) rotate(${style.rotation}deg)`,
            }}
        />

        <div className="fixed z-50 bg-white backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-700 ease-in-out hover:scale-130"
        style={{
        top: `calc(${style.top} - ${style.up_mess}px)`, 
        left: style.left,
        transform: `translateX(-${style.left_mess}%)`,}}>
            <p className="text-pink-600 font-semibold text-sm md:text-base whitespace-nowrap">
            {style.mess}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45">
            </div>
        </div>
    </div>
      
    );
};

export default AdaGuia;