import React from "react";
import Section from "../componentes/general/Section";
import FolderData from "../componentes/equipo_comp/folderData";

const EquipoSection = () => {
    return (
        <Section id="equipo" backgroundColor="bg-secundario-rosa-claro-300" className="h-full flex flex-col items-center justify-center">

        <img 
            src="images/equipo_page/laptopFigure.svg" 
            alt="colaborador" 
            className="w-250 md:w-250 object-contain"
          />
        <div className="flex-row">
            <FolderData />
        <FolderData />
        </div>
        
      </Section>
    )
}

export default EquipoSection;