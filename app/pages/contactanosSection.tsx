import React from "react";
import Section from "../componentes/general/Section";
import { FaTiktok, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import Logo from "../componentes/general/Logo";
import LogoWIT from "../componentes/general/LogoWIT";

const ContactanosSection = () => {
    return (
      <Section id="contactanos" bg_color="#4A0C32" className="relative" overflow="overflow-hidden">
        {/* Decorative Star - Bottom Left */}
        <img
          src="/images/figuras/estrella.svg"
          alt=""
          className="absolute -bottom-30 left-0 w-80 md:w-96 lg:w-[32rem] z-0"
        />

        {/* Decorative Doodle - Right Side */}
        <img
          src="/images/figuras/doodle_rosa_contactanos.svg"
          alt=""
          className="absolute top-0 -right-1 w-96 md:w-[28rem] lg:w-[36rem] h-full object-contain z-0"
        />

        <div className="flex flex-col lg:flex-row justify-between sm:pb-10 md:pb-5 lg:pb-5 xl:pb-60 2xl:pb-60 relative z-10 pt-20 md:pt-24 lg:pt-28">
          <div className="text-center lg:text-left w-full lg:w-1/2 mt-16 md:mt-20 lg:mt-24">
            <h1 className="font-high-cruiser text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-white mb-6 z-10 underline">
              CONTÁCTANOS
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition-colors duration-300"><a href="mailto:hack4her.mty@gmail.com">CORREO</a></p>
            
          </div>

          <div className="text-center lg:text-right w-full lg:w-1/2 mt-16 md:mt-20 lg:mt-24">
            <h1 className="font-high-cruiser text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-white mb-6 z-10 underline">
              EXPLORA
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition-colors duration-300"><a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">Código de conducta de MLH</a></p>
            <p className="text-white text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition-colors duration-300"><a href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md">Políticas de privacidad</a></p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center relative z-10 -mt-32 md:-mt-40 lg:-mt-48">
          <div className="-mb-8">
            <img className="w-52 sm:w-60 md:w-60 lg:w-40 xl:w-40 2xl:w-40 ease-in-out hover:scale-110 cursor-pointer" src="/images/h4h_logos/logo_h4h_corto.svg"></img>
          </div>
          <div className="flex space-x-2 mb-4">
            <a href="https://www.instagram.com/hack4her.mty/" target="_blank"
              className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <FaInstagram />
            </a>

            <a href="https://www.tiktok.com/@hack4her.mty" target="_blank"
              className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <FaTiktok />
            </a>

            <a href="https://www.linkedin.com/company/wit-mty/posts/?feedView=all" target="_blank"
              className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <FaLinkedin />
            </a>

            <a href="https://www.linkedin.com/company/82364150/" target="_blank"
              className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <FaDiscord />
            </a>

          </div>
          <p className="text-white text-base md:text-lg font-montserrat">
            Hecho con <span className="text-purple-500">💜</span> por el equipo de Hack4Her
          </p>
        </div>


    </Section>
  )
}

export default ContactanosSection;