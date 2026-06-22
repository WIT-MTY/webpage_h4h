"use client";
import React, { useState, useEffect } from "react";
import Section from "../componentes/general/Section";
import DoodleRosaInicio from "../componentes/figuras/DoodleRosaInicio";
import Sol from "../componentes/figuras/Sol";
import Estrella from "../componentes/figuras/Estrella";
import DoodleFuerte from "../componentes/figuras/DoodleFuerte";
import BotonForms from "../componentes/formulario_comp/BotonForms";

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
                    left_position="-2%"
                    width="586px"
                    height="585px"
                    rotation="-1"
                    opacity={1}
                />
                <Sol
                    top_position="-11%"
                    left_position="40%"
                    width="500px"
                    height="500px"
                    rotation="-1"
                    opacity={5}
                />
                <Estrella
                    top_position="42%"
                    left_position="0%"
                    width="400px"
                    height="430px"
                    rotation="0"
                    opacity={1}
                />
                <DoodleFuerte
                    top_position="0%"
                    left_position="42%"
                    width="900px"
                    height="850px"
                    rotation="0"
                    opacity={1}
                />
            </div>

            {/* Logo ARCA - positioned on the left */}
            <div className="absolute left-0 sm:left-0 md:left-0 lg:left-0 top-[2%] sm:top-[4%] md:top-[5%] lg:top-[6%] z-20 pointer-events-none">
                <img
                    src="/images/colaborador_images/logo arca home.svg"
                    alt="Logo ARCA"
                    className="w-50 sm:w-70 md:w-80 lg:w-70 xl:w-60 h-auto opacity-100"
                />
            </div>

            {/* Content — scroll del documento (sin contenedor interno que atrape la rueda táctil) */}
            <div className="relative z-10 w-full flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 sm:px-3 md:px-4 pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12">
                {/* Countdown Timer */}
                <div className="w-full max-w-sm backdrop-blur-sm rounded-xl px-0 py-2 sm:py-2.5 md:py-3 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]" style={{ backgroundColor: '#4F123F4D' }}>
                    <div className="grid grid-cols-2 gap-x-1 gap-y-1.5 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-1.5 md:gap-2">
                        {/* Days */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-2xl sm:text-3xl md:text-4xl font-high-cruiser tabular-nums leading-none">
                                {String(timeLeft.days).padStart(2, '0')}
                            </div>
                            <div className="text-white text-sm sm:text-base md:text-lg font-high-cruiser tracking-wider">días</div>
                        </div>

                        {/* Hours */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-2xl sm:text-3xl md:text-4xl font-high-cruiser tabular-nums leading-none">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </div>
                            <div className="text-white text-sm sm:text-base md:text-lg font-high-cruiser tracking-wider">horas</div>
                        </div>

                        {/* Minutes */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-2xl sm:text-3xl md:text-4xl font-high-cruiser tabular-nums leading-none">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </div>
                            <div className="text-white text-sm sm:text-base md:text-lg font-high-cruiser tracking-wider">minutos</div>
                        </div>

                        {/* Seconds */}
                        <div className="flex flex-col items-center">
                            <div className="text-white text-2xl sm:text-3xl md:text-4xl font-high-cruiser tabular-nums leading-none">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </div>
                            <div className="text-white text-sm sm:text-base md:text-lg font-high-cruiser tracking-wider">segundos</div>
                        </div>
                    </div>
                </div>

                {/* HACK4HER — misma altura en HACK/HER; grupo centrado en el rectángulo */}
                <div className="relative w-[min(85vw,45rem)] shrink-0 overflow-hidden">
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
                            paddingLeft: 'clamp(2rem, 8vw, 6rem)',
                            paddingRight: 'clamp(2rem, 8vw, 6rem)',
                        }}
                    >
                        <div className="flex max-w-full max-h-full items-center justify-center gap-1 sm:gap-1.5 md:gap-2">
                            <img
                                src="/images/figuras/HACK.svg"
                                alt="HACK"
                                className="h-[3.5rem] w-auto max-h-[14vw] max-w-[30vw] shrink-0 object-contain object-center sm:h-[4rem] sm:max-h-[12vw] md:h-[5rem] md:max-h-[10vw] lg:h-[3.5rem] lg:max-h-[4.5vw] xl:h-[3.8rem] xl:max-h-[4vw]"
                            />
                            <img
                                src="/images/figuras/4.svg"
                                alt="4"
                                className="h-[3.6rem] w-auto max-h-[15vw] max-w-[18vw] shrink-0 object-contain object-center sm:h-[4.2rem] sm:max-h-[13vw] md:h-[5.5rem] md:max-h-[11vw] lg:h-[7rem] lg:max-h-[9vw] xl:h-[7.5rem] xl:max-h-[8vw]"
                            />
                            <img
                                src="/images/figuras/HER.svg"
                                alt="HER"
                                className="h-[2.8rem] w-auto max-h-[12vw] max-w-[25vw] shrink-0 object-contain object-center sm:h-[3.3rem] sm:max-h-[10vw] md:h-[4.2rem] md:max-h-[8vw] lg:h-[3.5rem] lg:max-h-[4.5vw] xl:h-[3.8rem] xl:max-h-[4vw]"
                            />
                        </div>
                    </div>
                </div>

                {/* Fecha — misma familia visual que countdown (vidrio + high-cruiser) */}
                <div className="w-full flex justify-center px-1 -mt-1 sm:mt-0">
                    <div className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-[#4F123F4D] backdrop-blur-sm px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 max-w-full shadow-[0_6px_28px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]">
                        <p className="font-high-cruiser text-white text-center text-xs sm:text-sm md:text-base lg:text-lg tracking-wide sm:tracking-wider text-balance drop-shadow-sm">
                            6 y 7 DE JUNIO DE 2026
                        </p>
                    </div>
                </div>

                {/* Botones extra grandes; esquinas poco redondeadas */}
                {/*}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full max-w-4xl mt-1 sm:mt-2 px-0 sm:px-1">
                    
                    <BotonForms />

                  
                    <a href="https://discord.gg/nPj88kyzkm" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <button
                            type="button"
                            className="w-full sm:w-[240px] md:w-[260px] bg-transparent hover:bg-white/10 text-white font-montserrat text-base sm:text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] py-2.5 px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 min-h-[2.75rem] sm:min-h-0 border-[3px] border-[#411037]"
                        >
                            Discord

                        </button>
                    </a>
                </div>
                */}

                {/* Logo WIT centrado abajo */}
                <div className="w-full flex justify-center mt-4 sm:mt-5 md:mt-6">
                    <img
                        src="/images/wit_logos/logo_wit_blanco.png"
                        alt="Logo WIT"
                        className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto opacity-90"
                    />
                </div>
            </div>
      </Section>
    )
}

export default HomeSection;