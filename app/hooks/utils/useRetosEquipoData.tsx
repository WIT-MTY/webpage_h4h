import { useState, useEffect } from "react";

interface RetosEquipo {
  nombre: string;
  opcion1: string; 
  opcion2: string; 
}

interface RetosMetrica {
  titulo: string;
  total: number;
}

interface RetosData {
  porEquipo: RetosEquipo[];
  metricas: RetosMetrica[];
}

const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];

export const useRetosEquipoData = () => {
  const [data, setData] = useState<RetosData>({
    porEquipo: [],
    metricas: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllRetosData = async () => {
    setLoading(true);
    setError(null);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const [resPorEquipo, resMetricas] = await Promise.all([
        fetch(`${BASE}/equipos/retos/porEquipo`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }),
        fetch(`${BASE}/equipos/retos/elegidos`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
      ]);

      if (!resPorEquipo.ok || !resMetricas.ok) {
        throw new Error("Error al cargar los datos");
      }

      const [porEquipo, metricas] = await Promise.all([
        resPorEquipo.json(),
        resMetricas.json()
      ]);

      setData({
        porEquipo: Array.isArray(porEquipo) ? porEquipo : [],
        metricas: Array.isArray(metricas) ? metricas : []
      });

    } catch (error) {
      console.error("Error al cargar datos de retos:", error);
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRetosData();
  }, []);

  return { data, loading, error, refetch: fetchAllRetosData };
};