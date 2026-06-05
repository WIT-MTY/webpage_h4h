import { useState, useEffect } from "react";

interface ParticipanteCheckin {
  nombre: string;
  apellido: string;
  equipo: string
  hora_llegada: string;
}

const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];



export const useAsistenciaIndData = () => {
  const [participantes, setParticipantes] = useState<ParticipanteCheckin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  const fetchAsistencia = async () => {
    setLoading(true);
    setError(null);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const res = await fetch(`${BASE}/checkin/participantes`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error(`Error ${res.status}`);

      const data = await res.json();
      setParticipantes(Array.isArray(data) ? data : []);

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

  return { participantes, loading, error, refetch: fetchAsistencia };
};