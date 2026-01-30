import React from "react";
import Section from "../componentes/general/Section";

const AcercaSection = () => {
    return (
      <Section id="acerca" backgroundColor="bg-secundario-rosa-claro-300" className="h-full flex flex-col items-center justify-center">
        <p className="text-secundario-morado text-2xl">Sección 1</p>
        <h2 className="font-questrial text-4xl font-bold text-principal-rosa">Acerca de</h2>
        <h1 className="font-high-cruiser text-6xl text-neutro-negro">ACERCA DE NOSOTRAS</h1>
        <p className="text-secundario-morado text-2xl">
          Somos un hackathon gratuito de 24 horas, organizado por y para mujeres estudiantes que te invita a proponer soluciones innovadoras a desafíos reales, participar en talleres dinámicos, y conectar con una comunidad diversa de profesionales de la industria, y compañeras. 
          Nuestro propósito es crear un espacio seguro e inclusivo donde mujeres en tech puedan aprender, experimentar, y mostrar su talento, impulsando su confianza, creatividad y liderazgo dentro del ecosistema tecnológico.
          Estamos comprometidas a fomentar una comunidad que inspire la participación activa, el intercambio de ideas y el desarrollo de soluciones, promoviendo la equidad y la representación femenina en la industria tecnológica.</p>
      </Section>
    )
}

export default AcercaSection;