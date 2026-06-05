import { useState, useEffect } from "react";

interface ParticipanteCheckin {
  nombre: string;
  apellido: string;
  equipo: string
  hora_llegada: string;
}

interface EquipoCheckin {
  nombre: string;
  personas_registradas: number;
  equipo_completo: string;
  reto_1: string;
  reto_2: string;
}

const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];



export const useAsistenciaIndData = () => {
  const [participantes, setParticipantes] = useState<ParticipanteCheckin[]>([]);
  const [equipos, setEquipos] = useState<EquipoCheckin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  const fetchAsistencia = async () => {
    setLoading(true);
    setError(null);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const [participantesRes, equiposRes] = await Promise.all([
        fetch(`${BASE}/checkin/participantes`, { headers }),
        fetch(`${BASE}/checkin/equipos`, { headers }),
      ]);

      if (!participantesRes.ok) throw new Error(`Error ${participantesRes.status}`);
      if (!equiposRes.ok) throw new Error(`Error ${equiposRes.status}`);

      const [participantesData, equiposData] = await Promise.all([
        participantesRes.json(),
        equiposRes.json(),
      ]);

      setParticipantes(Array.isArray(participantesData) ? participantesData : []);
      setEquipos(Array.isArray(equiposData) ? equiposData : []);

    } catch (error) {
      console.error("Error al cargar datos de asistencia:", error);
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAsistencia();
  }, []);

  return { participantes, equipos, loading, error, refetch: fetchAsistencia };
};