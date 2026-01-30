"use client";

import React, { useState, useEffect } from "react";
import Section from "../componentes/general/Section";
import Image from "next/image";

const HomeSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Fecha del evento imaginaria: 14 de marzo de 2026
        const eventDate = new Date('2026-03-14T00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = eventDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({
                    days,
                    hours,
                    minutes,
                    seconds
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // Actualizar inmediatamente
        updateCountdown();

        // Actualizar cada segundo
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num: number) => {
        return num.toString().padStart(2, '0');
    };

    return (
        <Section id="home" backgroundColor="bg-secundario-rosa-claro-300" className="h-full flex flex-col items-start justify-center relative pl-24 md:pl-32 lg:pl-48">
       <div className="flex flex-col items-start" style={{ marginTop: '-130px' }}>
       <div className="bg-principal-morado/20 border-2 border-principal-morado px-6 py-2 rounded-full mb-4">
         <p className="font-questrial text-xl font-bold text-principal-morado uppercase tracking-wider">WIT presenta</p>
       </div>
       <h1 className="mt-4 font-high-cruiser text-8xl" style={{ letterSpacing: '0.02em' }}>
          <span className="text-principal-morado" style={{
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3), 0 0 30px rgba(147, 51, 234, 0.4), -2px -2px 0 rgba(255, 255, 255, 0.1)'
          }}>HACK</span>
          <span className="text-principal-rosa" style={{
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3), 0 0 30px rgba(236, 72, 153, 0.5), -2px -2px 0 rgba(255, 255, 255, 0.1)',
            display: 'inline-block',
            transform: 'scale(1.15)'
          }}>4</span>
          <span className="text-principal-morado" style={{
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3), 0 0 30px rgba(147, 51, 234, 0.4), -2px -2px 0 rgba(255, 255, 255, 0.1)'
          }}>HER</span>
          <span className="text-principal-rosa" style={{
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3), 0 0 30px rgba(236, 72, 153, 0.5), -2px -2px 0 rgba(255, 255, 255, 0.1)'
          }}> 2026</span>
        </h1> 
        <h2 className="mt-4 font-questrial text-4xl font-bold text-neutro-negro">14-15 de marzo, 2026 · Evento presencial · Tec de Monterrey, Monterrey, MX</h2>
        
        <button className="mt-8 bg-principal-rosa text-white px-12 py-5 rounded-xl font-bold text-4xl hover:bg-principal-rosa-800 hover:scale-110 hover:shadow-[0_20px_40px_rgba(255,40,113,0.4)] hover:-translate-y-2 active:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow-lg">
        ¡Regístrate ahora!
        </button>

        <div className="mt-8 font-questrial text-4xl font-bold" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.4)' }}>
            <span className="text-neutro-negro">Arrancando en </span>
            <span className="text-principal-rosa">{timeLeft.days}</span>
            <span className="text-neutro-negro uppercase"> días</span>
            <span className="text-neutro-negro"> · </span>
            <span className="text-principal-rosa">{formatNumber(timeLeft.hours)}</span>
            <span className="text-neutro-negro uppercase"> HORAS</span>
            <span className="text-neutro-negro"> · </span>
            <span className="text-principal-rosa">{formatNumber(timeLeft.minutes)}</span>
            <span className="text-neutro-negro uppercase"> MIN</span>
            <span className="text-neutro-negro"> · </span>
            <span className="text-principal-rosa">{formatNumber(timeLeft.seconds)}</span>
            <span className="text-neutro-negro uppercase"> SEG</span>
        </div>
        </div>


                <div
                    className="absolute top-18 z-0 pointer-events-none"
                    style={{
                        left: 0,
                        width: '300px',
                        height: '300px',
                        minWidth: '300px',
                        minHeight: '300px',
                        margin: 0,
                        padding: 0
                    }}
                >
                    <Image
                        src="/images/home_section/Vector1.svg"
                        alt="Decorative vector"
                        width={500}
                        height={800}
                        className="block w-full h-full"
                        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left top' }}
                    />
                </div>
                
                <div
                    className="absolute left-0 right-0 z-0 pointer-events-none"
                    style={{
                        bottom: '-1px',
                        lineHeight: 0
                    }}
                >
                    <Image
                        src="/images/home_section/Vector3.svg"
                        alt="Decorative vector"
                        width={1600}
                        height={300}
                        className="block w-full h-auto"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            verticalAlign: 'bottom',
                            objectFit: 'contain',
                            objectPosition: 'bottom left'
                        }}
                    />
                </div>

                {/* estrellas */}
                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        bottom: '140px',
                        left: '12%',
                        width: '50px',
                        height: '50px',
                        animation: 'spin 15s linear infinite'
                    }}
                >
                    <Image
                        src="/images/home_section/star.svg"
                        alt="Decorative star"
                        width={50}
                        height={50}
                        className="block w-full h-full"
                    />
                </div>

                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        bottom: '140px',
                        right: '12%',
                        width: '50px',
                        height: '50px',
                        animation: 'spin 18s linear infinite reverse'
                    }}
                >
                    <Image
                        src="/images/home_section/star.svg"
                        alt="Decorative star"
                        width={50}
                        height={50}
                        className="block w-full h-full"
                    />
                </div>

                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        bottom: '70px',
                        left: '10%',
                        width: '60px',
                        height: '60px',
                        animation: 'spin 20s linear infinite'
                    }}
                >
                    <Image
                        src="/images/home_section/star.svg"
                        alt="Decorative star"
                        width={50}
                        height={50}
                        className="block w-full h-full"
                    />
                </div>

                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        bottom: '70px',
                        right: '10%',
                        width: '60px',
                        height: '60px',
                        animation: 'spin 22s linear infinite reverse'
                    }}
                >
                    <Image
                        src="/images/home_section/star.svg"
                        alt="Decorative star"
                        width={50}
                        height={50}
                        className="block w-full h-full"
                    />
                </div>

                <div className="absolute bottom-0 left-8 right-8 z-10 flex items-center justify-center" style={{ height: '300px', paddingTop: '75px', paddingBottom: '25px' }}>
                    <h3 className="font-high-cruiser text-7xl text-color-neutro-blanco lowercase text-center" style={{ letterSpacing: '0.015em', lineHeight: '1',  }}>
                        ¡el primer hackathon nacional de méxico<br />enfocado en el talento femenino en tech!
                    </h3>
                </div>
      </Section>
    )
}

export default HomeSection;