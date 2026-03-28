'use client';
import HeaderAdmin from '../componentes/admin_comp/HeaderAdmin';
import { useState } from 'react';



export default function PageAdmin() {
  

  return (
    <div className="p-8">

        {/* titulo */}
        <h1 className="font-high-cruiser text-6xl text-[#4A0C32] mb-2">
            Estadísticas de participantes
        </h1>
        <p className="text-[#4A0C32]">Visión general de métricas de participantes</p>
        <div className="w-full h-0.5 bg-[#4A0C32] rounded-full mx-auto my-3">
            {/* Línea decorativa */}
        </div>

        
     
    </div>
  );
}