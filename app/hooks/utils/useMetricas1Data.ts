import { useState, useEffect } from "react";

interface MetricasSeccion1 {
  estatus: Array<{ estatus: string; total: number }>;
  veganas: Array<{ tipo: string; total: number }>;
  tallas: Array<{ talla: string; total: number }>;
  restricciones: Array<{ restriccion: string; total: number }>;
  detalle_restricciones: string[] | null;
  nacionalidad: Array<{ tipo: string; total: number }>;
}

const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];


export const useMetricas1Data = () => {
  const [metricas1, setMetricas1] = useState<MetricasSeccion1 | null>(null);
  const [loading1, setLoading1] = useState(true);
  const [error1, setError1] = useState<string | null>(null);

  const fetchMetricas1 = async () => {
    setLoading1(true);
    setError1(null);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const res = await fetch(`${BASE}/metricas/seccion1`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setMetricas1(data);

    } catch (error) {
      console.error("Error al cargar métricas sección 1:", error);
      setError1(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading1(false);
    }
  };

  useEffect(() => {
    fetchMetricas1();
  }, []);

  return { metricas1, loading1, error1, refetch1: fetchMetricas1 };
};