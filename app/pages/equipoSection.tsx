import React from "react";
import BackgroundDecor from "../componentes/general/BackgroundDoodles";
import EquipoBoard from "../componentes/equipo_comp/EquipoBoard";

const EquipoSection = () => {
    return (
        <section
            id="equipo"
            className="relative min-h-screen overflow-hidden py-20 px-4"
            style={{ backgroundColor: "#4A0C32" }}
        >
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<BackgroundDecor />
</div>

            <div className="relative z-10">
                <div className="text-center max-w-4xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
                    <h1 className="font-high-cruiser text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center mb-6">
                        EQUIPO
                    </h1>
                </div>

                <EquipoBoard />
            </div>
        </section>
    );
};

export default EquipoSection;