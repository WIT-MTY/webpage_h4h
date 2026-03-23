'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeaderUser from '@/app/componentes/user_comp/HeaderUser';

// 
interface Usuario {
  nombre: string;
  apellidos: string;
  genero: string;
  talla: string;
  fechaNacimiento: string;
  telefono: string;
  pais: string;
  estado?: string;
  universidad?: string;
  universidadMexico?: string;
  carrera: string;
  semestre: string;
  vegano: boolean;
  restriccionAlimentaria: boolean;
  especificacionRestriccion?: string;
  cv: string;
  linkedin?: string;
  github?: string;
  estado_actual: number;
}

// Simulación — reemplaza con datos reales del backend
const usuarioEjemplo: Usuario = {
  nombre: "Ana",
  apellidos: "García López",
  genero: "Mujer",
  talla: "M",
  fechaNacimiento: "2000-05-12",
  telefono: "81 1234 5678",
  pais: "México",
  estado: "Nuevo León",
  universidad:"Furman",
  universidadMexico: "Tec de Monterrey",
  carrera: "Ingeniería en Tecnologías Computacionales",
  semestre: "6to semestre",
  vegano: false,
  restriccionAlimentaria: false,
  especificacionRestriccion: "",
  cv: "cv_ana_garcia.pdf",
  linkedin: "",
  github: "",
  estado_actual: 1,
};

export default function UserProfile() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerPerfil = async () => {
      const token = localStorage.getItem("token");

      /*if (!token) {
        router.push("/registro/iniciosesion");
        return;
      }*/

      // Simulación — reemplaza esto cuando conectes el backend
      setUsuario(usuarioEjemplo);
      setLoading(false);

      // Cuando conectes el backend, reemplaza la simulación por esto:
      // try {
      //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/perfil`, {
      //     headers: { Authorization: `Bearer ${token}` },
      //   });
      //
      //   if (!res.ok) {
      //     router.push("/registro/iniciosesion");
      //     return;
      //   }
      //
      //   const data = await res.json();
      //   setUsuario(data);
      // } catch (error) {
      //   console.error("Error al obtener perfil:", error);
      // } finally {
      //   setLoading(false);
      // }
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
    <div className="min-h-screen" style={{ background: "#F0CEE3" }}>
      <HeaderUser />

      <main className="max-w-7xl mx-auto py-8 px-4 w-full space-y-6">
        <h1 className="font-high-cruiser text-6xl text-[#4A0C32] group-hover:text-pink-600 transition-colors">
          Mi perfil
        </h1>

        {/* Datos personales */}
        <div className="bg-[#C4649F]/60 p-8 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">Datos personales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <p className="text-white/60 text-sm mb-1">Nombre(s)</p>
              <p className="text-white font-medium">{usuario.nombre}</p>
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">Apellido(s)</p>
              <p className="text-white font-medium">{usuario.apellidos}</p>
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">Género</p>
              <p className="text-white font-medium">{usuario.genero}</p>
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">Talla de playera</p>
              <p className="text-white font-medium">{usuario.talla}</p>
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">Fecha de nacimiento</p>
              <p className="text-white font-medium">{usuario.fechaNacimiento}</p>
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">Teléfono</p>
              <p className="text-white font-medium">{usuario.telefono}</p>
            </div>
          </div>
        </div>

        {/* Datos académicos */}
        <div className="bg-[#C4649F]/60 p-8 rounded-lg">
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
                <p className="text-white font-medium">{usuario.universidadMexico}</p>
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
        <div className="bg-[#C4649F]/60 p-8 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">Preferencias alimentarias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <p className="text-white/60 text-sm mb-1">¿Eres vegano/a?</p>
              <p className="text-white font-medium">{usuario.vegano ? "Sí" : "No"}</p>
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">¿Tienes restricción alimentaria?</p>
              <p className="text-white font-medium">{usuario.restriccionAlimentaria ? "Sí" : "No"}</p>

            </div>

            {usuario.restriccionAlimentaria === true && (
              <div>
                <p className="text-white/60 text-sm mb-1">Especificación</p>
                <p className="text-white font-medium">{usuario.especificacionRestriccion}</p>
              </div>
            )}

          </div>
        </div>

        {/* Información profesional */}
        <div className="bg-[#C4649F]/60 p-8 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">Información profesional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <p className="text-white/60 text-sm mb-1">CV</p>
                <a href={usuario.cv} target="_blank" rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 underline transition-colors text-sm">
                  Ver CV
                </a>
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">LinkedIn</p>
              {usuario.linkedin ? (
                <a href={usuario.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 underline transition-colors text-sm">
                  Ver perfil
                </a>
              ) : (
                <p className="text-white/40 text-sm">No proporcionado</p>
              )}
            </div>

            <div>
              <p className="text-white/60 text-sm mb-1">GitHub</p>
              {usuario.github ? (
                <a href={usuario.github} target="_blank" rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 underline transition-colors text-sm">
                  Ver perfil
                </a>
              ) : (
                <p className="text-white/40 text-sm">No proporcionado</p>
              )}
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}