import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  backgroundColor?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  backgroundColor = "bg-gray-100",
  children,
  className = "",
}) => {
    
  return (
    <section id={id} className={`w-full h-screen ${backgroundColor} ${className}`}>
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;