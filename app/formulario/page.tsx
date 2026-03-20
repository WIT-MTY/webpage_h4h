'use client';
import React, { useState } from "react";



export default function PageFormulario() {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    
    return (
        <section className="w-full min-h-screen overflow-y-auto flex flex-col items-center justify-center relative" style={{ background: "#4A0C32" }}>
            <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
                
                <div className="w-full max-w-7xl mx-auto text-center space-y-8 mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold text-white">
                        Hack4Her
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-semibold text-purple-200">
                        Registro
                    </h2>
                    <div className="w-24 h-1 bg-purple-300 mx-auto rounded-full"></div>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                        Hack4Her es un evento nacional de 3 días que, con enfoque en el talento femenino y apertura general, ofrece crecimiento profesional en ingeniería y negocios para Mujeres Universitarias a través de talleres, una reunión de líderes WIT y una hackathon.
                    </p>
                </div>

               
                <form className="w-full max-w-3xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                    <div className="space-y-4">
                        
                        {/* Datos para crear la cuenta */}
                        <div>
                            <p className="text-white mb-2">Correo Electrónico</p>
                            <input type="email" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu correo" />
                        </div>

                        <div>
                            <p className="text-white mb-2">Contraseña</p>
                            <input type="password" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa una contraseña" />
                        </div>

                        {/* Datos personales */}
                        <div>
                            <p className="text-white mb-2">Nombre(s)</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu nombre" />
                        </div>

                        <div>
                            <p className="text-white mb-2">Apellidos</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu nombre" />
                        </div>

                         <div>
                            <p className="text-white mb-2">Género</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa el nombre de tu universidad" />
                        </div>


                        <div>
                            <p className="text-white mb-2">Fecha de nacimiento</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu nombre" />
                        </div>

                        <div>
                            <p className="text-white mb-2">Fecha de nacimiento</p>
                           
                        </div>
                         

                        <div>
                            <p className="text-white mb-2">Permiso menor de edad</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu nombre" />
                        </div>

                        <div>
                            <p className="text-white mb-2">Teléfono</p>
                            <input type="telephone" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu nombre" />
                        </div>

                        


                        <div className="relative">
                            <p className="text-white mb-2">Ubicación de tu universidad</p>
                            <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                            >
                                <span>Selecciona un país</span>
                                <span>▼</span>
                            </button>
                            
                            {isOpen && (
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <ul className="py-1">
                                        <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">México</li>
                                        <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">Estados Unidos</li>
                                        <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">Canadá</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <p className="text-white mb-2">Universidad (en mexico)</p>
                            <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                            >
                                <span>Selecciona un país</span>
                                <span>▼</span>
                            </button>
                            
                            {isOpen && (
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <ul className="py-1">
                                        <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">Tec</li>
                                        <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">UANL</li>
                                        <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">UNAM</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div>
                            <p className="text-white mb-2">Nombre de universidad extranjera</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa el nombre de tu universidad" />
                        </div>

                         <div>
                            <p className="text-white mb-2">Semestre</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa el nombre de tu universidad" />
                        </div>

                         <div>
                            <p className="text-white mb-2">Carrera</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa el nombre de tu universidad" />
                        </div>

                        <div>
                            <p className="text-white mb-2">Restricción alimentaria</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa el nombre de tu universidad" />
                        </div>

                        <div>
                            <p className="text-white mb-2">Especificación</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa el nombre de tu universidad" />
                        </div>
                        
                        <div>
                            <p className="text-white mb-2">Vegana</p>
                            <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa el nombre de tu universidad" />
                        </div>




                        <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
                            Enviar registro
                        </button>

                        
                    </div>
                </form>
            </div>
        </section>
    );
}