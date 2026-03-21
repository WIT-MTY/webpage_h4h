'use client'

interface SolProps {
    top_position: string;
    left_position: string;
    width?: string;
}

const Sol = (props: SolProps) => {
    const widthClass = props.width || "w-100";
    
    return (
        <div className="">
            <img 
                src="/images/figuras/sol.svg" 
                alt="Sol" 
                className={`${widthClass} animate-spin [animation-duration:25s] absolute`} 
                style={{top: props.top_position, left: props.left_position}} 
            />
        </div>
    )
}

export default Sol;