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

            console.log("=== DEBUG EQUIPO ===");
console.log("Token usado:", token);
console.log("Status respuesta:", res.status);




        

            if (res.status === 404) {
    setTieneEquipo(false);
    setInfoEquipo(null);
    return;
}

            if (!res.ok) {
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            }

            const data = await res.json();
            console.log("Data recibida:", JSON.stringify(data, null, 2));
console.log("Data recibida:", data);


if (!data || data.message === "No perteneces a ningún equipo") {
    console.log("La participante no pertenece a ningún equipo");
    setTieneEquipo(false);
    setInfoEquipo(null);
    return;
}

console.log("La participante pertenece al equipo:", data.nombre);
setTieneEquipo(true);
setInfoEquipo(data);
        } catch (err) {
            console.error("Error al cargar info sobre equipo de participante:", error);
            setError(err instanceof Error ? err.message : "Error desconocido");
        } finally {
            setLoadingInfo(false);
        } 
    }; 

    useEffect(() => {
        fetchInfoEquipo();
    }, []);
  
    return { infoEquipo, loadingInfo, error, refetch: fetchInfoEquipo };
};


