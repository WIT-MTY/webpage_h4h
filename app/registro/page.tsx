'use client';
import React, { useState, useEffect } from "react";
import HeaderForms from "../componentes/formulario_comp/HeaderForms";
import FileUpload from "../componentes/registro/FileUpload";
import { useFormData } from "../hooks/utils/useFormData";


export default function PageFormulario() {

    const [registroEnviado, setRegistroEnviado] = useState(false);
    const [selectedEstadoId, setSelectedEstadoId] = useState<number | null>(null);
    const [errorGeneral, setErrorGeneral] = useState("");
    const [mostrarContrasena, setMostrarContrasena] = useState(false);


    //recibir datos de backend
    const { GENEROS, TALLAS, PAISES, ESTADOS, UNIVERSIDADES, CARRERAS, SEMESTRES, loading } = useFormData();
    

    const [paises, setPaises] = useState<typeof PAISES>([]);
    const [selectedPais, setSelectedPais] = useState<string>("");
    const [isPaisOpen, setIsPaisOpen] = useState(false);
    const [searchPais, setSearchPais] = useState("");
    const paisesFiltrados = paises.filter((pais) =>
        pais.nom_pais.toLowerCase().includes(searchPais.toLowerCase())
    );

    const [estados, setEstados] = useState<typeof ESTADOS>([]);  
    const [selectedEstado, setSelectedEstado] = useState<string>("");
    const [isEstadoOpen, setIsEstadoOpen] = useState(false);
    const [searchEstado, setSearchEstado] = useState("");
    const estadosFiltrados = estados.filter((estado) =>
        estado.nom_estado.toLowerCase().includes(searchEstado.toLowerCase())
    );

    const [universidades, setUniversidades] = useState<typeof UNIVERSIDADES>([]);
    const [selectedUniversidad, setSelectedUniversidad] = useState<string>("");
    const [isUniversidadOpen, setIsUniversidadOpen] = useState(false);
    const [searchUniversidad, setSearchUniversidad] = useState("");
    const universidadesFiltrados = universidades
    .filter((universidad) => 
            selectedEstadoId ? universidad.estado_id === selectedEstadoId : true
        )
        .filter((universidad) =>
        universidad.universidad_nombre.toLowerCase().includes(searchUniversidad.toLowerCase())
    );

    const [tallas, setTallas] = useState<typeof TALLAS>([]);
    const [selectedTalla, setSelectedTalla] = useState<string>("");
    const [isTallaOpen, setIsTallaOpen] = useState(false);

    const [generos, setGeneros] = useState<typeof GENEROS>([]);
    const [selectedGenero, setSelectedGenero] = useState<string>("");
    const [isGeneroOpen, setIsGeneroOpen] = useState(false);

    const [carreras, setCarreras] = useState<typeof CARRERAS>([]);
    const [selectedCarrera, setSelectedCarrera] = useState<string>("");
    const [isCarreraOpen, setIsCarreraOpen] = useState(false);
    const [searchCarrera, setSearchCarrera] = useState("");
    const carrerasFiltrados = carreras.filter((carrera) =>
        carrera.carrera_nombre.toLowerCase().includes(searchCarrera.toLowerCase())
    );

    const [semestres, setSemestres] = useState<typeof SEMESTRES>([]);
    const [selectedSemestre, setSelectedSemestre] = useState<string>("");
    const [isSemestreOpen, setIsSemestreOpen] = useState(false);

    useEffect(() => { if (PAISES.length)        setPaises(PAISES);             }, [PAISES]);
    useEffect(() => { if (ESTADOS.length)       setEstados(ESTADOS);           }, [ESTADOS]);
    useEffect(() => { if (UNIVERSIDADES.length) setUniversidades(UNIVERSIDADES); }, [UNIVERSIDADES]);
    useEffect(() => { if (TALLAS.length)        setTallas(TALLAS);             }, [TALLAS]);
    useEffect(() => { if (GENEROS.length)       setGeneros(GENEROS);           }, [GENEROS]);
    useEffect(() => { if (CARRERAS.length)      setCarreras(CARRERAS);         }, [CARRERAS]);
    useEffect(() => { if (SEMESTRES.length)     setSemestres(SEMESTRES);       }, [SEMESTRES]);

    ////////////////////
    // Estados para inputs de texto
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [universidadExtranjera, setUniversidadExtranjera] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [vegano, setVegano] = useState("");
    const [restriccionAlimentaria, setRestriccionAlimentaria] = useState("");
    const [especificacionRestriccion, setEspecificacionRestriccion] = useState("");
    const [mlhConducta, setMlhConducta] = useState(false);
    const [mlhLogistica, setMlhLogistica] = useState(false);
    const [tieneRestriccion, setTieneRestriccion] = useState<boolean>(false);
    const [permisoFile, setPermisoFile] = useState<File | null>(null);
    const [cvFile, setCvFile] = useState<File | null>(null);

    // Errores
    const [errores, setErrores] = useState<Record<string, string>>({});
    const [erroresBackend, setErroresBackend] = useState<string[]>([]);
    

    /////////////////
    /// Manejo de edad de particpantes

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


    //// Manejo de validacaión de campos completos en formulario

    const validar = (): boolean => {
        const nuevosErrores: Record<string, string> = {};
        
        
        // mensajes de error
        if (!correo) nuevosErrores.correo = "El correo es requerido";
        if (!contrasena) nuevosErrores.contrasena = "La contraseña es requerida";
        else if (contrasena.length < 6) nuevosErrores.contrasena = "La contraseña debe tener al menos 6 caracteres";
        if (!nombre) nuevosErrores.nombre = "El nombre es requerido";
        if (!apellidos) nuevosErrores.apellidos = "Los apellidos son requeridos";
        if (!selectedGenero) nuevosErrores.genero = "El género es requerido";
        if (!selectedTalla) nuevosErrores.talla = "La talla de playera es requerida";
        if (!fechaNacimiento || errorFecha) nuevosErrores.fechaNacimiento = "La fecha de nacimiento es requerida";
        if (!telefono) nuevosErrores.telefono = "El teléfono es requerido";
        if (esMenorEdad && !permisoFile) nuevosErrores.permiso = "El permiso de menores es requerido";
        if (!selectedPais) nuevosErrores.pais = "El país es requerido";
        if (selectedPais === "México") {
        if (!selectedEstado) nuevosErrores.estado = "El estado es requerido";
            if (!selectedUniversidad) nuevosErrores.universidad = "La universidad es requerida";
        } else if (selectedPais) {
            if (!universidadExtranjera) nuevosErrores.universidadExtranjera = "El nombre de la universidad es requerido";
        }
        if (!selectedCarrera) nuevosErrores.carrera = "La carrera es requerida";
        if (!selectedSemestre) nuevosErrores.semestre = "El semestre es requerido";
        if (!vegano) nuevosErrores.vegano = "Este campo es requerido";
        if (!restriccionAlimentaria) nuevosErrores.restriccion = "Este campo es requerido";
        if (tieneRestriccion && !especificacionRestriccion) nuevosErrores.especificacion = "Especifica tu restricción";
        if (!cvFile) nuevosErrores.cv = "El CV es requerido";
        if (!mlhConducta) nuevosErrores.mlhConducta = "Debes aceptar el Código de Conducta";
        if (!mlhLogistica) nuevosErrores.mlhLogistica = "Debes aceptar los términos de MLH";
        

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validar()) return;

        try {
        const formData = new FormData();

        // Credenciales
        formData.append("email", correo);
        formData.append("password", contrasena);

        // Datos personales
        formData.append("nombre", nombre);
        formData.append("apellido", apellidos); 
        formData.append("fecha_nacimiento", fechaNacimiento);
        formData.append("telefono", telefono);
        formData.append("genero_id", String(generos.find(g => g.descripcion === selectedGenero)?.id || ""));
        formData.append("talla_playera_id", String(tallas.find(t => t.descripcion === selectedTalla)?.id || ""));

        // Ubicación y universidad
        formData.append("pais_id", String(paises.find(p => p.nom_pais === selectedPais)?.id || ""));
        if (selectedPais === "México") {
            formData.append("estado_id", String(estados.find(e => e.nom_estado === selectedEstado)?.id || ""));
            formData.append("universidad_mexico_id", String(universidades.find(u => u.universidad_nombre === selectedUniversidad)?.id || ""));
        } else {
            formData.append("universidad_extranjera", universidadExtranjera);
        }

        // Académico
        formData.append("carrera_id", String(carreras.find(c => c.carrera_nombre === selectedCarrera)?.id || ""));
        formData.append("semestre_id", String(semestres.find(s => s.descripcion === selectedSemestre)?.id || ""));

        // Alimentación
        formData.append("vegana", String(vegano === "si"));
        formData.append("tiene_restriccion_alimentaria", String(restriccionAlimentaria === "si"));
        if (tieneRestriccion) formData.append("detalle_restriccion_alimentaria", especificacionRestriccion);

        // Archivos
        if (cvFile) formData.append("cv_file", cvFile);
        if (permisoFile) formData.append("permiso_file", permisoFile);

        // Opcionales
        formData.append("linkedin_url", linkedin);
        formData.append("github_url", github);
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
            method: "POST",
            body: formData,
        });

        const text = await res.text();
        console.log("Respuesta raw:", text);
        console.log("Status:", res.status);

        if (!res.ok) {
            const errorData = JSON.parse(text);
        if (errorData.error === "User already registered" || errorData.error?.includes("duplicate key value")) {
            setErrores({ correo: "Este correo ya está registrado, intenta con otro" });
        } else {
            setErroresBackend([errorData.error || "Ocurrió un error, intenta de nuevo"]);
        }
            return;
        }

    
        console.log("Registro exitoso:");
        setRegistroEnviado(true);
        setErroresBackend([]);
        setRegistroEnviado(true);

        } catch (error) {
            console.error("Error al enviar:", error);
            setErrorGeneral("Error de conexión, verifica tu internet e intenta de nuevo");
        }
    };
    
    

    return (
        
        <section className="w-full min-h-screen overflow-y-auto flex flex-col items-center justify-center relative" style={{ background: "#761450" }}>
            <HeaderForms />


            <main className="w-full px-4 py-8">
                {loading ? (
               
                    <div className="flex items-center justify-center min-h-96">
                        <div className="text-white/20 text-xl animate-pulse">Cargando formulario de registro...</div>
                    </div>
                ) : registroEnviado ? (
                    <div className="flex flex-col items-center justify-center min-h-96 text-center">
                        <h2 className="text-white text-4xl font-bold mb-4">¡Registro enviado!</h2>
                        <p className="text-pink-200 text-lg">¡Gracias por registrarte en H4H!</p>
                        <p className="text-pink-200 text-lg">Tu solicitud está en revisión.</p>
                        <p className="text-pink-200 text-lg">Podrás ver el estado de tu registro iniciando sesión en la página.</p>
                    </div>
                ) : (
                <form className="space-y-6 max-w-7xl mx-auto" onSubmit={handleSubmit}>
                    
                    {/* SECCIÓN 1: Datos para crear la cuenta */}
                    <div className="bg-white/10 p-8 rounded-lg">
                        <h2 className="text-white text-xl font-semibold mb-4">Datos de cuenta</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-white mb-2">Correo Electrónico <span className="text-red-400">*</span></p>
                                <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu correo" />
                                    {errores.correo && <p className="text-red-400 text-sm mt-1">{errores.correo}</p>}
                            </div>
                            <div>
    <p className="text-white mb-2">Contraseña <span className="text-red-400">*</span></p>
    <div className="relative">
        <input 
            type={mostrarContrasena ? "text" : "password"}
            value={contrasena} 
            onChange={(e) => setContrasena(e.target.value)} 
            className="w-full p-3 rounded-md bg-white text-black pr-12" 
            placeholder="Ingresa una contraseña" 
        />
        <button
            type="button"
            onClick={() => setMostrarContrasena(!mostrarContrasena)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
            {mostrarContrasena ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" />
                </svg>
            )}
        </button>
    </div>
    {errores.contrasena && <p className="text-red-400 text-sm mt-1">{errores.contrasena}</p>}
</div>
                        </div>
                    </div>

                    {/* SECCIÓN 2: Datos personales */}
                    <div className="bg-white/10 p-8 rounded-lg">
                        <h2 className="text-white text-xl font-semibold mb-4">Datos personales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-white mb-2">Nombre(s) <span className="text-red-400">*</span></p>
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu(s) nombre(s)" />
                                    {errores.nombre && <p className="text-red-400 text-sm mt-1">{errores.nombre}</p>}
                            </div>

                            <div>
                                <p className="text-white mb-2">Apellido(s) <span className="text-red-400">*</span></p>
                                <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tus apellidos" />
                                    {errores.apellidos && <p className="text-red-400 text-sm mt-1">{errores.apellidos}</p>}
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
                                {errores.genero && <p className="text-red-400 text-sm mt-1">{errores.genero}</p>}
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
                                                        setSelectedTalla(talla.descripcion);
                                                        setIsTallaOpen(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                                >
                                                    {talla.descripcion}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {errores.talla && <p className="text-red-400 text-sm mt-1">{errores.talla}</p>}
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
                                {errores.fechaNacimiento && <p className="text-red-400 text-sm mt-1">{errores.fechaNacimiento}</p>}
                                
                            </div>
                            
                            <div>
                                <p className="text-white mb-2">Teléfono <span className="text-red-400">*</span></p>
                                <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu teléfono" />
                                    {errores.telefono && <p className="text-red-400 text-sm mt-1">{errores.telefono}</p>}
                            
                        </div>

                        </div>

                        {/* FileUpload condicional para permiso de menores */}
                        {esMenorEdad && (
                            <div className="mt-4">
                                <FileUpload 
                                    label="Permiso firmado por padres o tutores"
                                    required={true}
                                    onFileChange={setPermisoFile}
                                />
                                {errores.permiso && <p className="text-red-400 text-sm mt-1">{errores.permiso}</p>}
                                <label className="text-pink-200 text-xs mt-2">
                                * Descarga la {' '}<a 
                                        href="https://docs.google.com/document/d/1CR2aCdtOcxsDyqMW5sfz_j6mSrbrs_1scf17XJ4DJLE/edit?usp=sharing" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-pink-300 hover:text-pink-200 underline transition-colors"
                                    >
                                        CARTA DE CONSENTIMIENTO PARA USO DE IMÁGENES
                                    </a>, llénala con la información solicitada y adjúntala aquí en formato PDF.
                                </label>
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
                                                setSelectedPais(pais.nom_pais);
                                                setIsPaisOpen(false);
                                                setSearchPais("");
                                                }}
                                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                            >
                                                {pais.nom_pais}
                                            </li>
                                            ))
                                        ) : (
                                        <li className="px-4 py-2 text-gray-400 text-sm">No se encontraron resultados</li>
                                        )}
                                    </ul>

                                </div>
                                )}
                                {errores.pais && <p className="text-red-400 text-sm mt-1">{errores.pais}</p>}
                            </div>
                            

                            {selectedPais === "México" && (
                            <>
                            <div className="relative">
                                <p className="text-white mb-2">Estado donde se encuentra tu universidad (en México)<span className="text-red-400">*</span></p>
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
                                                setSelectedEstado(estado.nom_estado);
                                                setSelectedEstadoId(estado.id);
                                                setIsEstadoOpen(false);
                                                setSearchEstado("");
                                                setSelectedUniversidad(""); 
                                                }}
                                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                            >
                                                {estado.nom_estado}
                                            </li>
                                            ))
                                        ) : (
                                        <li className="px-4 py-2 text-gray-400 text-sm">No se encontraron resultados</li>
                                        )}
                                    </ul>

                                </div>
                                )}
                                {errores.estado && <p className="text-red-400 text-sm mt-1">{errores.estado}</p>}
                            </div>

                            <div className="relative">
                                <p className="text-white mb-2">Universidad (en México)<span className="text-red-400">*</span></p>
                                <button
                                    type="button"
                                    onClick={() => selectedEstadoId && setIsUniversidadOpen(!isUniversidadOpen)}
                                    className={`w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black 
                                    ${!selectedEstadoId ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                                >
                                <span>{selectedUniversidad || "Selecciona una universidad"}</span>
                                <span>▼</span>
                                </button>

  
                                {!selectedEstadoId && (
                                    <p className="text-pink-200 text-xs mt-1">Primero selecciona un estado</p>
                                )}

                                {isUniversidadOpen && selectedEstadoId && (
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
                                                    setSelectedUniversidad(universidad.universidad_nombre);
                                                    setIsUniversidadOpen(false);
                                                    setSearchUniversidad("");
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                                    >
                                                    {universidad.universidad_nombre}
                                                    </li>
                                                ))
                                            ) : (
                                                <li className="px-4 py-2 text-gray-400 text-sm">
                                                    No hay universidades registradas en este estado
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                                {errores.universidad && <p className="text-red-400 text-sm mt-1">{errores.universidad}</p>}
                            </div>
                            </>
                            )}


                            {selectedPais && selectedPais !== "México" && (
                            <div>
                                <p className="text-white mb-2">Nombre de universidad <span className="text-red-400">*</span></p>
                                <input type="text" value={universidadExtranjera} onChange={(e) => setUniversidadExtranjera(e.target.value)} className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa el nombre de tu universidad" />
                                    {errores.universidadExtranjera && <p className="text-red-400 text-sm mt-1">{errores.universidadExtranjera}</p>}
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
                                                setSelectedCarrera(carrera.carrera_nombre);
                                                setIsCarreraOpen(false);
                                                setSearchCarrera("");
                                                }}
                                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                            >
                                                {carrera.carrera_nombre}
                                            </li>
                                            ))
                                        ) : (
                                        <li className="px-4 py-2 text-gray-400 text-sm">No se encontraron resultados</li>
                                        )}
                                    </ul>

                                </div>
                                )}
                                {errores.carrera && <p className="text-red-400 text-sm mt-1">{errores.carrera}</p>}
                            </div>

                            <div className="relative">
                                <p className="text-white mb-2">Semestre actual<span className="text-red-400">*</span></p>
                                <button
                                    type="button"
                                    onClick={() => setIsSemestreOpen(!isSemestreOpen)}
                                    className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                                >
                                    <span>{selectedSemestre || "Selecciona un semestre"}</span>
                                    <span>▼</span>
                                </button>
                                
                                {isSemestreOpen && (
                                    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul className="py-1">
                                            {semestres.map((semestre) => (
                                                <li
                                                    key={semestre.id}
                                                    onClick={() => {
                                                        setSelectedSemestre(semestre.descripcion);
                                                        setIsSemestreOpen(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black"
                                                >
                                                    {semestre.descripcion}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {errores.semestre && <p className="text-red-400 text-sm mt-1">{errores.semestre}</p>}
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
                                        <input type="radio" name="vegano" value="si" 
                                            checked={vegano === "si"}
                                            onChange={() => setVegano("si")}
                                            className="text-pink-600"  
                                        />
                                        <span className="text-white">Sí</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="vegano" value="no" 
                                            checked={vegano === "no"}
                                            onChange={() => setVegano("no")}
                                            className="text-pink-600" 
                                        />
                                        <span className="text-white">No</span>
                                    </label>
                                    {errores.vegano && <p className="text-red-400 text-sm mt-1">{errores.vegano}</p>}
                                </div>
                            </div>

                            <div>
                                <p className="text-white mb-2">¿Tienes alguna restricción alimentaria? <span className="text-red-400">*</span></p>
                                <div className="flex space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input 
                                            type="radio" name="restriccion" value="si" 
                                            checked={restriccionAlimentaria === "si"}
                                            onChange={() => { setRestriccionAlimentaria("si"); setTieneRestriccion(true); }}
                                            className="text-pink-600"
                                        />
                                        <span className="text-white">Sí</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input 
                                            type="radio" name="restriccion" value="no" 
                                            checked={restriccionAlimentaria === "no"}
                                            onChange={() => { setRestriccionAlimentaria("no"); setTieneRestriccion(false); }}
                                            className="text-pink-600"
                                        />
                                        <span className="text-white">No</span>
                                    </label>
                                    {errores.restriccion && <p className="text-red-400 text-sm mt-1">{errores.restriccion}</p>}
                                </div>
                            </div>
                        </div>

                        {tieneRestriccion && (
                            <div className="mt-4">
                                <p className="text-white mb-2">Especificación</p>
                                <input 
                                    type="text" 
                                    value={especificacionRestriccion} onChange={(e) => setEspecificacionRestriccion(e.target.value)} 
                                    className="w-full p-3 rounded-md bg-white text-black" 
                                    placeholder="Especifica tu restricción alimentaria"
                                />
                            </div>
                        )}
                        {errores.especificacion && <p className="text-red-400 text-sm mt-1">{errores.especificacion}</p>}
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
                            {errores.cv && <p className="text-red-400 text-sm mt-1">{errores.cv}</p>}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-white mb-2">LinkedIn</p>
                                    <input type="url" 
                                        value={linkedin}
                                        onChange={(e) => setLinkedin(e.target.value)}
                                        className="w-full p-3 rounded-md bg-white text-black" 
                                        placeholder="Ingresa link a tu cuenta de LinkedIn"
                                    />
                                </div>
                                <div>
                                    <p className="text-white mb-2">GitHub</p>
                                    <input type="url"
                                        value={github}
                                        onChange={(e) => setGithub(e.target.value)}
                                        className="w-full p-3 rounded-md bg-white text-black" 
                                        placeholder="Ingresa link a tu cuenta de GitHub"
                                    />
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
                                    checked={mlhConducta} onChange={(e) => setMlhConducta(e.target.checked)} 
                                    className="mt-1 w-5 h-5 text-pink-600 bg-white border-gray-300 rounded focus:ring-pink-500"
                                    
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
                                {errores.mlhConducta && <p className="text-red-400 text-sm mt-1">{errores.mlhConducta}</p>}
                            </div>

                            {/* Acuerdo 2: Información de logística del evento */}
                            <div className="flex items-start space-x-3">
                                <input 
                                    type="checkbox" 
                                    id="mlh-logistics" 
                                    checked={mlhLogistica} onChange={(e) => setMlhLogistica(e.target.checked)}
                                    className="mt-1 w-5 h-5 text-pink-600 bg-white border-gray-300 rounded focus:ring-pink-500"
                                    
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
                                {errores.mlhLogistica && <p className="text-red-400 text-sm mt-1">{errores.mlhLogistica}</p>}
                            </div>

                            {/* Nota informativa */}
                            <p className="text-pink-200 text-xs mt-2">
                                * Estos acuerdos son requeridos para participar en el evento.
                            </p>
                        </div>
                    </div>

                    {erroresBackend.length > 0 && (
                        <div className="bg-red-400/10 border border-red-400/30 p-4 rounded-lg">
                            <p className="text-red-400 text-sm font-semibold mb-1">
                                No se pudo completar el registro:
                            </p>
                            {erroresBackend.map((error, index) => (
                                <p key={index} className="text-red-400 text-sm">• {error}</p>
                            ))}
                        </div>
                    )}

                    {errorGeneral && (
                        <p className="text-red-400 text-sm text-center bg-red-400/10 p-3 rounded-lg">
                            {errorGeneral}
                        </p>
                    )}

                    <button type="submit" className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold">
                        Enviar registro
                    </button>
                </form>
                )}
            </main>
           
        </section>
    );
}