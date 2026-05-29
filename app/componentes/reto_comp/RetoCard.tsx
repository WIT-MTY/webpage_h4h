import React from "react";

interface RetoCardProps {
    title: string;
    description: string;
}

const RetoCard: React.FC<RetoCardProps> = ({ title, description }) => {
    return (
        <div
            className="flex flex-col items-center justify-center aspect-square w-full h-full p-4 sm:p-6 rounded-xl border-4 md:border-6 lg:border-8"
            style={{
                background: '#FF287173',
                border: 'min(1vw, 1vh, 6px) solid #FF2871'
            }}
        >
            <h3 className="text-white text-center font-bold leading-tight text-[clamp(0.4rem,3vw,1.4rem)]">
                {title}
            </h3>

            <div className="w-12 md:w-16 h-px bg-white/60 my-2 md:my-3 rounded"></div>

            <p className="font-light text-white text-center leading-normal max-w-[85%] text-[clamp(0.7rem,0.8vw,1.1rem)]">
                {description}
            </p>
        </div>
    );
};

export default RetoCard;
