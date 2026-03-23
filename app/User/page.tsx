'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeaderUser from '../componentes/user_comp/HeaderUser';
import EstadoUser from '../componentes/user_comp/EstadoUser';

export default function PageUser() {

    const router = useRouter();
    const [estadoRegistro, setEstadoRegistro] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerEstado = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                router.push("/registro/iniciosesion");
                return;
            }

            // Simulación — reemplaza esto cuando conectes el backend
            setEstadoRegistro(1);
            setLoading(false);

            // Cuando conectes el backend, reemplaza la simulación por esto:
            // try {
            //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/[endpoint]`, {
            //     headers: {
            //       Authorization: `Bearer ${token}`,
            //     },
            //   });
            //
            //   if (!res.ok) {
            //     router.push("/registro/iniciosesion");
            //     return;
            //   }
            //
            //   const data = await res.json();
            //   setEstadoRegistro(data.estado_actual);
            // } catch (error) {
            //   console.error("Error al obtener estado:", error);
            // } finally {
            //   setLoading(false);
            // }
        };
        obtenerEstado();
    }, []);

    if (loading) {
        return (
        <section className="w-full min-h-screen flex items-center justify-center" style={{ background: "#F0CEE3" }}>
            <p className="text-[#4A0C32]">Cargando...</p>
        </section>
        );
    }
    
    return (
        <section className="w-full min-h-screen flex flex-col relative" style={{ background: "#F0CEE3" }}>
            <HeaderUser />
            <main className="flex-1 max-w-7xl mx-auto py-6 px-4 w-full">
                <p className="text-[#4A0C32]">Revisa aquí los siguientes pasos para seguir tu camino al evento.</p>
                {estadoRegistro !== null && <EstadoUser estado_actual={estadoRegistro} />}
            </main>
        </section>
    );
}