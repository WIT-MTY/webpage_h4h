import React from "react";
import Section from "../componentes/general/Section";

import EquipoComponent from "../componentes/equipo/equipoComponente";

const EquipoSection = () => {
    return (
        <Section id="equipo" backgroundColor="bg-secundario-rosa-600" className=" h-full  items-center justify-center">
      
          <p className="text-secundario-morado text-2xl font-high-cruiser">Equipo</p>
          <h2 className="text-3xl font-bold mt-4">Equipo</h2>
          
        <EquipoComponent />
      </Section>
    )
}

export default EquipoSection;