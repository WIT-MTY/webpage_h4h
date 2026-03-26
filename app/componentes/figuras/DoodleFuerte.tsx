'use client'

interface DoodleFuerteProps {
    top_position: string;
    left_position: string;
    rotation?: string;
    width?: string;
    height?: string;
    opacity?: number;
}

const DoodleFuerte = (props: DoodleFuerteProps) => {
    const rotationValue = props.rotation || "0";
    const opacityValue = props.opacity !== undefined ? props.opacity : 1;

    return (
        <div className="">
            <img
                src="/images/figuras/doodle_fuerte.svg"
                alt="Doodle Fuerte"
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

export default DoodleFuerte;