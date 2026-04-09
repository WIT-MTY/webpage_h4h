 import { useState, useEffect } from "react";

interface Retos {
  id: number;
  nombre: string;
  descripcion: string; 
}


{/*}
const getToken = (): string | undefined =>

  document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];
*/}

const RETOS_MOCK: Retos[] = [
  {
    id: 1,
    nombre: "Reto dificil",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nisl laoreet himenaeos, class scelerisque pulvinar turpis sodales porttitor commodo luctus ullamcorper sociosqu, bibendum eu ridiculus iaculis taciti sed nascetur dapibus fusce. Facilisi mattis morbi parturient etiam purus, dignissim sem commodo eu maecenas, luctus ad faucibus nibh.",
  },
  {
    id: 2,
    nombre: "Reto facil",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nisl laoreet himenaeos, class scelerisque pulvinar turpis sodales porttitor commodo luctus ullamcorper sociosqu, bibendum eu ridiculus iaculis taciti sed nascetur dapibus fusce. Facilisi mattis morbi parturient etiam purus, dignissim sem commodo eu maecenas, luctus ad faucibus nibh.",
  },
  {
    id: 3,
    nombre: "Reto muy facil",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nisl laoreet himenaeos, class scelerisque pulvinar turpis sodales porttitor commodo luctus ullamcorper sociosqu, bibendum eu ridiculus iaculis taciti sed nascetur dapibus fusce. Facilisi mattis morbi parturient etiam purus, dignissim sem commodo eu maecenas, luctus ad faucibus nibh.",
  },
  {
    id: 4,
    nombre: "Reto muy dificil",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit nisl laoreet himenaeos, class scelerisque pulvinar turpis sodales porttitor commodo luctus ullamcorper sociosqu, bibendum eu ridiculus iaculis taciti sed nascetur dapibus fusce. Facilisi mattis morbi parturient etiam purus, dignissim sem commodo eu maecenas, luctus ad faucibus nibh.",
  },
];




    

export const useInfoRetosData = () => {
  const [DATA, setDATA] = useState<Retos[]>([]);
  const [loading, setLoading] = useState(true);

  {/*
  const fetchEquipos = async () => {
    setLoading(true);
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const token = getToken();

      const res = await fetch(`${BASE}/participantes`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setDATA(Array.isArray(data) ? data : []);

    } catch (error) {
      console.error("Error al cargar participantes:", error);
    } finally {
      setLoading(false);
    } 
  }; */}

  useEffect(() => {
    setDATA(RETOS_MOCK);
    setLoading(false);

    //fetchEquipos);

  }, []);
  
  //return { DATA, loading, refetch: fetchEquipos };
  return { DATA, loading };
};


