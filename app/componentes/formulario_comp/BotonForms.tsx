import Link from 'next/link';

const BotonForms = () => {
    return (
        <Link href="/registro">
            <button
                type="button"
                className="w-full sm:w-auto text-white font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] py-5 px-8 sm:py-6 sm:px-11 md:py-7 md:px-12 min-h-[3.5rem] sm:min-h-0"
                style={{ backgroundColor: '#4F123F' }}
            >
                ¡Regístrate ahora!
                        
            </button>
        </Link>
    )
}

export default BotonForms;