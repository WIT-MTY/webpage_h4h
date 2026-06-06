import { useState, useEffect } from "react";

interface MyReto {
  id: number;
  titulo: string;
  descripcion: string;
  equipo_id: number;
  equipo_nombre: string;
}

const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];

export const useRetoAsignadoUser = () => {
  const [myReto, setMyReto] = useState<MyReto | null>(null);
  const [loadingReto, setLoadingReto] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMyReto = async () => {
    setLoadingReto(true);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const res = await fetch(`${BASE}/retos/mi-reto`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (res.status === 404) {
        setMyReto(null);
        return;
      }

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      setMyReto(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoadingReto(false);
    }
  };

  useEffect(() => {
    fetchMyReto();
  }, []);

  return { myReto, loadingReto, error, refetch: fetchMyReto };
};