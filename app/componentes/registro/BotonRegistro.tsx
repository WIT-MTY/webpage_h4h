import Link from 'next/link';
import Section from '../general/Section';

const BotonRegistro = () => {
    return (
        <div>
            <Link href="/formulario">
                <button className="bg-[#4F123F] text-white px-4 py-4 rounded-2xl hover:bg-secundario-morado-800 transition-colors duration-300">
                    ¡Regístrate ahora!
                </button>
            </Link>
        </div>
    )
}

export default BotonRegistro;