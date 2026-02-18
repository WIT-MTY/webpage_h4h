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
        size: w_ada
    });
    
    const sectionStyles: { [key: string]: SectionStyle } = {
        /* Modificar por seccion */
        home: {top: '50%', left: '50%', rotation: -90, size: 'w-96 md:w-96'},
        acerca: {top: '50%', left: '80%', rotation: 15, size: 'w-28 md:w-36'},
        quees: {top: '70%', left: '15%', rotation: -10, size: 'w-32 md:w-40'},
        ubicacion: {top: '40%', left: '75%', rotation: 20, size: 'w-24 md:w-32'},
        calendario: {top: '60%', left: '25%', rotation: -15, size: 'w-36 md:w-44'},
        retos: {top: '55%', left: '85%', rotation: 25, size: 'w-40 md:w-48'},
        equipo: {top: '80%', left: '85%', rotation: 35, size: 'w-32 md:w-100'},
        patrocinador: {top: '65%', left: '60%', rotation: 10, size: 'w-28 md:w-36'},
        galeria: {top: '30%', left: '78%', rotation: 25, size: 'w-50 md:w-100'},
        faq: {top: '75%', left: '80%', rotation: 30, size: 'w-32 md:w-40'},
        contactanos: {top: '40%', left: '15%', rotation: -30, size: 'w-40 md:w-48'}
    };

    useEffect(() => {
        if (activeSection && sectionStyles[activeSection]) {
            setStyle(sectionStyles[activeSection]);
        }
    }, [activeSection]);

    return (
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
    );
};

export default AdaGuia;