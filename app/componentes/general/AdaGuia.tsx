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

const sectionStyles: { [key: string]: SectionStyle } = {
        /* Modificar por seccion */
        home: {top: '50%', left: '50%', rotation: -90, size: 'w-50 md:w-70', mess: 'Mess Home', up_mess: 80, left_mess: 100},
        acerca: {top: '52%', left: '77%', rotation: -3, size: 'w-[min(88vw,1200px)]', mess: 'Soy Ada, Orgullosamente parte del equipo', up_mess: 120, left_mess: 50},
        quees: {top: '70%', left: '15%', rotation: 40, size: 'w-50 md:w-70', mess: '¿Ya te apuntaste?', up_mess: 140, left_mess: 50},
        ubicacion: {top: '40%', left: '85%', rotation: 20, size: 'w-50 md:w-70', mess: '¡Aquí nos vemos!', up_mess: 20, left_mess: 50},
        calendario: {top: '60%', left: '10%', rotation: -15, size: 'w-50 md:w-70', mess: '¡Revisa nuestro calendario!', up_mess: 140, left_mess: 50},
        retos: {top: '55%', left: '85%', rotation: 25, size: 'w-50 md:w-70', mess: 'Mess Retos', up_mess: 10, left_mess: 50},
        equipo: {top: '85%', left: '84%', rotation: 35, size: 'w-50 md:w-70', mess: '!Conoce al equipo detrás de H4H!', up_mess: 180, left_mess: 50},
        patrocinador: {top: '60%', left: '15%', rotation: -1, size: 'w-50 md:w-70', mess: '!Conoce a nuestro patrocinador!', up_mess: 200, left_mess: 60},
        galeria: {top: '35%', left: '80%', rotation: 40, size: 'w-50 md:w-70', mess: '¡Revive el H4H!', up_mess: 140, left_mess: 50},
        faq: {top: '35%', left: '86%', rotation: 30, size: 'w-50 md:w-70', mess: 'Las dudas más frecuentes', up_mess: 140, left_mess: 50},
        contactanos: {top: '40%', left: '50%', rotation: 15, size: 'w-50 md:w-70', mess: '¿Tienes dudas, comentarios o sugerencias?', up_mess: 140, left_mess: 50}
};

const AdaGuia: React.FC<AdaGuiaProps> = ({
    w_ada = "w-24 md:w-32",
    activeSection = "home"
}) => {

    // Compute style directly from activeSection instead of using state
    const style = (activeSection && sectionStyles[activeSection])
        ? sectionStyles[activeSection]
        : {
            top: '50%',
            left: '50%',
            rotation: -90,
            size: w_ada,
            mess: 'Ten un buen día',
            up_mess: 140,
            left_mess: 50
        };

    const [frozen, setFrozen] = useState(false);
    const [frozenPos, setFrozenPos] = useState({ top: '50%', left: '50%' });
    const [frozenRotation, setFrozenRotation] = useState(0);

    useEffect(() => {
        const handleModalOpen = () => {
            const ada = document.querySelector('.ada-guia') as HTMLElement;
            if (ada) {
                const rect = ada.getBoundingClientRect();
                setFrozenPos({
                    top:  `${rect.top  + rect.height / 2}px`,
                    left: `${rect.left + rect.width  / 2}px`,
                });
            }
            setFrozenRotation(style.rotation);
            setFrozen(true);
        };

        const handleModalClose = () => setFrozen(false);

        document.body.addEventListener('modalopen',  handleModalOpen);
        document.body.addEventListener('modalclose', handleModalClose);
        return () => {
            document.body.removeEventListener('modalopen',  handleModalOpen);
            document.body.removeEventListener('modalclose', handleModalClose);
        };
    }, [style]);

    return (
        <div
            className="fixed transition-all duration-700 ease-in-out z-[45] ada-guia pointer-events-auto"
            style={{
                top:       frozen ? frozenPos.top  : style.top,
                left:      frozen ? frozenPos.left : style.left,
                transform: 'translate(-50%, -50%)',
            }}
        >
            {/* Globito de mensaje */}
            <div
                className="absolute bg-white backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-700 ease-in-out hover:scale-110 whitespace-nowrap shadow-lg"
                style={{
                    bottom: '100%',
                    left: '50%',
                    transform: `translateX(-${style.left_mess}%) translateY(${style.up_mess}%)`,
                    zIndex: 30,
                }}
            >
                <p className="text-pink-600 font-semibold text-sm md:text-base">{style.mess}</p>
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
            </div>

            {/* Mascota */}
            <img
                src="/images/figuras/mascota_guia.svg"
                alt="Ada Guía"
                className="transition-all duration-700 ease-in-out hover:scale-110 cursor-pointer"
                style={{
                    transform: `rotate(${frozen ? frozenRotation : style.rotation}deg)`,
                    width:
                        activeSection === 'acerca'
                            ? 'clamp(400px, min(85vw, 75dvh), 1280px)'
                            : activeSection === 'home'
                              ? '0px'
                              : activeSection === 'quees'
                                ? 'clamp(350px, min(75vw, 65dvh), 1100px)'
                                : activeSection === 'contactanos'
                                  ? 'clamp(380px, min(80vw, 72dvh), 1200px)'
                                  : '240px',
                    height: 'auto',
                    maxWidth: '100vw',
                }}
            />
        </div>
    );
};

export default AdaGuia;