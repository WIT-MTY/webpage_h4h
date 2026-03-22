import React from "react";
import Section from "../componentes/general/Section";
import { FaTiktok, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import Logo from "../componentes/general/Logo";
import LogoWIT from "../componentes/general/LogoWIT";

const ContactanosSection = () => {
    return (
      <Section id="contactanos" bg_color="#4A0C32" className="relative overflow-hidden">
        {/* Decorative Star - Bottom Left */}
        <img
          src="/images/figuras/estrella.svg"
          alt=""
          className="absolute bottom-0 left-0 w-48 md:w-64 lg:w-80 z-0"
        />

        {/* Decorative Doodle - Right Side */}
        <img
          src="/images/figuras/doodle_rosa_contactanos.svg"
          alt=""
          className="absolute top-0 right-0 w-64 md:w-80 lg:w-96 h-full object-contain z-0"
        />

        <div className="flex flex-col lg:flex-row justify-between sm:pb-10 md:pb-5 lg:pb-5 xl:pb-60 2xl:pb-60 relative z-10">  
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h1 className="font-high-cruiser text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-white mb-6 z-10">
              CONTÁCTANOS
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl">CORREO</p>
            <p className="text-white text-lg md:text-xl lg:text-2xl">INSTAGRAM</p>
          </div>

          <div className="text-center lg:text-right w-full lg:w-1/2">
            <h1 className="font-high-cruiser text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-white mb-6 z-10">
              EXPLORA
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition-colors duration-300"><a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">Código de conducta de MLH</a></p>
            <p className="text-white text-lg md:text-xl lg:text-2xl hover:text-pink-500 transition-colors duration-300"><a href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md">Políticas de privacidad</a></p>
          </div>
        </div>
          
        <div className="flex flex-col items-center justify-center relative z-10">
          <div className="sm:pd-1 md:pb-1 lg:pb-1 xl:pb-1 2xl:pb-1">
            <img className="w-90 sm:w-100 md:w-100 lg:w-60 xl:w-60 2xl:w-60 ease-in-out hover:scale-110 cursor-pointer" src="/images/h4h_logos/logo_h4h_corto.svg"></img>
          </div>
          <div className="flex space-x-2">
            <a href="https://www.instagram.com/hack4her.mty/" target="_blank" 
              className="text-white text-6xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <FaInstagram />
            </a>

            <a href="https://www.tiktok.com/@hack4her.mty" target="_blank" 
              className="text-white text-6xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <FaTiktok />
            </a>

            <a href="https://www.linkedin.com/company/82364150/" target="_blank" 
              className="text-white text-6xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <FaLinkedin />
            </a>

            <a href="https://www.linkedin.com/company/82364150/" target="_blank" 
              className="text-white text-6xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl hover:text-pink-500 transition-colors duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <FaDiscord />
            </a>

          </div> 
        </div>


    </Section>
  )
}

export default ContactanosSection;