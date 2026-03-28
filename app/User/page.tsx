'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeaderUser from '../componentes/user_comp/HeaderUser';
import EstadoUser from '../componentes/user_comp/EstadoUser';
import { useFetchProtegido } from '../hooks/utils/useFetchProtegido';

// 
interface EstatusParticipante {
  estatus: string;
}

export default function PageUser() {

    const router = useRouter();
      const { fetchProtegido } = useFetchProtegido();
      const [estatus, setEstatus] = useState<EstatusParticipante | null>(null);
      const [loading, setLoading] = useState(true);

    useEffect(() => {
    const obtenerPerfil = async () => {
        const usuarioBaseId = document.cookie
          .split("; ")
          .find(row => row.startsWith("usuarioBaseId="))
          ?.split("=")[1];

          if (!usuarioBaseId) {
            router.push("/registro/iniciosesion");
            return;
          }

           try {
            const estatus = await fetchProtegido(
                `${process.env.NEXT_PUBLIC_API_URL}/participantes/estatus/${usuarioBaseId}`
            );
            if (estatus) setEstatus(estatus);
          } catch (error) {
            console.error("Error al obtener perfil:", error);
          } finally {
            setLoading(false);
          }
        };

      obtenerPerfil();
    }, []);

    if (loading) {
        return (
        <section className="w-full min-h-screen flex items-center justify-center" style={{ background: "#F0CEE3" }}>
            <p className="text-[#4A0C32]">Cargando...</p>
        </section>
        );
    }
    
    return (
        <div className="p-8">
            <div className="space-y-4">
                <h1 className="font-high-cruiser text-6xl text-[#4A0C32] transition-colors">
                    ¡Bienvenida!
                </h1>
                <p className="text-[#4A0C32]">Revisa aquí los siguientes pasos para seguir tu camino a Hack4Her.</p>

                <div className="w-full h-0.5 bg-[#4A0C32] rounded-full mx-auto">
                    {/* Línea decorativa */}
                </div>
                
                <h1 className='text-xl font-semibold mb-4'>Estatus de participación</h1>
                {estatus !== null && (<EstadoUser descripcion={estatus.estatus} />)}

            </div>
        </div>
        
    );
}