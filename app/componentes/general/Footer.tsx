'use client'
import { FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";
import LogoWIT from "./LogoWIT";

const Footer = () => {

    return (
        <div className="w-full border-t flex space-x-40 flex-row items-center justify-center py-10 text-4xl gap-3">
            
            
            {/* Redes de H4H */}
            <div className="flex space-x-2 items-center">
                <Logo image_logo="/images/h4h_logos/logo_h4h_corto_negro.svg" w_logo="w-20"/>
                <a href="https://www.tiktok.com/@hack4her.mty" target="_blank">
                    <FaTiktok className="text-neutro-negro"/>
                </a>
                <a href="https://www.instagram.com/hack4her.mty/" target="_blank">
                    <FaInstagram className="text-neutro-negro"/>
                </a>
            </div>

            {/* Redes de WIT */}
            <div className="flex space-x-2 items-center">
                <LogoWIT image_logo="/images/wit_logos/logo_wit_negro.png"/>
                <a href="https://www.linkedin.com/company/82364150/" target="_blank">
                    <FaLinkedin className="text-neutro-negro"/>
                </a>
                <a href="https://www.tiktok.com/@wit.mty?_t=ZM-8uBmSi130hZ&_r=1" target="_blank">
                    <FaTiktok className="text-neutro-negro"/>
                </a>
                <a href="https://instagram.com/wit.mty?igshid=YmMyMTA2M2Y=" target="_blank">
                    <FaInstagram className="text-neutro-negro"/>
                </a>
             </div>

            
        </div>
    )
}

export default Footer;