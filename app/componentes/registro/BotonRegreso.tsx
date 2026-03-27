import Link from 'next/link';

const BotonRegreso = () => {
    return (
        <div>
            <Link href="/">
                <button className="bg-[#4F123F] text-white px-4 py-4 rounded-2xl hover:bg-secundario-morado-800 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
            </Link>
        </div>
    )
}

export default BotonRegreso;