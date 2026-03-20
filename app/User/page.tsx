'use client';
import { useState } from 'react';

export default function PageUser() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <section className="w-full h-screen max-h-screen overflow-y-auto flex flex-col items-center justify-center relative" style={{ background: "#4A0C32" }}>
            <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
                Vista de usuario
               
            </div>
        </section>
    );
}