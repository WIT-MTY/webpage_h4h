 import { useState, useEffect } from "react";

interface RetosEquipo {
  id: number;
  nombre: string;
  opcion1: string; 
  opcion2: string; 
}

interface RetosMetrica {
  reto_nombre: string;
  cantidad: string; 
}

{/*}
const getToken = (): string | undefined =>

  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];
*/}

const RETOS_MOCK: RetosEquipo[] = [
  {
    id: 1,
    nombre: "Team Alpha",
    opcion1: "Opción 1",
    opcion2: "Opción 2",
  },
  {
    id: 2,
    nombre: "Team Beta",
    opcion1: "Opción 3",
    opcion2: "Opción 4",
  },
];


const RETOSMETRICS_MOCK: RetosMetrica[] = [
  {
    reto_nombre: "Lorem ipsum dolor sit amet consectetur adipiscing elit nisl laoreet himenaeos",
    cantidad: "10",
  },
  {
    reto_nombre: "Reto facil",
    cantidad: "20",
  },
  {
    reto_nombre: "Reto dificil",
    cantidad: "10",
  },
  {
    reto_nombre: "Team muy dificil",
    cantidad: "50",
  },
];

    

export const useRetosEquipoData = () => {
  const [DATA, setDATA] = useState<RetosEquipo[]>([]);
  const [METRICA, setMETRICA] = useState<RetosMetrica[]>([]);
  const [loading, setLoading] = useState(true);

  {/*
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
  }; */}

  useEffect(() => {
    setDATA(RETOS_MOCK);
    setMETRICA(RETOSMETRICS_MOCK);
    setLoading(false);

    //fetchEquipos);

  }, []);
  
  //return { DATA, loading, refetch: fetchEquipos };
  return { DATA, METRICA, loading };
};


