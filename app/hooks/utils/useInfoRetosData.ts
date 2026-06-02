 import { useState, useEffect } from "react";

interface Reto {
  id: number;
  titulo: string;
  descripcion: string; 
}

interface AllRetosResponse {
  retos_disponibles: boolean;
  retos: Reto[];
  mensaje?: string;
}

interface MiEquipoData {
  tiene_equipo: boolean;
  equipo_id?: number;
  es_lider?: boolean;
  tiene_seleccion?: boolean;
  retos_disponibles?: boolean;
  retos?: Reto[];
  opcion1_reto_id?: number;
  opcion1_titulo?: string;
  opcion1_descripcion?: string;
  opcion2_reto_id?: number;
  opcion2_titulo?: string;
  opcion2_descripcion?: string;
  p_acepto_clausula: boolean;
}


const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];



export const useInfoRetosData = () => {
  const [infoRetos, setInfoRetos] = useState<MiEquipoData | null>(null);
  const [allRetos, setAllRetos] = useState<Reto[]>([]);
  const [loadingInfoRetos, setLoadingInfoRetos] = useState(true);

  
  const fetchRetos = async () => {
    setLoadingInfoRetos(true);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();
   

      const usuarioBaseId = document.cookie
        .split("; ")
        .find(row => row.startsWith("usuarioBaseId="))
        ?.split("=")[1];

      const [miEquipoRes, retosRes] = await Promise.all([
        fetch(`${BASE}/retos/mi-equipo?usuarioBaseId=${usuarioBaseId}`, {  
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }),

        fetch(`${BASE}/retos`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }),
      ]);

      const [miEquipoData, retosData] = await Promise.all([
        miEquipoRes.json(),
        retosRes.json(),
      ]);

      setInfoRetos(miEquipoData);
      setAllRetos(retosData.retos ?? []);

    } catch (error) {
      console.error("Error al cargar datos de retos:", error);
    } finally {
      setLoadingInfoRetos(false);
    } 
  };

  useEffect(() => {
    fetchRetos();
  }, []);
  
  return { infoRetos, allRetos, loadingInfoRetos, refetch: fetchRetos };
 
};


