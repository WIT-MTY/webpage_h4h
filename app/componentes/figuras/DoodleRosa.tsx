'use client'

interface DoodleRosaProps {
    top_position: string;
    left_position: string;
    rotation?: string;
    width?: string;
}

const DoodleRosa = (props: DoodleRosaProps) => {
    const widthClass = props.width || "w-100";
    const rotationValue = props.rotation || "0";
    
    return (
        <div className="">
            <img 
                src="/images/figuras/doodle_rosa.svg" 
                alt="Doodle Rosa" 
                className={`${widthClass} float absolute`} 
                style={{top: props.top_position, left: props.left_position, rotate: `${rotationValue}deg`, animation: ''}} 
            /> 
        </div>
    )
}

export default DoodleRosa;