import React from "react";
import Section from "../componentes/general/Section";
import { FaTiktok, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import Logo from "../componentes/general/Logo";
import LogoWIT from "../componentes/general/LogoWIT";

const ContactanosSection = () => {
    return (
      <Section id="contactanos" bg_color="#4A0C32" className="relative min-h-screen py-12" overflow="overflow-hidden">
        {/* Decorative Star - Bottom Left */}
        <img
          src="/images/figuras/estrella.svg"
          alt=""
          className="absolute -bottom-20 left-0 w-80 md:w-96 lg:w-[30rem] xl:w-[32rem] z-0 pointer-events-none"
        />

        {/* Decorative Doodle - Right Side */}
        <img
          src="/images/figuras/doodle_rosa_contactanos.svg"
          alt=""
          className="absolute top-0 right-0 w-96 md:w-[26rem] lg:w-[32rem] xl:w-[36rem] h-full object-contain object-right z-0 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 pb-10 md:pb-12 lg:pb-16 xl:pb-20 relative z-10 pt-20 md:pt-24 lg:pt-28">
          <div className="text-center lg:text-left w-full lg:w-1/2 mt-8 md:mt-12 lg:mt-16">
            <h1 className="font-high-cruiser text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-white mb-6 z-10 underline">
              CONTÁCTANOS
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition-colors duration-300"><a href="mailto:hack4her.mty@gmail.com">Correo</a></p>

          </div>

          <div className="text-center lg:text-right w-full lg:w-1/2 mt-8 md:mt-12 lg:mt-16">
            <h1 className="font-high-cruiser text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-white mb-6 z-10 underline">
              EXPLORA
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition-colors duration-300"><a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">Código de conducta de MLH</a></p>
            <p className="text-white text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition-colors duration-300"><a href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md">Políticas de privacidad</a></p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center relative z-10 mt-4 md:mt-6 lg:mt-8 px-4 pb-8">
          <div className="mb-0">
            <img className="w-48 sm:w-56 md:w-64 lg:w-56 xl:w-64 min-w-[180px] max-w-[min(25vw,20rem)]" src="/images/h4h_logos/logo_h4h_corto.svg" alt="Logo H4H"></img>
          </div>
          <div className="flex gap-3 sm:gap-4 mb-4 flex-wrap justify-center">
            <a href="https://www.instagram.com/hack4her.mty/" target="_blank"
              className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
              <FaInstagram />
            </a>

            <a href="https://www.tiktok.com/@hack4her.mty" target="_blank"
              className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
              <FaTiktok />
            </a>

            <a href="https://www.linkedin.com/company/wit-mty/posts/?feedView=all" target="_blank"
              className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
              <FaLinkedin />
            </a>

            <span className="text-white text-3xl sm:text-4xl md:text-5xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
              <FaDiscord />
            </span>

          </div>
          <p className="text-white text-sm sm:text-base md:text-lg font-montserrat text-center">
            Hecho con <span className="text-purple-500">💜</span> por el equipo de Hack4Her
          </p>
        </div>
        </div>

    </Section>
  )
}

export default ContactanosSection;
