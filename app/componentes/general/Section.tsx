import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg_color: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  bg_color= ""
}) => {
    
  return (
    <section id={id} className={`w-full h-screen ${className}`} style={{ background: bg_color }}>
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;