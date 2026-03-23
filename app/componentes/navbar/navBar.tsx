"use client";
import React, { useState } from "react";
import Header from "./header";
import AdaGuia from "../general/AdaGuia";
import BadgeMLH from "../general/BadgeMLH";

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
    const [activeSection, setActiveSection] = useState("home");

    return (
    <>
        <Header onSectionChange={setActiveSection} />

        <HomeSection />
        <AcercaSection />
        <QueEsSection />
        <UbicacionSection />
        <CalendarioSection />
        <RetosSection />
        <EquipoSection />
        <PatrocinadorSection />
        <GaleriaSection />
        <FAQSection />
        <ContactanosSection />

        {activeSection !== "home" && (
            <AdaGuia activeSection={activeSection} />
        )}

        {/* Badge de MLH */}
        <BadgeMLH />
    </>
    )
}

export default NavBar;