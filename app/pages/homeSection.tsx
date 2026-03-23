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
        const targetDate = new Date('2026-06-06T00:00:00').getTime();

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
        <Section id="home" className="h-full flex flex-col items-center justify-start" bg_color="linear-gradient(180deg, #AC1C75, #761450)" overflow="overflow-visible" verticalAlign="justify-start" minHeightViewport noPadding>
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

            {/* Content — scroll del documento (sin contenedor interno que atrape la rueda táctil) */}
            <div className="relative z-10 w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-3 md:px-4 pt-14 sm:pt-20 md:pt-24 pb-10 sm:pb-12">
                {/* Countdown Timer */}
                <div className="w-full max-w-2xl md:max-w-4xl backdrop-blur-sm rounded-xl px-1 py-3.5 sm:px-1.5 sm:py-5 md:px-2 md:py-7 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]" style={{ backgroundColor: '#4F123F4D' }}>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-2.5 md:gap-4">
                        {/* Days */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-3xl sm:text-4xl md:text-6xl font-high-cruiser tabular-nums leading-none">
                                {String(timeLeft.days).padStart(2, '0')}
                            </div>
                            <div className="text-white text-base sm:text-xl md:text-2xl font-high-cruiser tracking-wider">días</div>
                        </div>

                        {/* Hours */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-3xl sm:text-4xl md:text-6xl font-high-cruiser tabular-nums leading-none">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </div>
                            <div className="text-white text-base sm:text-xl md:text-2xl font-high-cruiser tracking-wider">horas</div>
                        </div>

                        {/* Minutes */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-3xl sm:text-4xl md:text-6xl font-high-cruiser tabular-nums leading-none">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </div>
                            <div className="text-white text-base sm:text-xl md:text-2xl font-high-cruiser tracking-wider">minutos</div>
                        </div>

                        {/* Seconds */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-3xl sm:text-4xl md:text-6xl font-high-cruiser tabular-nums leading-none">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </div>
                            <div className="text-white text-base sm:text-xl md:text-2xl font-high-cruiser tracking-wider">segundos</div>
                        </div>
                    </div>
                </div>

                {/* HACK4HER — misma altura en HACK/HER; grupo centrado en el rectángulo */}
                <div className="relative w-[min(96vw,64rem)] shrink-0">
                    {/* Background Rectangle */}
                    <img
                        src="/images/figuras/rectangle_inicio.svg"
                        alt="Rectangle Background"
                        className="w-full h-auto select-none pointer-events-none"
                    />

                    {/* padding lateral vía style: clamp() con comas no funciona bien en clases arbitrarias de Tailwind */}
                    <div
                        className="absolute inset-0 flex items-center justify-center box-border"
                        style={{
                            paddingLeft: 'clamp(2.5rem, 10vw, 8rem)',
                            paddingRight: 'clamp(2.5rem, 10vw, 8rem)',
                        }}
                    >
                        <div className="flex max-w-full items-center justify-center gap-1 sm:gap-1.5 md:gap-2.5">
                            <img
                                src="/images/figuras/HACK.svg"
                                alt="HACK"
                                className="h-11 w-auto max-h-[5.5rem] shrink-0 object-contain object-center sm:h-14 md:h-[4.35rem] lg:h-[5.35rem]"
                            />
                            <img
                                src="/images/figuras/4.svg"
                                alt="4"
                                className="h-[4.75rem] w-auto max-h-[min(42vh,9.5rem)] shrink-0 object-contain object-center sm:h-[5.75rem] md:h-[7.25rem] lg:h-[9.25rem]"
                            />
                            <img
                                src="/images/figuras/HER.svg"
                                alt="HER"
                                className="h-11 w-auto max-h-[5.5rem] shrink-0 object-contain object-center sm:h-14 md:h-[4.35rem] lg:h-[5.35rem]"
                            />
                        </div>
                    </div>
                </div>

                {/* Fecha — misma familia visual que countdown (vidrio + high-cruiser) */}
                <div className="w-full flex justify-center px-1 -mt-1 sm:mt-0">
                    <div className="inline-flex items-center justify-center rounded-full border border-white/25 bg-[#4F123F4D] backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 max-w-full shadow-[0_6px_28px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]">
                        <p className="font-high-cruiser text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide sm:tracking-wider text-balance drop-shadow-sm">
                            6 y 7 DE JUNIO DE 2026
                        </p>
                    </div>
                </div>

                {/* Botones extra grandes; esquinas poco redondeadas */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl mt-1 sm:mt-2 px-0 sm:px-1">
                    {/* Register Button */}
                    <button
                        type="button"
                        className="w-full sm:w-auto text-white font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] py-5 px-8 sm:py-6 sm:px-11 md:py-7 md:px-12 min-h-[3.5rem] sm:min-h-0"
                        style={{ backgroundColor: '#4F123F' }}
                    >
                        ¡Regístrate ahora!
                    </button>

                    {/* Discord Button */}
                    <button
                        type="button"
                        className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] py-5 px-8 sm:py-6 sm:px-11 md:py-7 md:px-12 min-h-[3.5rem] sm:min-h-0 border-[3px] border-[#411037]"
                    >
                        Discord
                    </button>
                </div>
            </div>
      </Section>
    )
}

export default HomeSection;