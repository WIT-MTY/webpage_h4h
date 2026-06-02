 import { useState, useEffect } from "react";

interface Equipos {
    id: number;
    nombre: string;
    lider: string; 
    participante2: string; 
    participante3: string; 
    participante4: string; 
    lider_acepto_terminos: boolean;
    participante_2_acepto_terminos: boolean;
    participante_3_acepto_terminos: boolean;
    participante_4_acepto_terminos: boolean;
    fecha_creacion: string; 
    fecha_validacion: string; 
    estatus: string; 
    codigo: string;
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
    const [tieneEquipo, setTieneEquipo] = useState<boolean>(false);

    const fetchInfoEquipo = async () => {
        setLoadingInfo(true);
        try {
            const BASE = process.env.NEXT_PUBLIC_API_URL;
            const token = getToken();
            
            const res = await fetch(`${BASE}/equipos/myteam`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

    
            if (res.status === 404) {
                setTieneEquipo(false);
                setInfoEquipo(null);
                return;
            }

            if (!res.ok) {
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            }

            const data = await res.json();
    
            if (!data || data.message === "No perteneces a ningún equipo") {
                setTieneEquipo(false);
                setInfoEquipo(null);
                return;
            }

            setTieneEquipo(true);
            setInfoEquipo(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error desconocido");
        } finally {
            setLoadingInfo(false);
        } 
    }; 

    useEffect(() => {
        fetchInfoEquipo();
    }, []);
  
    return { infoEquipo, loadingInfo, error, tieneEquipo, refetch: fetchInfoEquipo };
};


