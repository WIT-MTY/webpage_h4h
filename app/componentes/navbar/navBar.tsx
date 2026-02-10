import React from "react";
import Header from "./header";

{/*Secciones de la pagina*/}
{/* -- 1 -- */}
import HomeSection from "@/app/pages/homeSection";
{/* -- 2 -- */}
import AcercaSection from "../../pages/acercaSection";
{/* -- 3 -- */}
import QueEsSection from "@/app/pages/queesSection";
{/* -- 4 -- */}
import UbicacionSection from "@/app/pages/ubicacionSection";
{/* -- 5 -- */}
import CalendarioSection from "@/app/pages/calendarioSection";
{/* -- 6 -- */}
import RetosSection from "@/app/pages/retosSection";
{/* -- 7 -- */}
import EquipoSection from "@/app/pages/equipoSection";
{/* -- 8 -- */}
import PatrocinadorSection from "@/app/pages/patrocinadorSection";
{/* -- 9 -- */}
import GaleriaSection from "@/app/pages/galeriaSection";
{/* -- 10 -- */}
import FAQSection from "@/app/pages/faqSection";
{/* -- 11 -- */}
import ContactanosSection from "@/app/pages/contactanosSection";


const NavBar = () => {
    return (
    <>
        <Header />

        <HomeSection />
        <AcercaSection />
        <QueEsSection />
        <UbicacionSection />
        <CalendarioSection />
        <RetosSection />
        <EquipoSection />
        <PatrocinadorSection /> {/* colaborador */}
        <GaleriaSection />
        <FAQSection />
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
    </>
    )
}

export default NavBar;