'use client';
import HeaderAdmin from '@/app/componentes/admin_comp/HeaderAdmin';
import { useState } from 'react';


export default function PageReto() {
  

  return (
    <div className="p-8">

        {/* titulo */}
        <h1 className="font-high-cruiser text-6xl text-[#4A0C32] mb-2">
            Panel de administración de Retos
        </h1>
        <p className="text-[#4A0C32]">Gestión de solicitudes de reto</p>
        <div className="w-full h-0.5 bg-[#4A0C32] rounded-full mx-auto my-3">
            {/* Línea decorativa */}
        </div>
     
    </div>
  );
}