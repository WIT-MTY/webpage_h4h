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
        <Section id="home" className="h-full flex flex-col items-center justify-start" bg_color="linear-gradient(180deg, #AC1C75, #761450)" overflow="overflow-visible" verticalAlign="justify-start">
            {/* Background figures - positioned absolutely relative to section */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <DoodleRosaInicio
                    top_position="-2%"
                    left_position="-3%"
                    width="800px"
                    height="800px"
                    rotation="-1"
                    opacity={1}
                />
                <Sol
                    top_position="-11%"
                    left_position="37%"
                    width="600px"
                    height="600px"
                    rotation="-1"
                    opacity={5}
                />
                <Estrella
                    top_position="50%"
                    left_position="-1%"
                    width="500px"
                    height="500px"
                    rotation="0"
                    opacity={1}
                />
                <DoodleFuerte
                    top_position="0%"
                    left_position="30%"
                    width="1150px"
                    height="1150px"
                    rotation="0"
                    opacity={1}
                />
            </div>

            {/* Content */}
            <div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 z-10 w-full flex flex-col items-center gap-8">
                {/* Countdown Timer */}
                <div className="backdrop-blur-sm rounded-xl px-6 py-6 pb-4 md:px-10 md:py-8 md:pb-6 border border-white/20" style={{ backgroundColor: '#4F123F4D' }}>
                    <div className="flex items-center justify-center gap-4 md:gap-6">
                        {/* Days */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-4xl md:text-6xl font-high-cruiser">
                                {String(timeLeft.days).padStart(2, '0')}
                            </div>
                            <div className="text-white text-xl md:text-2xl font-high-cruiser tracking-wider">días</div>
                        </div>

                        {/* Hours */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-4xl md:text-6xl font-high-cruiser">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </div>
                            <div className="text-white text-xl md:text-2xl font-high-cruiser tracking-wider">horas</div>
                        </div>

                        {/* Minutes */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-4xl md:text-6xl font-high-cruiser">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </div>
                            <div className="text-white text-xl md:text-2xl font-high-cruiser tracking-wider">minutos</div>
                        </div>

                        {/* Seconds */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-4xl md:text-6xl font-high-cruiser">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </div>
                            <div className="text-white text-xl md:text-2xl font-high-cruiser tracking-wider">segundos</div>
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
                    <button className="w-full md:w-96 text-white font-montserrat text-xl md:text-2xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ backgroundColor: '#4F123F', paddingTop: '30px', paddingBottom: '30px', paddingLeft: '60px', paddingRight: '60px' }}>
                        ¡Regístrate ahora!
                    </button>

                    {/* Discord Button */}
                    <button className="w-full md:w-96 bg-transparent hover:bg-white/10 text-white font-montserrat text-xl md:text-2xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ borderWidth: '3px', borderColor: '#411037', paddingTop: '30px', paddingBottom: '30px', paddingLeft: '60px', paddingRight: '60px' }}>
                        Discord
                    </button>
                </div>
            </div>
      </Section>
    )
}

export default HomeSection;