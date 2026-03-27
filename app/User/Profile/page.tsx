'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFetchProtegido } from '@/app/hooks/utils/useFetchProtegido';

// 
interface Usuario {
  nombre: string;
  apellido: string;              
  genero: string;
  talla_playera: string;       
  fecha_nacimiento: string;      
  telefono: string;
  pais: string;
  estado?: string;
  universidad: string;          
  carrera: string;
  semestre: string;
  vegana: boolean;               
  tiene_restriccion_alimentaria: boolean; 
  detalle_restriccion_alimentaria?: string;
  cv_url: string;           
  linkedin_url?: string;
  github_url?: string;
}



export default function UserProfile() {
  const router = useRouter();
  const { fetchProtegido } = useFetchProtegido();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
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
            const data = await fetchProtegido(
                `${process.env.NEXT_PUBLIC_API_URL}/participantes/${usuarioBaseId}`
            );
            if (data) setUsuario(data);
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

  if (!usuario) return null;

  return (
    <div className="p-8 space-y-4">
      <div className="space-y-4">
      <h1 className="font-high-cruiser text-6xl text-[#4A0C32] transition-colors">
        Mi perfil
      </h1>

      {/* Datos personales */}
      <div className="bg-[#C4649F]/60 p-6 rounded-lg">
        <h2 className="text-white text-xl font-semibold mb-4">Datos personales</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-white/60 text-sm mb-1">Nombre(s)</p>
            <p className="text-white font-medium">{usuario.nombre}</p>
          </div>

          <div>
            <p className="text-white/60 text-sm mb-1">Apellido(s)</p>
            <p className="text-white font-medium">{usuario.apellido}</p>
          </div>

          <div>
            <p className="text-white/60 text-sm mb-1">Género</p>
            <p className="text-white font-medium">{usuario.genero}</p>
          </div>

          <div>
            <p className="text-white/60 text-sm mb-1">Talla de playera</p>
            <p className="text-white font-medium">{usuario.talla_playera}</p>
          </div>

          <div>
            <p className="text-white/60 text-sm mb-1">Fecha de nacimiento</p>
            <p className="text-white font-medium">{usuario.fecha_nacimiento}</p>
          </div>

          <div>
            <p className="text-white/60 text-sm mb-1">Teléfono</p>
            <p className="text-white font-medium">{usuario.telefono}</p>
            </div>
          </div>
        </div>

        {/* Datos académicos */}
        <div className="bg-[#C4649F]/60 p-6 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">Datos académicos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-white/60 text-sm mb-1">País</p>
              <p className="text-white font-medium">{usuario.pais}</p>
            </div>

            {usuario.pais === "México" && (
              <div>
                <p className="text-white/60 text-sm mb-1">Estado</p>
                <p className="text-white font-medium">{usuario.estado}</p>
              </div>
            )}

            {usuario.pais === "México" && (
              <div>
                <p className="text-white/60 text-sm mb-1">Universiad</p>
                <p className="text-white font-medium">{usuario.universidad}</p>
              </div>
            )}

            {usuario.pais != "México" && (
              <div>
                <p className="text-white/60 text-sm mb-1">Universidad</p>
                <p className="text-white font-medium">{usuario.universidad}</p>
              </div>
            )}

            <div>
              <p className="text-white/60 text-sm mb-1">Carrera</p>
              <p className="text-white font-medium">{usuario.carrera}</p>
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">Semestre</p>
              <p className="text-white font-medium">{usuario.semestre}</p>
            </div>

          </div>
      </div>

        {/* Preferencias alimentarias */}
        <div className="bg-[#C4649F]/60 p-6 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">Preferencias alimentarias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <p className="text-white/60 text-sm mb-1">¿Eres vegano/a?</p>
              <p className="text-white font-medium">{usuario.vegana ? "Sí" : "No"}</p>
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">¿Tienes restricción alimentaria?</p>
              <p className="text-white font-medium">{usuario.tiene_restriccion_alimentaria ? "Sí" : "No"}</p>

            </div>

            {usuario.tiene_restriccion_alimentaria === true && (
              <div>
                <p className="text-white/60 text-sm mb-1">Especificación</p>
                <p className="text-white font-medium">{usuario.detalle_restriccion_alimentaria}</p>
              </div>
            )}

          </div>
        </div>

        {/* Información profesional */}
        <div className="bg-[#C4649F]/60 p-6 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">Información profesional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <p className="text-white/60 text-sm mb-1">CV</p>
                <a href={usuario.cv_url} target="_blank" rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 underline transition-colors text-sm">
                  Ver CV
                </a>
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">LinkedIn</p>
              {usuario.linkedin_url ? (
                <a href={usuario.linkedin_url} target="_blank" rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 underline transition-colors text-sm">
                  Ver perfil
                </a>
              ) : (
                <p className="text-white/40 text-sm">No proporcionado</p>
              )}
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">GitHub</p>
              {usuario.github_url ? (
                <a href={usuario.github_url} target="_blank" rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 underline transition-colors text-sm">
                  Ver perfil
                </a>
              ) : (
                <p className="text-white/40 text-sm">No proporcionado</p>
              )}
            </div>

          </div>
        </div>
        </div>
    </div>
  
  );
}
