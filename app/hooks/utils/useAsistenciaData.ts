import { useState, useEffect } from "react";

interface AsistenciaData {
  participantes: Array <{nombre: string; apellido: string; equipo: string; registro_d1: boolean; hora_llegada?: string;}>
  equipos: Array<{ nombre: string; total: number }>;
}

interface AsistenciaCantidadData {
  cantidad_equipos: number;
  cantidad_participantes: number;
}

const HARDCODED_DATA: AsistenciaData = {
  participantes: [
    {
      nombre: "Juana",
      apellido: "Pérez",
      equipo: "Alfa",
      registro_d1: true,
      hora_llegada: new Date().toISOString()
    }
  ],
  equipos: [
    { nombre: "Alfa", total: 4 },
    { nombre: "Beta", total: 3 },
    { nombre: "Gamma", total: 2 }
  ]
};

const HARDCODED_DATA_CANTIDAD: AsistenciaCantidadData = {
  cantidad_equipos: 10,
  cantidad_participantes: 40,
};


const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];


export const useAsistenciaData = () => {
  const [asistencia, setAsistencia] = useState<AsistenciaData | null>(null);
   const [cantidad, setCantidad] = useState<AsistenciaCantidadData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  {/*
  const fetchAsistencia = async () => {
    setLoading(true);
    setError(null);
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
      setAsistencia(data);

    } catch (error) {
      console.error("Error al cargar datos de asistencia:", error);
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };*/}

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setAsistencia(HARDCODED_DATA);
      setCantidad(HARDCODED_DATA_CANTIDAD);
      setLoading(false);
    }, 500);
    //fetchAsistencia();
  }, []);

  //return { asistencia, loading, error, refetch: fetchAsistencia };
  return { asistencia, cantidad, loading, error };
};