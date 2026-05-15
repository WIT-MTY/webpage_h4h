'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BotonSesion from './BotonSesion';
import BotonForms from './BotonForms';
import BotonRegreso from '../registro/BotonRegreso';

export default function HeaderForms() {
    const pathname = usePathname();
    const isSesionPage = pathname === '/registro/iniciosesion';
    const isFormsPage = pathname === '/registro';

    return (
        <>
        {/* Mini Navbar con logos */}
        <div className="w-full bg-white shadow-md py-4 md:py-4 px-3 md:px-6">
            {/* Diseño móvil: flex con distribución balanceada */}
            <div className="md:hidden max-w-7xl mx-auto flex items-center justify-between gap-2">
                {/* Logo WIT */}
                <div className="flex items-center justify-start flex-shrink-0">
                    <img src="/images/wit_logos/logo_wit_morado.png" alt="Logo WIT" className="h-10 sm:h-12 w-auto object-contain" />
                </div>

                {/* Logo Hack4Her - centro con flex-grow para ocupar espacio disponible */}
                <div className="flex items-center justify-center flex-grow">
                    <img src="/images/h4h_logos/hack4herlogoinicio:registro.png" alt="Logo Hack4Her" className="h-11 sm:h-13 w-auto max-w-full object-contain" />
                </div>

                {/* Logo ARCA Digital Nest - más pequeño */}
                <div className="flex items-center justify-end flex-shrink-0">
                    <img src="/images/colaborador_images/AC_100aniv_Digital_Nest_logo.png" alt="Logo ARCA Digital Nest" className="h-8 sm:h-9 w-auto object-contain" />
                </div>
            </div>

            {/* Diseño desktop: posicionamiento absoluto */}
            <div className="hidden md:flex max-w-7xl mx-auto items-center justify-center relative">
                {/* Logo WIT - izquierda */}
                <div className="absolute left-0 flex items-center">
                    <img src="/images/wit_logos/logo_wit_morado.png" alt="Logo WIT" className="h-14 lg:h-20 w-auto" />
                </div>

                {/* Logo Hack4Her - centro */}
                <div className="flex items-center justify-center">
                    <img src="/images/h4h_logos/hack4herlogoinicio:registro.png" alt="Logo Hack4Her" className="h-12 lg:h-20 w-auto" />
                </div>

                {/* Logo ARCA Digital Nest - derecha */}
                <div className="absolute right-0 flex items-center">
                    <img src="/images/colaborador_images/AC_100aniv_Digital_Nest_logo.png" alt="Logo ARCA Digital Nest" className="h-14 lg:h-16 w-auto" />
                </div>
            </div>
        </div>

        {/* Header principal con información */}
        <header className="w-full shadow-md py-4 px-6 relative">
            <div className=''>
                <div className='absolute left-6 top-[400px] md:top-[480px] z-10'>
                <BotonRegreso />
                </div>
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-3 pt-10 md:pt-16"> 

                <p className="text-center md:text-xl text-white/90 leading-relaxed max-w-7xl mx-auto">
                    Hack4Her es una iniciativa de <span className="font-extrabold text-pink-400">WIT</span> en colaboración con <span className="font-extrabold text-pink-400">Arca Continental</span>. En su segunda edición, reúne tecnología, creatividad y liderazgo para impulsar el talento universitario, conectar ideas y generar oportunidades de crecimiento profesional.
                </p>

                <p className="text-center md:text-xl text-white/90 leading-relaxed max-w-7xl mx-auto mb-6">
                    Sé parte de esta experiencia y lleva tus ideas al siguiente nivel.
                </p>

                <h2 className="text-3xl md:text-4xl font-high-cruiser text-white text-center mt-12">
                    {isSesionPage ? 'INICIAR SESIÓN' : 'REGISTRO'}
                </h2>
                <div className={`h-1 bg-pink-400 rounded-full mx-auto mt-2 ${isSesionPage ? 'w-64 md:w-80' : 'w-48 md:w-56'}`}>
                    {/* Línea decorativa */}
                </div>

                <nav className="flex items-center">
                {isSesionPage ? (
                <Link 
                    href="/registro" 
                    className="flex items-center space-x-2 text-[#bd699c] underline hover:text-pink-600 transition-colors text-lg font-medium group"
                >
                    
                    <span>Registrarme</span>
                </Link>
                ) : (
                <Link 
                    href="/registro/iniciosesion" 
                    className="flex items-center space-x-2 text-[#bd699c] underline hover:text-pink-600 transition-colors text-lg font-medium group"
                >
                    <span>Ya me registré</span>
                    
                </Link>
                )}
                </nav>
                </div>

           </div>
        </header>
        </>
    );
}