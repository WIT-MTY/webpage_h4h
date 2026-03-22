'use client';
import React, { useState } from "react";
import HeaderForms from "@/app/componentes/formulario_comp/HeaderForms";




export default function PageFormulario() {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    
    return (
        <section className="w-full min-h-screen flex flex-col relative" style={{ background: "#761450" }}>
            <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
                
                <HeaderForms />
                
                <main className="w-full max-w-md mx-auto">
                    <h1 className="text-3xl font-bold text-white text-center mb-6 mt-8">Iniciar sesión</h1>
                    
                    <form className="space-y-6">
                        {/* Campos de datos en disposición vertical */}
                        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                            <h2 className="text-white text-xl font-semibold mb-4">Datos de cuenta</h2>
                            
                            {/* Disposición vertical en lugar de grid */}
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <p className="text-white mb-2">Correo Electrónico</p>
                                    <input 
                                        type="email" 
                                        className="w-full p-3 rounded-md bg-white text-black" 
                                        placeholder="Ingresa tu correo" 
                                    />
                                </div>
                                <div>
                                    <p className="text-white mb-2">Contraseña</p>
                                    <input 
                                        type="password" 
                                        className="w-full p-3 rounded-md bg-white text-black" 
                                        placeholder="Ingresa una contraseña" 
                                    />
                                </div>
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