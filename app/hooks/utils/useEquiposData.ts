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

{/*}
const getToken = (): string | undefined =>

  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];
*/}

const EQUIPOS_MOCK: Equipos[] = [
  {
    id: 1,
    nombre: "Team Alpha",
    lider: "Ana García",
    participante2: "Laura Martínez",
    participante3: "Sofía López",
    participante4: "María Torres",
    fecha_creacion: "2024-03-01",
    fecha_validacion: "2024-03-05",
    estatus: "Incompleto",
  },
  {
    id: 2,
    nombre: "Team Beta",
    lider: "Karla Ruiz",
    participante2: "Diana Pérez",
    participante3: "Valeria Cruz",
    participante4: "",
    fecha_creacion: "2024-03-02",
    fecha_validacion: "",
    estatus: "Aceptado",
  },
];

export const useEquiposData = () => {
  const [DATA, setDATA] = useState<Equipos[]>([]);
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
    setDATA(EQUIPOS_MOCK);
    setLoading(false);

    //fetchEquipos);

  }, []);
  
  //return { DATA, loading, refetch: fetchEquipos };
  return { DATA, loading };
};


