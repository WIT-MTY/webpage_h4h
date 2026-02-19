'use client'

interface MiembroCardProps {
    foto_m: string;
    nombre_m: string;
    puesto_m: string;
    area_m: string;
    contacto_m?: {
        correo_m: string;
        linkedin_m: string;
    }
}

const MiembroCard = (props: MiembroCardProps) => {
    return (
        <div className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl rounded-2xl flex flex-col md:flex-row items-center mx-auto" style={{background: "#815776"}}>

            {/* Lado izquierdo */}
            <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col items-center">

                <div className="w-full">
                    <img 
                    src={props.foto_m}
                    alt={props.nombre_m}
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover rounded-full mx-auto mb-2" 
                    />
        
                    <h1 className="font-high-cruiser text-white text-center font-bold text-xl sm:text-2xl">Contacto</h1>
                    <p className="text-white text-center text-xs sm:text-sm md:text-base">LinkedIn: {props.contacto_m?.linkedin_m}</p>
                    <p className="text-white text-center text-xs sm:text-sm md:text-base">Correo: {props.contacto_m?.correo_m}</p>
                </div>
            </div>

            {/* Lado derecho */}
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center space-y-2 md:space-y-3 lg:space-y-4">
                <div className="p-2 md:p-3 lg:p-4 rounded-2xl" style={{background: "#4F123F"}}>
                    <h1 className="font-high-cruiser text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{props.nombre_m}</h1>
                </div>

                <div className="p-2 md:p-3 lg:p-4 rounded-2xl" style={{background: "#4F123F"}}>
                    <h1 className="font-high-cruiser text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{props.area_m}</h1>
                </div>

                <div className="p-2 md:p-3 lg:p-4 rounded-2xl" style={{background: "#4F123F"}}>
                    <h1 className="font-high-cruiser text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{props.puesto_m}</h1>
                </div>
            </div>
    
        </div>
    )
}

export default MiembroCard;