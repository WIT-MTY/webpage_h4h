import Link from "next/link";
import React, {ReactNode} from "react";

interface LogoProps {
    image_logo?: string;
    w_logo?: string;
}

const Logo: React.FC<LogoProps> = ({
    image_logo="/images/h4h_logos/logo_h4h_corto.svg",
    w_logo="w-20",
}) => {
    return (
        <Link href="https://witmty.com/">
            <img src={image_logo} alt="Logo" className="w-18 cursor-pointer" />
        </Link>
    );
};

export default Logo;