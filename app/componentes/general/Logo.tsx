import Link from "next/link";
import React, {ReactNode} from "react";

interface LogoProps {
    image_logo: string;
}

const Logo: React.FC<LogoProps> = ({
    image_logo,
}) => {
    return (
        <Link href="https://witmty.com/">
            <img src={image_logo} alt="Logo" className="w-20 cursor-pointer" />
        </Link>
    );
};

export default Logo;