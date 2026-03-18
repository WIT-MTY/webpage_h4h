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
    <section id={id} className={`w-full h-screen max-h-screen overflow-y-auto${className}`} style={{ background: bg_color }}>

      <div className="w-full h-full flex items-center justify-center px-4 sm:px-2 lg:px-2 relative">
        <div className="w-full max-w-7xl mx-auto">
          {children}
        </div>
      </div>

    </section>
  );
};

export default Section;