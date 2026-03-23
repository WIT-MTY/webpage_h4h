'use client';
import { useState } from 'react';
import HeaderUser from '../componentes/user_comp/HeaderUser';
import EstadoUser from '../componentes/user_comp/EstadoUser';

export default function PageUser() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <section className="w-full min-h-screen flex flex-col relative" style={{ background: "#F0CEE3" }}>
            <HeaderUser />
            <main className="flex-1 max-w-7xl mx-auto py-6 px-4 w-full">
                <p className="text-[#4A0C32]">Revisa aquí los siguientes pasos para seguir tu camino en el evento.</p>
                <EstadoUser estado_actual={3} />
            </main>
        </section>
    );
}