 import { useState, useEffect } from "react";

interface Equipos {
  id: number;
  nombre: string;
  lider: string; 
  participante2: string; 
  participante3: string; 
  participante4: string; 
  fecha_creacion: string; 
  fecha_validacion: string; 
  estatus: string; 
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


