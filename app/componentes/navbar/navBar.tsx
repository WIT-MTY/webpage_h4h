import React from "react";
import Header from "./header";
import AcercaSection from "../../pages/acercaSection";
import DesafiosSection from "@/app/pages/desafiosSection";
import CalendarioSection from "@/app/pages/calendarioSection";
import ColaboradoresSection from "@/app/pages/colaboradoresSection";
import FAQSection from "@/app/pages/faqSection";
import EquipoSection from "@/app/pages/equipoSection";
import ContactanosSection from "@/app/pages/contactanosSection";

const NavBar = () => {
    return (
    <>
        <Header />
        <AcercaSection />
        <DesafiosSection />
        <CalendarioSection />
        <ColaboradoresSection />
        <FAQSection />
        <EquipoSection />
        <ContactanosSection />
    </>
    )
}

export default NavBar;