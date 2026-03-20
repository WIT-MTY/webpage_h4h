'use client';
import React, { useState } from "react";
import HeaderForms from "../componentes/formulario_comp/HeaderForms";

export default function PageFormulario() {
     const [isOpen, setIsOpen] = useState(false);
    const [isUniversityOpen, setIsUniversityOpen] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    
    return (
        <section className="w-full min-h-screen overflow-y-auto flex flex-col items-center justify-center relative" style={{ background: "#761450" }}>
            
            <HeaderForms />

            <main className="w-full px-4 py-8">
                <form className="space-y-6 max-w-7xl mx-auto">
                    
                    {/* SECCIÓN 1: Datos para crear la cuenta */}
                    <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                        <h2 className="text-white text-xl font-semibold mb-4">Datos de cuenta</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-white mb-2">Correo Electrónico</p>
                                <input type="email" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu correo" />
                            </div>
                            <div>
                                <p className="text-white mb-2">Contraseña</p>
                                <input type="password" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa una contraseña" />
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN 2: Datos personales */}
                    <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                        <h2 className="text-white text-xl font-semibold mb-4">Datos personales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-white mb-2">Nombre(s)</p>
                                <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu nombre" />
                            </div>
                            <div>
                                <p className="text-white mb-2">Apellidos</p>
                                <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tus apellidos" />
                            </div>
                            <div>
                                <p className="text-white mb-2">Género</p>
                                <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu género" />
                            </div>
                            <div>
                                <p className="text-white mb-2">Fecha de nacimiento</p>
                                <input type="date" className="w-full p-3 rounded-md bg-white text-black" />
                            </div>
                            <div>
                                <p className="text-white mb-2">Permiso menor de edad</p>
                                <select className="w-full p-3 rounded-md bg-white text-black">
                                    <option value="">Selecciona una opción</option>
                                    <option value="si">Sí, tengo permiso</option>
                                    <option value="no">No, soy mayor de edad</option>
                                </select>
                            </div>
                            <div>
                                <p className="text-white mb-2">Teléfono</p>
                                <input type="tel" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu teléfono" />
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN 3: Datos académicos */}
                    <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                        <h2 className="text-white text-xl font-semibold mb-4">Datos académicos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <p className="text-white mb-2">Universidad (en México)</p>
                                <button
                                    type="button"
                                    onClick={() => setIsUniversityOpen(!isUniversityOpen)}
                                    className="w-full flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-md text-black"
                                >
                                    <span>Selecciona una universidad</span>
                                    <span>▼</span>
                                </button>
                                
                                {isUniversityOpen && (
                                    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul className="py-1">
                                            <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">Tec de Monterrey</li>
                                            <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">UANL</li>
                                            <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">UNAM</li>
                                            <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-black">UDEM</li>
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
                                <select className="w-full p-3 rounded-md bg-white text-black">
                                    <option value="">Selecciona tu semestre</option>
                                    <option value="1">1er semestre</option>
                                    <option value="2">2do semestre</option>
                                    <option value="3">3er semestre</option>
                                    <option value="4">4to semestre</option>
                                    <option value="5">5to semestre</option>
                                    <option value="6">6to semestre</option>
                                    <option value="7">7mo semestre</option>
                                    <option value="8">8vo semestre</option>
                                    <option value="9">9no semestre+</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <p className="text-white mb-2">Carrera</p>
                                <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Ingresa tu carrera" />
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN 4: Preferencias alimentarias */}
                    <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                        <h2 className="text-white text-xl font-semibold mb-4">Preferencias alimentarias</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-white mb-2">¿Eres vegano/a?</p>
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
                                <p className="text-white mb-2">¿Tienes alguna restriccipon alimentaría?</p>
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
                                <p className="text-white mb-2">Especificación</p>
                                <input type="text" className="w-full p-3 rounded-md bg-white text-black" placeholder="Especifica tu restricción" />
                            </div>
                        </div>
                    </div>

                     {/* SECCIÓN 5: Acuerdos requeridos MLH */}
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
                                    .
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
                                    .
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