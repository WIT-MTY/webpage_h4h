'use client'

import Image from 'next/image'

interface MiembroFotoProps {
    foto_m: string;
}

const MiembroFoto = (props: MiembroFotoProps) => {
    return (
        <div className="relative w-full aspect-square">
            <Image
                src={props.foto_m}
                alt="Foto del miembro del equipo"
                fill
                sizes="(max-width: 640px) 20vw, (max-width: 768px) 16vw, (max-width: 1024px) 12.5vw, 12.5vw"
                className="mx-auto grayscale object-cover"
                loading="lazy"
            />
        </div>
    )
}

export default MiembroFoto;