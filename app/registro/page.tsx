'use client';
import React, { useState, useEffect } from "react";
import HeaderForms from "../componentes/formulario_comp/HeaderForms";
import FileUpload from "../componentes/registro/FileUpload";
import { useFormData } from "../hooks/utils/useFormData";


export default function PageFormulario() {
    //
    const { GENEROS, TALLAS, PAISES, ESTADOS, UNIVERSIDADES, CARRERAS, SEMESTRES } = useFormData();

    const [paises, setPaises] = useState(PAISES);
    const [selectedPais, setSelectedPais] = useState<string>("");
    const [isPaisOpen, setIsPaisOpen] = useState(false);
    const [searchPais, setSearchPais] = useState("");
    const paisesFiltrados = paises.filter((pais) =>
        pais.nombre.toLowerCase().includes(searchPais.toLowerCase())
    );

    const [estados, setPais] = useState(ESTADOS);
    const [selectedEstado, setSelectedEstado] = useState<string>("");
    const [isEstadoOpen, setIsEstadoOpen] = useState(false);
    const [searchEstado, setSearchEstado] = useState("");
    const estadosFiltrados = estados.filter((estado) =>
        estado.nombre.toLowerCase().includes(searchEstado.toLowerCase())
    );

    const [universidades, setUniversidades] = useState(UNIVERSIDADES);
    const [selectedUniversidad, setSelectedUniversidad] = useState<string>("");
    const [isUniversidadOpen, setIsUniversidadOpen] = useState(false);
    const [searchUniversidad, setSearchUniversidad] = useState("");
    const universidadesFiltrados = universidades.filter((universidad) =>
        universidad.nombre.toLowerCase().includes(searchUniversidad.toLowerCase())
    );

    const [tallas, setTallas] = useState(TALLAS);
    const [selectedTalla, setSelectedTalla] = useState<string>("");
    const [isTallaOpen, setIsTallaOpen] = useState(false);

    const [generos, setGeneros] = useState(GENEROS);
    const [selectedGenero, setSelectedGenero] = useState<string>("");
    const [isGeneroOpen, setIsGeneroOpen] = useState(false);

    const [carreras, setCarreras] = useState(CARRERAS);
    const [selectedCarrera, setSelectedCarrera] = useState<string>("");
    const [isCarreraOpen, setIsCarreraOpen] = useState(false);
    const [searchCarrera, setSearchCarrera] = useState("");
    const carrerasFiltrados = carreras.filter((carrera) =>
        carrera.nombre.toLowerCase().includes(searchCarrera.toLowerCase())
    );

    const [semestres, setSemestres] = useState(SEMESTRES);
    const [selectedSemestre, setSelectedSemestre] = useState<string>("");
    const [isSemestreOpen, setIsSemestreOpen] = useState(false);

    

    
    
    

    const [permisoFile, setPermisoFile] = useState<File | null>(null);
    const [cvFile, setCvFile] = useState<File | null>(null);

    const [tieneRestriccion, setTieneRestriccion] = useState<boolean>(false);

    // Estado para la fecha de nacimiento
    const [fechaNacimiento, setFechaNacimiento] = useState<string>("");
    const [esMenorEdad, setEsMenorEdad] = useState<boolean>(false);
    const [errorFecha, setErrorFecha] = useState<string>("");
    const [edadCalculada, setEdadCalculada] = useState<number | null>(null);

    // Función pura para calcular la edad (sin setState)
    const calcularEdad = (fechaNacimientoStr: string): number | null => {
        if (!fechaNacimientoStr) return null;
        
        const hoy = new Date();
        const fechaNac = new Date(fechaNacimientoStr);
        
        // Validar que la fecha no sea futura
        if (fechaNac > hoy) {
            return null;
        }
        
        // Validar que la fecha no sea anterior a 1900
        if (fechaNac.getFullYear() < 1985) {
            return null;
        }
        
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mesDiff = hoy.getMonth() - fechaNac.getMonth();
        
        if (mesDiff < 0 || (mesDiff === 0 && hoy.getDate() < fechaNac.getDate())) {
            edad--;
        }
        
        return edad;
    };

    // Efecto para validar y actualizar estados cuando cambia la fecha
    useEffect(() => {
        if (fechaNacimiento) {
            const añoSeleccionado = new Date(fechaNacimiento).getFullYear();
            
            // Validar año máximo 2016
            if (añoSeleccionado > 2011) {
                setErrorFecha("No se permiten fechas después del año 2011");
                setEdadCalculada(null);
                setEsMenorEdad(false);
                return;
            }
            
            const edad = calcularEdad(fechaNacimiento);
            
            if (edad === null) {
                setErrorFecha("Fecha de nacimiento no válida");
                setEdadCalculada(null);
                setEsMenorEdad(false);
            } else {
                setErrorFecha("");
                setEdadCalculada(edad);
                setEsMenorEdad(edad < 18);
            }
        } else {
            setErrorFecha("");
            setEdadCalculada(null);
            setEsMenorEdad(false);
        }
    }, [fechaNacimiento]);

    // Manejar cambio de fecha
    const handleFechaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fechaSeleccionada = e.target.value;
        setFechaNacimiento(fechaSeleccionada);
    };
    
    
    return (
        <section className="w-full min-h-screen overflow-y-auto flex flex-col items-center justify-center relative" style={{ background: "#761450" }}>
            
            <HeaderForms />

            <main className="w-full px-4 py-8">
                <form className="space-y-6 max-w-7xl mx-auto">
                    
                    {/* SECCIÓN 1: Datos para crear la cuenta */}
                    <div className="bg-white/10 p-8 rounded-lg">
                        <h2 className="text-white text-xl font-semibold mb-4">Datos de cuenta</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-white mb-2">Correo Electrónico <span className="text-red-400">*</span></p>
                                <input type="email" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu correo" />
                            </div>
                            <div>
                                <p className="text-white mb-2">Contraseña <span className="text-red-400">*</span></p>
                                <input type="password" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa una contraseña" />
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN 2: Datos personales */}
                    <div className="bg-white/10 p-8 rounded-lg">
                        <h2 className="text-white text-xl font-semibold mb-4">Datos personales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-white mb-2">Nombre(s) <span className="text-red-400">*</span></p>
                                <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu nombre" />
                            </div>

                            <div>
                                <p className="text-white mb-2">Apellidos <span className="text-red-400">*</span></p>
                                <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tus apellidos" />
                            </div>

                            <div className="relative">
                                <p className="text-white mb-2">Género<span className="text-red-400">*</span></p>
                                <button
                                    type="button"
                                    onClick={() => setIsGeneroOpen(!isGeneroOpen)}
                                    className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                                >
                                    <span>{selectedGenero || "Selecciona tu género"}</span>
                                    <span>▼</span>
                                </button>
                                
                                {isGeneroOpen && (
                                    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul className="py-1">
                                            {generos.map((genero) => (
                                                <li
                                                    key={genero.id}
                                                    onClick={() => {
                                                        setSelectedGenero(genero.descripcion);
                                                        setIsGeneroOpen(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                                >
                                                    {genero.descripcion}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <p className="text-white mb-2">Talla de playera<span className="text-red-400">*</span></p>
                                <button
                                    type="button"
                                    onClick={() => setIsTallaOpen(!isTallaOpen)}
                                    className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                                >
                                    <span>{selectedTalla || "Selecciona una talla"}</span>
                                    <span>▼</span>
                                </button>
                                
                                {isTallaOpen && (
                                    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul className="py-1">
                                            {tallas.map((talla) => (
                                                <li
                                                    key={talla.id}
                                                    onClick={() => {
                                                        setSelectedTalla(talla.medida);
                                                        setIsTallaOpen(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                                >
                                                    {talla.medida}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div>
                                <p className="text-white mb-2">Fecha de nacimiento <span className="text-red-400">*</span></p>
                                <input 
                                    type="date" 
                                    className={`w-full p-3 rounded-md bg-white text-black ${errorFecha ? 'border-2 border-red-500' : ''}`}
                                    value={fechaNacimiento}
                                    onChange={handleFechaChange}
                                    max="2011-12-31"
                                    min="1985-01-01"
                                />
                                {errorFecha && (
                                    <p className="text-red-400 text-sm mt-1">{errorFecha}</p>
                                )}
                                
                            </div>
                            
                            <div>
                                <p className="text-white mb-2">Teléfono <span className="text-red-400">*</span></p>
                                <input type="tel" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu teléfono" />
                            
                        </div>

                        </div>

                        {/* FileUpload condicional para permiso de menores */}
                        {esMenorEdad && (
                            <div className="mt-4">
                                <FileUpload 
                                    label="Permiso de padres o tutores"
                                    required={true}
                                    onFileChange={setPermisoFile}
                                />
                                
                            </div>
                        )}
                    </div>

                    {/* SECCIÓN 3: Datos académicos */}
                    <div className="bg-white/10 p-8 rounded-lg">
                        <h2 className="text-white text-xl font-semibold mb-4">Datos académicos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="relative">
                                <p className="text-white mb-2">Ubicación de tu universidad<span className="text-red-400">*</span></p>
                                <button
                                    type="button"
                                    onClick={() => setIsPaisOpen(!isPaisOpen)}
                                    className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                                >
                                    <span>{selectedPais || "Selecciona un país"}</span>
                                    <span>▼</span>
                                </button>
  
                                {isPaisOpen && (
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <div className="p-2 border-b border-gray-200">
                                        <input
                                            type="text"
                                            value={searchPais}
                                            onChange={(e) => setSearchPais(e.target.value)}
                                            placeholder="Buscar país..."
                                            className="w-full p-2 rounded-md border border-gray-300 text-black text-sm"
                                            autoFocus
                                        />
                                    </div>

                                    <ul className="py-1 max-h-48 overflow-y-auto">
                                        {paisesFiltrados.length > 0 ? (
                                            paisesFiltrados.map((pais) => (
                                            <li
                                                key={pais.id}
                                                onClick={() => {
                                                setSelectedPais(pais.nombre);
                                                setIsPaisOpen(false);
                                                setSearchPais("");
                                                }}
                                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                            >
                                                {pais.nombre}
                                            </li>
                                            ))
                                        ) : (
                                        <li className="px-4 py-2 text-gray-400 text-sm">No se encontraron resultados</li>
                                        )}
                                    </ul>

                                </div>
                                )}
                            </div>
                            

                            {selectedPais === "México" && (
                                <>
                            <div className="relative">
                                <p className="text-white mb-2">Estado donde se encuentra tu universidad<span className="text-red-400">*</span></p>
                                <button
                                    type="button"
                                    onClick={() => setIsEstadoOpen(!isEstadoOpen)}
                                    className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                                >
                                    <span>{selectedEstado || "Selecciona un estado"}</span>
                                    <span>▼</span>
                                </button>
                                
                                {isEstadoOpen && (
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <div className="p-2 border-b border-gray-200">
                                        <input
                                            type="text"
                                            value={searchEstado}
                                            onChange={(e) => setSearchEstado(e.target.value)}
                                            placeholder="Buscar estado..."
                                            className="w-full p-2 rounded-md border border-gray-300 text-black text-sm"
                                            autoFocus
                                        />
                                    </div>

                                    <ul className="py-1 max-h-48 overflow-y-auto">
                                        {estadosFiltrados.length > 0 ? (
                                            estadosFiltrados.map((estado) => (
                                            <li
                                                key={estado.id}
                                                onClick={() => {
                                                setSelectedEstado(estado.nombre);
                                                setIsEstadoOpen(false);
                                                setSearchEstado("");
                                                }}
                                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                            >
                                                {estado.nombre}
                                            </li>
                                            ))
                                        ) : (
                                        <li className="px-4 py-2 text-gray-400 text-sm">No se encontraron resultados</li>
                                        )}
                                    </ul>

                                </div>
                                )}
                            </div>

                            <div className="relative">
                                <p className="text-white mb-2">Universidad (en México)<span className="text-red-400">*</span></p>
                                <button
                                    type="button"
                                    onClick={() => setIsUniversidadOpen(!isUniversidadOpen)}
                                    className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                                >
                                    <span>{selectedUniversidad|| "Selecciona una universidad"}</span>
                                    <span>▼</span>
                                </button>
                                
                                {isUniversidadOpen && (
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <div className="p-2 border-b border-gray-200">
                                        <input
                                            type="text"
                                            value={searchUniversidad}
                                            onChange={(e) => setSearchUniversidad(e.target.value)}
                                            placeholder="Buscar universidad..."
                                            className="w-full p-2 rounded-md border border-gray-300 text-black text-sm"
                                            autoFocus
                                        />
                                    </div>

                                    <ul className="py-1 max-h-48 overflow-y-auto">
                                        {universidadesFiltrados.length > 0 ? (
                                            universidadesFiltrados.map((universidad) => (
                                            <li
                                                key={universidad.id}
                                                onClick={() => {
                                                setSelectedUniversidad(universidad.nombre);
                                                setIsUniversidadOpen(false);
                                                setSearchUniversidad("");
                                                }}
                                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                            >
                                                {universidad.nombre}
                                            </li>
                                            ))
                                        ) : (
                                        <li className="px-4 py-2 text-gray-400 text-sm">No se encontraron resultados</li>
                                        )}
                                    </ul>

                                </div>
                                )}
                            </div>
                            </>
                            )}

                            {selectedPais && selectedPais !== "México" && (
                            <div>
                                <p className="text-white mb-2">Nombre de universidad extranjera <span className="text-red-400">*</span></p>
                                <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa el nombre de tu universidad" />
                            </div>
                            )}
                            
                            <div className="relative">
                                <p className="text-white mb-2">Selecciona tu carrera<span className="text-red-400">*</span></p>
                                <button
                                    type="button"
                                    onClick={() => setIsCarreraOpen(!isCarreraOpen)}
                                    className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                                >
                                    <span>{selectedCarrera || "Selecciona una carrera"}</span>
                                    <span>▼</span>
                                </button>
                                
                                {isCarreraOpen && (
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <div className="p-2 border-b border-gray-200">
                                        <input
                                            type="text"
                                            value={searchCarrera}
                                            onChange={(e) => setSearchCarrera(e.target.value)}
                                            placeholder="Buscar carrera..."
                                            className="w-full p-2 rounded-md border border-gray-300 text-black text-sm"
                                            autoFocus
                                        />
                                    </div>

                                    <ul className="py-1 max-h-48 overflow-y-auto">
                                        {carrerasFiltrados.length > 0 ? (
                                            carrerasFiltrados.map((carrera) => (
                                            <li
                                                key={carrera.id}
                                                onClick={() => {
                                                setSelectedCarrera(carrera.nombre);
                                                setIsCarreraOpen(false);
                                                setSearchCarrera("");
                                                }}
                                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                            >
                                                {carrera.nombre}
                                            </li>
                                            ))
                                        ) : (
                                        <li className="px-4 py-2 text-gray-400 text-sm">No se encontraron resultados</li>
                                        )}
                                    </ul>

                                </div>
                                )}
                            </div>

                            <div className="relative">
                                <p className="text-white mb-2">Semestre actual<span className="text-red-400">*</span></p>
                                <button
                                    type="button"
                                    onClick={() => setIsSemestreOpen(!isSemestreOpen)}
                                    className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                                >
                                    <span>{selectedSemestre || "Selecciona tu semestre"}</span>
                                    <span>▼</span>
                                </button>
                                
                                {isSemestreOpen && (
                                    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul className="py-1">
                                            {semestres.map((semestre) => (
                                                <li
                                                    key={semestre.id}
                                                    onClick={() => {
                                                        setSelectedSemestre(semestre.description);
                                                        setIsSemestreOpen(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                                >
                                                    {semestre.description}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN 4: Preferencias alimentarias */}
                    <div className="bg-white/10 p-8 rounded-lg">
                        <h2 className="text-white text-xl font-semibold mb-4">Preferencias alimentarias</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-white mb-2">¿Eres vegano/a? <span className="text-red-400">*</span></p>
                                <div className="flex space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="vegano" value="si" className="text-pink-600" />
                                        <span className="text-white">Sí</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="vegano" value="no" className="text-pink-600" />
                                        <span className="text-white">No</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <p className="text-white mb-2">¿Tienes alguna restricción alimentaria? <span className="text-red-400">*</span></p>
                                <div className="flex space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input 
                                            type="radio" 
                                            name="restriccion" 
                                            value="si" 
                                            className="text-pink-600"
                                            onChange={() => setTieneRestriccion(true)}
                                        />
                                        <span className="text-white">Sí</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input 
                                            type="radio" 
                                            name="restriccion" 
                                            value="no" 
                                            className="text-pink-600"
                                            onChange={() => setTieneRestriccion(false)}
                                        />
                                        <span className="text-white">No</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {tieneRestriccion && (
                            <div className="mt-4">
                                <p className="text-white mb-2">Especificación</p>
                                <input 
                                    type="text" 
                                    className="w-full p-3 rounded-md bg-white text-black" 
                                    placeholder="Especifica tu restricción alimentaria"
                                />
                            </div>
                        )}
                    </div>

                    {/* SECCIÓN 5: inforación profesional */}
                    <div className="bg-white/10 p-8 rounded-lg">
                    
                        <h2 className="text-white text-xl font-semibold mb-4">Información profesional</h2>

                        <div className="grid gap-y-1.5">
                            <FileUpload 
                                label="Carga tu CV"
                                required={true}
                                onFileChange={setCvFile}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-white mb-2">LinkedIn</p>
                                <input type="url" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa link a tu cuenta de LinkedIn" />
                            </div>
                            <div>
                                <p className="text-white mb-2">GitHub</p>
                                <input type="url" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa link a tu cuenta de GitHub" />
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN 6: Acuerdos requeridos MLH */}
                    <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                        <h2 className="text-white text-xl font-semibold mb-4">Acuerdos y términos</h2>
                        <div className="space-y-4">
                            {/* Acuerdo 1: Código de Conducta MLH */}
                            <div className="flex items-start space-x-3">
                                <input 
                                    type="checkbox" 
                                    id="mlh-code-conduct" 
                                    className="mt-1 w-5 h-5 text-pink-600 bg-white border-gray-300 rounded focus:ring-pink-500"
                                    required
                                />
                                <label htmlFor="mlh-code-conduct" className="text-white text-sm md:text-base">
                                    He leído y acepto el{' '}
                                    <a 
                                        href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-pink-300 hover:text-pink-200 underline transition-colors"
                                    >
                                        Código de Conducta de MLH
                                    </a>
                                    . <span className="text-red-400">*</span>
                                </label>
                            </div>

                            {/* Acuerdo 2: Información de logística del evento */}
                            <div className="flex items-start space-x-3">
                                <input 
                                    type="checkbox" 
                                    id="mlh-logistics" 
                                    className="mt-1 w-5 h-5 text-pink-600 bg-white border-gray-300 rounded focus:ring-pink-500"
                                    required
                                />
                                <label htmlFor="mlh-logistics" className="text-white text-sm md:text-base">
                                    Autorizo a compartir mi información de aplicación/registro con Major League Hacking para la administración del evento, clasificación y administración de MLH de acuerdo con la{' '}
                                    <a 
                                        href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-pink-300 hover:text-pink-200 underline transition-colors"
                                    >
                                        Política de Privacidad de MLH
                                    </a>
                                    . Además, acepto los términos tanto de los{' '}
                                    <a 
                                        href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-pink-300 hover:text-pink-200 underline transition-colors"
                                    >
                                        Términos y Condiciones del Concurso de MLH
                                    </a>
                                    {' '}como de la{' '}
                                    <a 
                                        href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-pink-300 hover:text-pink-200 underline transition-colors"
                                    >
                                        Política de Privacidad de MLH
                                    </a>
                                    . <span className="text-red-400">*</span>
                                </label>
                            </div>

                            {/* Nota informativa */}
                            <p className="text-pink-200 text-xs mt-2">
                                * Estos acuerdos son requeridos para participar en el evento.
                            </p>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold">
                        Enviar registro
                    </button>
                </form>
            </main>
           
        </section>
    );
}