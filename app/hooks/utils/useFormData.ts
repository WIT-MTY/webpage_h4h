import { useState, useEffect } from "react";

interface CatalogBackend { value: number; label: string; }
interface UniversidadBackend { value: number; label: string; estado: string; }

export const useFormData = () => {
  const [GENEROS, setGENEROS] = useState<{ id: number; descripcion: string }[]>([]);
  const [TALLAS, setTALLAS] = useState<{ id: number; descripcion: string }[]>([]);
  const [PAISES, setPAISES] = useState<{ id: number; nom_pais: string }[]>([]);
  const [ESTADOS, setESTADOS] = useState<{ id: number; nom_estado: string }[]>([]);
  const [UNIVERSIDADES, setUNIVERSIDADES] = useState<{ id: number; universidad_nombre: string; estado_id: number }[]>([]);
  const [CARRERAS, setCARRERAS] = useState<{ id: number; carrera_nombre: string }[]>([]);
  const [SEMESTRES, setSEMESTRES] = useState<{ id: number; descripcion: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatalogos = async () => {
      try {
        const BASE = process.env.NEXT_PUBLIC_API_URL;
        console.log("BASE URL:", BASE);

        const [paises, estados, universidades, generos, tallas, carreras, semestres] =
          await Promise.all([
            fetch(`${BASE}/catalogo/pais`).then(r => r.json()),
            fetch(`${BASE}/catalogo/estado`).then(r => r.json()),
            fetch(`${BASE}/catalogo/universidad`).then(r => r.json()),
            fetch(`${BASE}/catalogo/genero`).then(r => r.json()),
            fetch(`${BASE}/catalogo/talla`).then(r => r.json()),
            fetch(`${BASE}/catalogo/carrera`).then(r => r.json()),
            fetch(`${BASE}/catalogo/semestre`).then(r => r.json()),
          ]);

        setPAISES(paises.map((p: CatalogBackend) => ({ id: p.value, nom_pais: p.label })));
        setESTADOS(estados.map((e: CatalogBackend) => ({ id: e.value, nom_estado: e.label })));
        setUNIVERSIDADES(universidades.map((u: UniversidadBackend) => ({
          id: u.value,
          universidad_nombre: u.label,
          estado_id: u.estado,
        })));
        setGENEROS(generos.map((g: CatalogBackend) => ({ id: g.value, descripcion: g.label })));
        setTALLAS(tallas.map((t: CatalogBackend) => ({ id: t.value, descripcion: t.label })));
        setCARRERAS(carreras.map((c: CatalogBackend) => ({ id: c.value, carrera_nombre: c.label })));
        setSEMESTRES(semestres.map((s: CatalogBackend) => ({ id: s.value, descripcion: s.label })));

        

      } catch (error) {
        console.error("Error al cargar catálogos:", error);
      } finally {
        setLoading(false);
      }
      
    };

    fetchCatalogos();
  }, []);

  return { GENEROS, TALLAS, PAISES, ESTADOS, UNIVERSIDADES, CARRERAS, SEMESTRES, loading };
};