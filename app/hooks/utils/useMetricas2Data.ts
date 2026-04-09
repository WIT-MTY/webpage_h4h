import { useState, useEffect } from "react";

interface MetricasSeccion2 {
  universidades_extranjeras: Array<{ universidad: string; total: number }>;
  universidades_mexico: Array<{ universidad: string; total: number }>;
  carreras: Array<{ carrera: string; total: number }>;
  semestres: Array<{ semestre: string; total: number }>;
}

const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];


export const useMetricas2Data = () => {
  const [metricas2, setMetricas2] = useState<MetricasSeccion2 | null>(null);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState<string | null>(null);

  const fetchMetricas2 = async () => {
    setLoading2(true);
    setError2(null);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const res = await fetch(`${BASE}/metricas/seccion2`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setMetricas2(data);

    } catch (error) {
      console.error("Error al cargar métricas sección 2:", error);
      setError2(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchMetricas2();
  }, []);

  return { metricas2, loading2, error2, refetch2: fetchMetricas2 };
};