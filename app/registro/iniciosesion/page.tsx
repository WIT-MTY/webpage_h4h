'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import HeaderForms from "@/app/componentes/formulario_comp/HeaderForms";

export default function PageFormulario() {
    const router = useRouter();

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [errores, setErrores] = useState<Record<string, string>>({});
    const [errorGeneral, setErrorGeneral] = useState("");

    const validar = (): boolean => {
        const nuevosErrores: Record<string, string> = {};
        if (!correo) nuevosErrores.correo = "El correo es requerido";
        if (!contrasena) nuevosErrores.contrasena = "La contraseña es requerida";
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validar()) return;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ correo, contrasena }),
            });
        
            if (!res.ok) {
                setErrorGeneral("Correo o contraseña incorrectos");
                return;
            }
        
            const data = await res.json();

            // Guarda el token que te regresa el backend
            localStorage.setItem("token", data.token);

            router.push("/User");
        }catch (error) {
            setErrorGeneral("Error al iniciar sesión, intenta de nuevo");
        }
    };

   
    return (
        <section className="w-full min-h-screen flex flex-col relative" style={{ background: "#761450" }}>
            <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
                
                <HeaderForms />
                
                <main className="w-full max-w-md mx-auto">
                    <h1 className="text-3xl font-bold text-white text-center mb-6 mt-8">Iniciar sesión</h1>
                    
                    <form className="space-y-6 pb-20" onSubmit={handleSubmit}>
                        {/* Campos de datos en disposición vertical */}
                        <div className="bg-white/10 p-8 rounded-lg">
                            <h2 className="text-white text-xl font-semibold mb-4">Ingresa tus datos</h2>
                            
                            {/* Disposición vertical en lugar de grid */}
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <p className="text-white mb-2">Correo Electrónico</p>
                                    <input 
                                        type="email" 
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                        className="w-full p-3 rounded-md bg-white text-black" 
                                        placeholder="Ingresa tu correo" 
                                    />
                                    {errores.correo && <p className="text-red-400 text-sm mt-1">{errores.correo}</p>}
                                </div>
                                <div>
                                    <p className="text-white mb-2">Contraseña</p>
                                    <input 
                                        type="password" 
                                        value={contrasena}
                                        onChange={(e) => setContrasena(e.target.value)}
                                        className="w-full p-3 rounded-md bg-white text-black" 
                                        placeholder="Ingresa una contraseña" 
                                    />
                                    {errores.contrasena && <p className="text-red-400 text-sm mt-1">{errores.contrasena}</p>}
                                </div>
                                {errorGeneral && <p className="text-red-400 text-sm text-center">{errorGeneral}</p>}
                            </div>
                        </div>

                        {/* Botón de inicio de sesión */}
                        <button 
                            type="submit" 
                            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </main>
            </div>
        </section>
    );
}