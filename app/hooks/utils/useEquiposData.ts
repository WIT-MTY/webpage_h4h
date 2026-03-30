 import { useState, useEffect } from "react";
{/*
interface Equipos {
   id: number;
  usuario_base_id: string;
  nombre: string;
  apellido: string; 
  email: string;
  fecha_nacimiento: string; 
  telefono: string;   
  linkedin_url?: string;
  github_url?: string;  
  cv_url: string;
  vegana: boolean; 
  tiene_restriccion_alimentaria: boolean;
  detalle_restriccion_alimentaria?: string;
  universidad_extranjera?: string;  
  genero: string;
  pais: string;
  estado?: string;
  semestre: string;
  universidad_mexico?: string;
  estatus: string;
  carrera: string;
  talla_playera: string; 
}

const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];


export const useParticipantesData = () => {
  const [DATA, setDATA] = useState<Equipos[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEquipos = async () => {
    setLoading(true);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const res = await fetch(`${BASE}/participantes`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setDATA(Array.isArray(data) ? data : []);

    } catch (error) {
      console.error("Error al cargar participantes:", error);
    } finally {
      setLoading(false);
    } 
  };

  useEffect(() => {
    fetchEquipos);
  }, []);

  return { DATA, loading, refetch: fetchEquipos };
};

*/}
