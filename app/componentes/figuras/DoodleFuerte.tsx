'use client'

interface DoodleFuerteProps {
    top_position: string;
    left_position: string;
    rotation?: string;
    width?: string;
}

const DoodleFuerte = (props: DoodleFuerteProps) => {
    const widthClass = props.width || "w-100";
    const rotationValue = props.rotation || "0";
    
    return (
        <div className="">
            <img 
                src="/images/figuras/doodle_fuerte.svg" 
                alt="Doodle Fuerte" 
                className={`${widthClass} float absolute`} 
                style={{top: props.top_position, left: props.left_position, rotate: `${rotationValue}deg`, animation: 'floatVertical 3s ease-in-out infinite'}} 
            /> 
        </div>
    )
}

export default DoodleFuerte;