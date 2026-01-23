import React from "react";
import Header from "./header";
import AcercaSection from "../../pages/acercaSection";
import HallOfFameSection from "@/app/pages/halloffameSection";
import CalendarioSection from "@/app/pages/calendarioSection";
import FAQSection from "@/app/pages/faqSection";
import EquipoSection from "@/app/pages/equipoSection";
import ContactanosSection from "@/app/pages/contactanosSection";
import PatrocinadorSection from "@/app/pages/patrocinadorSection";

const NavBar = () => {
    return (
    <>
        <Header />
        <AcercaSection />
        <HallOfFameSection />
        <CalendarioSection />
        <PatrocinadorSection />
        <FAQSection />
        <EquipoSection />
        <ContactanosSection />

        {/* Badge de MLH */}
        <a id="mlh-trust-badge"
            className="fixed top-0 right-6 max-w-[100px] min-w-[60px] w-[10%] z-50"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" 
            target="_blank">
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" 
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