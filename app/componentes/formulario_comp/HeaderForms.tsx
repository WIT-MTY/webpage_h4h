'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BotonSesion from './BotonSesion';
import BotonForms from './BotonForms';

export default function HeaderForms() {
    const pathname = usePathname();
    const isSesionPage = pathname === '/registro/iniciosesion';
    const isFormsPage = pathname === '/registro';
    
    return (
        <header className="w-full  shadow-md py-4 px-6">

            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6">
                
                <img src={"/images/h4h_logos/logo_h4h_blanco.svg"} className='w-200 md:w-150'></img>

                <p className="text-center md:text-xl text-white/90 leading-relaxed max-w-7xl mx-auto">
                    Hack4Her, una iniciativa por parte de WIT, es el primer hackathon nacional para 
                    <span className="font-extrabold text-pink-400"> MUJERES UNIVERSITARIAS</span> 
                    . Un espacio donde la tecnología, la creatividad y el liderazgo se unen para impulsar el talento femenino, conectar ideas y abrir puertas al crecimiento profesional.
                </p>

                <h2 className="text-4xl md:text-6xl font-semibold text-purple-200 text-center">
                    Registro
                </h2>
                <div className="w-24 h-1 bg-purple-300 rounded-full mx-auto">
                    {/* Línea decorativa */}
                </div>

                <nav className="hidden md:flex items-center">
                {isSesionPage ? (
                <Link 
                    href="/registro" 
                    className="flex items-center space-x-2 text-[#bd699c] underline hover:text-pink-600 transition-colors text-lg font-medium group"
                >
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Registrarme</span>
                </Link>
                ) : (
                <Link 
                    href="/registro/iniciosesion" 
                    className="flex items-center space-x-2 text-[#bd699c] underline hover:text-pink-600 transition-colors text-lg font-medium group"
                >
                    <span>Ya me registré</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
                )}
            </nav>
</div>

            
        </header>
    );
}