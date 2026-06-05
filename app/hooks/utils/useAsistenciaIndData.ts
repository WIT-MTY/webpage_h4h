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

interface TotalParticipantesCheckin {
  total_participantes_checkin: string;
}

interface EquiposCompletosCheckin {
  equipos_completos: string;
  equipos_incompletos: string;
}

interface RetosCheckin {
  reto: string;
  equipos_asignados: number;
  equipos_con_checkin: number;
}

const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];



export const useAsistenciaIndData = () => {
  const [participantes, setParticipantes] = useState<ParticipanteCheckin[]>([]);
  const [equipos, setEquipos] = useState<EquipoCheckin[]>([]);
  const [totalParticipantes, setTotalParticipantes] = useState<TotalParticipantesCheckin | null>(null);
  const [equiposCompletos, setEquiposCompletos] = useState<EquiposCompletosCheckin | null>(null);
  const [retos, setRetos] = useState<RetosCheckin[]>([]);
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

      const [participantesRes, equiposRes, totalParticipantesRes, equiposCompletosRes, retosRes] = await Promise.all([
        fetch(`${BASE}/checkin/participantes`, { headers }),
        fetch(`${BASE}/checkin/equipos`, { headers }),
        fetch(`${BASE}/checkin/total-participantes`, { headers }),
        fetch(`${BASE}/checkin/total-equipos`, { headers }),
        fetch(`${BASE}/checkin/retos`, { headers }),
      ]);

      if (!participantesRes.ok) throw new Error(`Error ${participantesRes.status}`);
      if (!equiposRes.ok) throw new Error(`Error ${equiposRes.status}`);
      if (!totalParticipantesRes.ok) throw new Error(`Error ${totalParticipantesRes.status}`);
      if (!equiposCompletosRes.ok) throw new Error(`Error ${equiposCompletosRes.status}`);
      if (!retosRes.ok) throw new Error(`Error ${retosRes.status}`);

      const [participantesData, equiposData, totalParticipantesData, equiposCompletosData, retosData] = await Promise.all([
        participantesRes.json(),
        equiposRes.json(),
        totalParticipantesRes.json(),
        equiposCompletosRes.json(),
        retosRes.json()
      ]);

      setParticipantes(Array.isArray(participantesData) ? participantesData : []);
      setEquipos(Array.isArray(equiposData) ? equiposData : []);
      setTotalParticipantes(Array.isArray(totalParticipantesData) ? totalParticipantesData[0] : null);
      setEquiposCompletos(Array.isArray(equiposCompletosData) ? equiposCompletosData[0] : null);
      setRetos(Array.isArray(retosData) ? retosData : []);
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

  return { participantes, equipos, totalParticipantes, equiposCompletos, retos, loading, error, refetch: fetchAsistencia };
};