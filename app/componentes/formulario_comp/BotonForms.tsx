import Link from 'next/link';

const BotonForms = () => {
    return (
        <Link href="/registro" className="w-full sm:w-auto">
            <button
                type="button"
                className="w-full sm:w-[240px] md:w-[260px] text-white font-montserrat text-base sm:text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] py-2.5 px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 min-h-[2.75rem] sm:min-h-0 border-[3px]"
                style={{ backgroundColor: '#4F123F', borderColor: '#4F123F' }}
            >
                ¡Regístrate ahora!

            </button>
        </Link>
    )
}

export default BotonForms;