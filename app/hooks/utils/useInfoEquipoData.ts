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

const getToken = (): string | undefined =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];


export const useInfoEquipoData = () => {
    const [infoEquipo, setInfoEquipo] = useState<Equipos | null>(null);
    const [loadingInfo, setLoadingInfo] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchInfoEquipo = async () => {
        setLoadingInfo(true);
        try {
            const BASE = process.env.NEXT_PUBLIC_API_URL;
            const token = getToken();

            const res = await fetch(`${BASE}/myteam`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (res.status === 404) {
                setInfoEquipo(null); 
                return;
            }

            if (!res.ok) {
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            }

            const data = await res.json();
            if (data.message) {
                setInfoEquipo(null); // sin equipo
                return;
            }

            setInfoEquipo(data);

        } catch (error) {
            console.error("Error al cargar info sobre equipo de participante:", error);
        } finally {
            setLoadingInfo(false);
        } 
    }; 

    useEffect(() => {
        fetchInfoEquipo();
    }, []);
  
    return { infoEquipo, loadingInfo, refetch: fetchInfoEquipo };
};


