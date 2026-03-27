'use client'

interface DoodleRosaInicioProps {
    top_position: string;
    left_position: string;
    rotation?: string;
    width?: string;
    height?: string;
    opacity?: number;
}

const DoodleRosaInicio = (props: DoodleRosaInicioProps) => {
    const rotationValue = props.rotation || "0";
    const opacityValue = props.opacity !== undefined ? props.opacity : 1;

    return (
        <div className="">
            <img
                src="/images/figuras/doodle_rosa_inicio.svg"
                alt="Doodle Rosa Inicio"
                className="float absolute"
                style={{
                    top: props.top_position,
                    left: props.left_position,
                    width: props.width,
                    height: props.height,
                    rotate: `${rotationValue}deg`,
                    opacity: opacityValue,
                    animation: 'floatVertical 3s ease-in-out infinite'
                }}
            />
        </div>
    )
}

export default DoodleRosaInicio;