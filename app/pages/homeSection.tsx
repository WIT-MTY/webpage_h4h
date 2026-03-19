"use client";
import React, { useState, useEffect } from "react";
import Section from "../componentes/general/Section";
import DoodleRosaInicio from "../componentes/figuras/DoodleRosaInicio";
import Sol from "../componentes/figuras/Sol";
import Estrella from "../componentes/figuras/Estrella";
import DoodleFuerte from "../componentes/figuras/DoodleFuerte";

const HomeSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2026-05-07T00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Section id="home" className="h-full flex flex-col items-center justify-center relative overflow-hidden" bg_color="linear-gradient(180deg, #AC1C75, #761450)">
            {/* Background figures */}
            <DoodleRosaInicio top_position="2%" left_position="3%" width="w-[600px]" />
            <Sol top_position="5%" left_position="75%" width="w-[600px]" />
            <Estrella top_position="65%" left_position="5%" width="w-96" />
            <DoodleFuerte top_position="70%" left_position="78%" width="w-[400px]" />

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center gap-8">
                {/* Countdown Timer */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl px-6 py-5 md:px-10 md:py-6 border border-white/20">
                    <div className="flex items-center justify-center gap-4 md:gap-6">
                        {/* Days */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-4xl md:text-6xl font-montserrat font-bold">
                                {String(timeLeft.days).padStart(2, '0')}
                            </div>
                            <div className="text-white text-sm md:text-base font-montserrat uppercase tracking-wider">Días</div>
                        </div>

                        {/* Hours */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-4xl md:text-6xl font-montserrat font-bold">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </div>
                            <div className="text-white text-sm md:text-base font-montserrat uppercase tracking-wider">Horas</div>
                        </div>

                        {/* Minutes */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-4xl md:text-6xl font-montserrat font-bold">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </div>
                            <div className="text-white text-sm md:text-base font-montserrat uppercase tracking-wider">Minutos</div>
                        </div>

                        {/* Seconds */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-4xl md:text-6xl font-montserrat font-bold">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </div>
                            <div className="text-white text-sm md:text-base font-montserrat uppercase tracking-wider">Segundos</div>
                        </div>
                    </div>
                </div>

                {/* HACK4HER Title */}
                <div className="relative w-[75vw] max-w-5xl">
                    {/* Background Rectangle */}
                    <img
                        src="/images/figuras/rectangle_inicio.svg"
                        alt="Rectangle Background"
                        className="w-full h-auto"
                    />

                    {/* Title Text - Positioned inside rectangle */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-4 px-4">
                        <img
                            src="/images/figuras/HACK.svg"
                            alt="HACK"
                            className="h-12 md:h-16 lg:h-20"
                        />
                        <img
                            src="/images/figuras/4.svg"
                            alt="4"
                            className="h-24 md:h-32 lg:h-40"
                        />
                        <img
                            src="/images/figuras/HER.svg"
                            alt="HER"
                            className="h-12 md:h-16 lg:h-20"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-4 w-full max-w-4xl px-4">
                    {/* Register Button */}
                    <button className="w-full md:w-96 text-white font-montserrat text-xl md:text-2xl font-bold px-16 md:px-24 py-6 md:py-7 rounded-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ backgroundColor: '#4F123F' }}>
                        ¡Regístrate ahora!
                    </button>

                    {/* Discord Button */}
                    <button className="w-full md:w-96 bg-transparent hover:bg-white/10 text-white font-montserrat text-xl md:text-2xl font-bold px-16 md:px-24 py-6 md:py-7 rounded-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ borderWidth: '3px', borderColor: '#411037' }}>
                        Discord
                    </button>
                </div>
            </div>
      </Section>
    )
}

export default HomeSection;