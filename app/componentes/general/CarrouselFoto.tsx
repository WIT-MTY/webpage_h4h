'use client'

import Image from 'next/image'
import { useRef } from 'react'

const CarrouselFoto = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="w-full relative" style={{backgroundColor:"#390A27"}}>
            {/* Indicador de scroll - Círculo con flecha */}
            <div className="absolute top-1/2 -translate-y-1/2 right-6 z-10">
                <div
                    onClick={handleScrollRight}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            </div>

            {/* Gradiente derecho para indicar más contenido */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#390A27] to-transparent pointer-events-none z-[5]"></div>

            <div ref={scrollContainerRef} className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_1.png" alt="Foto 1" width={600} height={400} className="h-full w-auto object-contain" priority />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_2.png" alt="Foto 2" width={600} height={400} className="h-full w-auto object-contain" priority />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_3.png" alt="Foto 3" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_4.png" alt="Foto 4" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_5.png" alt="Foto 5" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_6.png" alt="Foto 6" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_7.png" alt="Foto 7" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_8.png" alt="Foto 8" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_9.png" alt="Foto 9" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_10.png" alt="Foto 10" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_11.png" alt="Foto 11" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_12.png" alt="Foto 12" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_13.png" alt="Foto 13" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                <div className="relative h-80 sm:h-60 md:h-100 lg:h-96 xl:h-100 w-auto flex-shrink-0">
                    <Image src="/images/galeria_images/carrousel_14.png" alt="Foto 14" width={600} height={400} className="h-full w-auto object-contain" loading="lazy" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default CarrouselFoto;