'use client'

interface FlorProps {
    top_position: string;
    left_position: string;
    width?: string;
}

const Flor = (props: FlorProps) => {
    const widthClass = props.width || "w-100";
    
    return (
        <div className="">
            <img 
                src="/images/figuras/flor.svg" 
                alt="Flor" 
                className={`${widthClass} animate-spin [animation-duration:25s] absolute`} 
                style={{top: props.top_position, left: props.left_position}} 
            />
        </div>
    )
}

export default Flor;