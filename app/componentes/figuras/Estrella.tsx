'use client'

interface EstrellaProps {
    top_position: string;
    left_position: string;
    width?: string;
}

const Estrella = (props: EstrellaProps) => {
    const widthClass = props.width || "w-100";
    
    return (
        <div className="">
            <img 
                src="/images/figuras/estrella.svg" 
                alt="Estrella" 
                className={`${widthClass} animate-spin [animation-duration:25s] absolute`} 
                style={{top: props.top_position, left: props.left_position}} 
            />
        </div>
    )
}

export default Estrella;