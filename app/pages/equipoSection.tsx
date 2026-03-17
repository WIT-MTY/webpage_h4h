import React, { useState } from "react";
import Section from "../componentes/general/Section";
import Estrella from "../componentes/figuras/Estrella";
import Flor from "../componentes/figuras/Flor";
import Sol from "../componentes/figuras/Sol";
import DoodleFuerte from "../componentes/figuras/DoodleFuerte";
import DoodleRosa from "../componentes/figuras/DoodleRosa";
import EquipoBoard from "../componentes/equipo_comp/EquipoBoard";


const EquipoSection = () => {
    return (
        <Section id="equipo" bg_color="#4A0C32">

            <div className="absolute inset-0 z-0">
                <Estrella top_position="10%" left_position="5%" width="w-20"/>
                <Flor top_position="70%" left_position="60%" width="w-20"/>
                <DoodleFuerte top_position="10%" left_position="80%" rotation="130" width="w-20"/> 
                <DoodleRosa top_position="70%" left_position="2%" rotation="100" width="w-20"/>
            </div>

            <div className="text-center max-w-4xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
                <h1 className="font-high-cruiser text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center mb-6 z-10">
                    EQUIPO
                </h1>
            </div>

            <EquipoBoard />
            
        </Section>
    );
};

export default EquipoSection;