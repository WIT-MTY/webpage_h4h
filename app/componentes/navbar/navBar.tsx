import React from "react";
import Header from "./header";
import AcercaSection from "../../pages/acercaSection";
import UbicacionSection from "@/app/pages/ubicacionSection";
import CalendarioSection from "@/app/pages/calendarioSection";
import ColaboradoresSection from "@/app/pages/colaboradoresSection";
import FAQSection from "@/app/pages/faqSection";
import EquipoSection from "@/app/pages/equipoSection";
import ContactanosSection from "@/app/pages/contactanosSection";
import HomeSection from "@/app/pages/homeSection";
import GanadorasSection from "@/app/pages/ganadorasSection";

const NavBar = () => {
    return (
    <>
        <Header />
        

        {/* Badge de MLH */}
        {/*
        <a id="mlh-trust-badge" 
            className="fixed top-0 left-[170px] md:right-[220px] max-w-[100px] min-w-[60px] w-[10%] z-50"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" 
            target="_blank">
            <img 
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" 
            alt="Major League Hacking 2025 Hackathon Season" 
            style={{width:"100%"}} />
        </a>
        */}
        <HomeSection />
        <AcercaSection />
        <ColaboradoresSection /> {/* Patrocinador*/}
        <GanadorasSection />
        <UbicacionSection />
        <CalendarioSection />
        <FAQSection />
        <EquipoSection />
        <ContactanosSection />

    </>
    )
}

export default NavBar;