'use client'

interface DoodleRosaInicioProps {
    top_position: string;
    left_position: string;
    rotation?: string;
    width?: string;
}

const DoodleRosaInicio = (props: DoodleRosaInicioProps) => {
    const widthClass = props.width || "w-100";
    const rotationValue = props.rotation || "0";
    
    return (
        <div className="">
            <img 
                src="/images/figuras/doodle_rosa_inicio.svg" 
                alt="Doodle Rosa Inicio" 
                className={`${widthClass} float absolute`} 
                style={{top: props.top_position, left: props.left_position, rotate: `${rotationValue}deg`, animation: 'floatVertical 3s ease-in-out infinite'}} 
            /> 
        </div>
    )
}

export default DoodleRosaInicio;