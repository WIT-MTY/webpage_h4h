'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import HeaderForms from "@/app/componentes/formulario_comp/HeaderForms";

type Paso = 'iniciosesion' | 'recuperacion' 


export default function PageFormulario() {
    
    const router = useRouter();
    const [paso, setPaso] = useState<Paso>('iniciosesion')
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [errores, setErrores] = useState<Record<string, string>>({});
    const [errorGeneral, setErrorGeneral] = useState("");
    const [mostrarContrasena, setMostrarContrasena] = useState(false);

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
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ email: correo, password: contrasena }),
            });
        
            if (!res.ok) {
                setErrorGeneral("Correo o contraseña incorrectos");
                return;
            }
        
            const data = await res.json();
            
            document.cookie = `token=${data.access_token}; path=/; max-age=${60 * 60 * 8}`;
            const payload = JSON.parse(atob(data.access_token.split(".")[1]));

            document.cookie = `usuarioBaseId=${payload.sub}; path=/; max-age=${60 * 60 * 8}`;

            if (data.is_admin) {
                router.push("/Admin");
            } else {
                router.push("/User");
            }

        }catch (error) {
            setErrorGeneral("Error al iniciar sesión, intenta de nuevo");
        }

    };

    return (
        <section className="w-full min-h-screen flex flex-col relative" style={{ background: "#761450" }}>
            <HeaderForms />
            <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
                
                
                
                <main className="w-full max-w-md mx-auto">
                    
                    
                    {/* Inicio de sesion */}
                    {paso === 'iniciosesion' && (
                        <form className="space-y-6 pb-20" onSubmit={handleSubmit}>
                            <h1 className="text-3xl font-bold text-white text-center mb-6 mt-8">Iniciar sesión</h1>
                        
                            {/* Campos de datos */}
                            <div className="bg-white/10 p-8 rounded-lg">
                                <h2 className="text-white text-xl font-semibold mb-4">Ingresa tus datos</h2>
                            
                                <div className="flex flex-col space-y-4">

                                    {/* Campo de correo electrónico */}
                                    <div>
                                        <p className="text-white mb-2">Correo Electrónico <span className="text-red-400">*</span></p>
                                        <input 
                                            type="email" 
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            className="w-full p-3 rounded-md bg-white text-black" 
                                            placeholder="Ingresa tu correo" 
                                        />
                                        {errores.correo && <p className="text-red-400 text-sm mt-1">{errores.correo}</p>}
                                    </div>

                                    {/* Campo de contraseña */}
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

                                    {errorGeneral && <p className="text-red-400 text-sm text-center">{errorGeneral}</p>}

                                    <button 
                                        onClick={() => setPaso('recuperacion')} 
                                        className="flex items-center space-x-2 text-[#bd699c] underline hover:text-pink-600 transition-colors text-lg font-medium group">
                                        ¿Olvidaste tu contraseña?
                                    </button>
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
                    )}
                    
                    {/* Recuperar contrasenia */}
                    {paso === 'recuperacion' && (
                        <form className="space-y-6 pb-20" >
                            <h1 className="text-3xl font-bold text-white text-center mb-6 mt-8">¿Olvidaste tu contraseña?</h1>
                        
                            {/* Campos de datos */}
                            <div className="bg-white/10 p-8 rounded-lg">
                                <h2 className="text-white text-xl font-semibold mb-4">Recuperar contraseña</h2>
                            
                                <div className="flex flex-col space-y-4">
                                    {/* Campo de correo electrónico */}
                                    <div>
                                        <p className="text-white mb-2">Correo Electrónico <span className="text-red-400">*</span></p>
                                        <input 
                                            type="email" 
                                            className="w-full p-3 rounded-md bg-white text-black" 
                                            placeholder="Ingresa tu correo" 
                                        />
                                    </div>

                                    <button 
                                        onClick={() => setPaso('iniciosesion')} 
                                        className="flex items-center space-x-2 text-[#bd699c] underline hover:text-pink-600 transition-colors text-lg font-medium group">
                                        Iniciar sesión
                                    </button>
                                </div>
                            </div>

                            {/* Botón de recuperacion de contrasenia */}
                            <button 
                                type="submit" 
                                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
                            >
                                Envíar correo de recuperación
                            </button>
                        </form>
                    )}
                </main>

            </div>
        </section>
    );
}