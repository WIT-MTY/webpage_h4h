'use client'

interface SolProps {
    top_position: string;
    left_position: string;
    width?: string;
    height?: string;
    rotation?: string;
    opacity?: number;
}

const Sol = (props: SolProps) => {
    const rotationValue = props.rotation || "0";
    const opacityValue = props.opacity !== undefined ? props.opacity : 1;

    return (
        <div className="">
            <img
                src="/images/figuras/sol.svg"
                alt="Sol"
                className="animate-spin [animation-duration:25s] absolute"
                style={{
                    top: props.top_position,
                    left: props.left_position,
                    width: props.width,
                    height: props.height,
                    rotate: `${rotationValue}deg`,
                    opacity: opacityValue
                }}
            />
        </div>
    )
}

export default Sol;