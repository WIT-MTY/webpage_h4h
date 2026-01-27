'use client';
import React, { useState } from "react";
import MemberCard from "./memberCard";
import { useEquipo } from "@/app/hooks/utils/useEquipo";

const EquipoComponent: React.FC = () => {
  const [equipoSeleccionado, setEquipoSeleccionado] = useState<number>(0);
  
  const { equipo } = useEquipo();
  
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
     
      <div className="flex flex-col  gap-8">
       
        {/* */}
        <div className="flex">
          {equipo.map((equipoItem, index) => (
          <button
            key={index}
            onClick={() => setEquipoSeleccionado(index)}
            className={`flex-1 py-3 px-4 text-center font-semibold transition-all duration-300 border-r last:border-r-0 ${
            equipoSeleccionado === index
            ? "bg-white text-[#FF69B4] shadow-inner"
            : "bg-transparent text-principal-morado-800 hover:bg-principal-morado-400"
            }`}
          >
            {equipoItem.area}
          </button>
          ))}
        </div>
        {/* */}

        {/* */}
        <div className="">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {equipo[equipoSeleccionado]?.area || "Equipo"}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {equipo[equipoSeleccionado]?.integrantes.map((integrante, index) => (
                <MemberCard
                  key={index}
                  memberData={{
                    imageMember: integrante.img,
                    nameMember: integrante.nombre,
                    rolMmeber: integrante.puesto
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        {/* */}

      </div>
    </div>
  );
};

export default EquipoComponent;