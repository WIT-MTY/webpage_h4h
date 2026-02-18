'use client'

interface EstrellaProps {
    top_position?: string;
    left_position?: string;
}

const Estrella = (props: EstrellaProps) => {
    return (
        <div className="">
            <img src="/images/figuras/estrella.svg" 
            alt="Estrella" 
            className="w-100 animate-spin [animation-duration:25s] absolute" 
            style={{top: props.top_position, left: props.left_position}} />
        </div>
    )
}

export default Estrella;