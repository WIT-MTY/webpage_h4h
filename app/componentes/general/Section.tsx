import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg_color: string;
  overflow?: string;
  verticalAlign?: string;
  noPadding?: boolean;
  /** Al menos una pantalla de alto; la sección puede crecer y el documento hace scroll (p. ej. inicio con mucho contenido). */
  minHeightViewport?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  bg_color= "",
  overflow = "overflow-y-auto",
  verticalAlign = "justify-center",
  noPadding = false,
  minHeightViewport = false,
}) => {

  const heightClass = minHeightViewport ? "min-h-screen" : "h-screen max-h-screen";

  return (
    <section id={id} className={`w-full ${heightClass} ${overflow} ${className}`.trim()} style={{ background: bg_color }}>

      <div className={`w-full h-full flex items-center ${verticalAlign} ${noPadding ? '' : 'px-4 sm:px-2 lg:px-2'} relative`}>
        <div className={`w-full ${noPadding ? '' : 'max-w-7xl mx-auto'}`}>
          {children}
        </div>
      </div>

    </section>
  );
};

export default Section;