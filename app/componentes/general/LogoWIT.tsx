import Link from "next/link";
import React, {ReactNode} from "react";

interface LogoWITProps {
    image_logo?: string;
    w_logo?: string;
}

const LogoWIT: React.FC<LogoWITProps> = ({
    image_logo="/images/wit_logos/logo_wit.png",
    w_logo="w-20"
}) => {
    return (
        <Link href="https://witmty.com/">
            <img src={image_logo} alt="Logo" className={`${w_logo} cursor-pointer`}/>
        </Link>
    );
};

export default LogoWIT;