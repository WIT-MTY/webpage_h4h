import { useState, useEffect } from "react";

interface MetricasSeccion3 {
  estados: Array<{ estado: string; total: number }>;
}

const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];


export const useMetricas3Data = () => {
  const [metricas3, setMetricas3] = useState<MetricasSeccion3 | null>(null);
  const [loading3, setLoading3] = useState(true);
  const [error3, setError3] = useState<string | null>(null);

  const fetchMetricas3 = async () => {
    setLoading3(true);
    setError3(null);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const res = await fetch(`${BASE}/metricas/seccion3`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setMetricas3({
        estados: Array.isArray(data) ? data : []
      });

    } catch (error) {
      console.error("Error al cargar métricas sección 3:", error);
      setError3(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading3(false);
    }
  };

  useEffect(() => {
    fetchMetricas3();
  }, []);

  return { metricas3, loading3, error3, refetch3: fetchMetricas3 };
};