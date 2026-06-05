 import { useState, useEffect } from "react";

interface Equipos {
  id: number;
  codigo: number;
  nombre: string;
  lider_id: string;
  lider: string;
  participante2_id: string | null;
  participante2: string | null;
  participante3_id: string | null;
  participante3: string | null;
  participante4_id: string | null;
  participante4: string | null;
  fecha_creacion: string;
  fecha_validacion: string | null;
  estatus: string;
  tiene_reto_asignado: boolean;
  tiene_dos_opciones: boolean;
  opcion1_reto_id: number | null;
  opcion1_reto_nombre: string | null;
  opcion2_reto_id: number | null;
  opcion2_reto_nombre: string | null;
  reto_asignado_id: number | null;
  reto_asignado_nombre: string | null;
}



const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];



export const useEquiposData = () => {
  const [DATA, setDATA] = useState<Equipos[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  const fetchEquipos = async () => {
    setLoading(true);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const res = await fetch(`${BASE}/equipos/resumen`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      setDATA(data);

    } catch (error) {
      console.error("Error al cargar participantes:", error);
    } finally {
      setLoading(false);
    } 
  }; 

  useEffect(() => {
   
    fetchEquipos();

  }, []);
  
  return { DATA, loading, refetch: fetchEquipos };

};


