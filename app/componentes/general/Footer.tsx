'use client'
import { FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {

    return (
        <div className="w-full border-t flex flex-row items-center justify-center py-10 text-3xl gap-3">

            <Logo image_logo="/images/wit_logos/logo_wit_negro.png"/>

            <a href="https://www.linkedin.com/company/82364150/" target="_blank">
                <FaLinkedin className="text-neutro-negro"/>
            </a>
            <a href="https://www.tiktok.com/@wit.mty?_t=ZM-8uBmSi130hZ&_r=1" target="_blank">
                <FaTiktok className="text-neutro-negro"/>
            </a>
            <a href="https://instagram.com/wit.mty?igshid=YmMyMTA2M2Y=" target="_blank">
                <FaInstagram className="text-neutro-negro"/>
            </a>

            <p className="text-2xl text-principal-morado-700 font-bold">H4H</p>
            <a href="https://www.tiktok.com/@hack4her.mty" target="_blank">
                <FaTiktok className="text-neutro-negro"/>
            </a>
            <a href="https://www.instagram.com/hack4her.mty/" target="_blank">
                <FaInstagram className="text-neutro-negro"/>
            </a>

        </div>
    )
}

export default Footer;