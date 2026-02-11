import Link from "next/link";
import React, {ReactNode} from "react";

interface AdaGuiaProps {
    w_ada?: string;
}

const AdaGuia: React.FC<AdaGuiaProps> = ({
    w_ada="w-100",
}) => {
    return (
        <img src="/images/figuras/mascota_guia.svg" alt="Ada Guia" className={`${w_ada} cursor-pointer`} />
    );
};

export default AdaGuia;