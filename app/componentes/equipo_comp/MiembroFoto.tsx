'use client'

interface MiembroFotoProps {
    foto_m: string;
}

const MiembroFoto = (props: MiembroFotoProps) => {
    return (
        <div className="">
            <img src={props.foto_m} alt={props.foto_m} className="mx-auto grayscale"/>
            
        </div>
    )
}

export default MiembroFoto;