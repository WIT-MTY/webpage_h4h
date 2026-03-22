'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderUser() {
    const pathname = usePathname();
    
    const isProfilePage = pathname === '/User/Profile';
    const isPrincipalPage = pathname === '/User';
    
    return (
        <header className="w-full bg-white shadow-md py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo y título */}
                
                    <img 
                        src="/images/h4h_logos/logo_h4h_corto.svg" 
                        alt="H4H Logo"
                        className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                    />
                    <h1 className="font-high-cruiser text-2xl text-[#4A0C32] group-hover:text-pink-600 transition-colors">
                        ¡Bienvenida!
                    </h1>
                

                {/* Navegación Desktop - Solo muestra la opción correspondiente */}
                <nav className="hidden md:flex items-center">
                    {isProfilePage ? (
                        // En Perfil: mostrar "Regresar"
                        <Link 
                            href="/User" 
                            className="flex items-center space-x-2 text-[#4A0C32] hover:text-pink-600 transition-colors text-lg font-medium group"
                        >
                            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Regresar</span>
                        </Link>
                    ) : (
                        // En Principal: mostrar "Perfil"
                        <Link 
                            href="/User/Profile" 
                            className="flex items-center space-x-2 text-[#4A0C32] hover:text-pink-600 transition-colors text-lg font-medium group"
                        >
                            <span>Perfil</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    )}
                </nav>

                {/* Navegación Móvil */}
                <div className="md:hidden">
                    {isProfilePage ? (
                        <Link 
                            href="/user" 
                            className="flex items-center space-x-1 text-[#4A0C32] hover:text-pink-600 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="font-medium">Regresar</span>
                        </Link>
                    ) : (
                        <Link 
                            href="/user/profile" 
                            className="flex items-center space-x-1 text-[#4A0C32] hover:text-pink-600 transition-colors"
                        >
                            <span className="font-medium">Perfil</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}