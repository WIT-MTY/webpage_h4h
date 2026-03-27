import React from "react";

interface RetoCardProps {
    title: string;
}

const RetoCard: React.FC<RetoCardProps> = ({ title }) => {
    return (
        <div
            className="flex items-center justify-center aspect-square rounded-[min(1vw,1vh,1rem)] w-full h-full"
            style={{
                background: '#FF287173',
                border: 'min(1vw, 1vh, 6px) solid #FF2871'
            }}
        >
            <h3 className="font-big-shoulders text-white text-center px-[min(2vw,0.5rem)] text-[min(4vw,3vh,1.5rem)] leading-tight">
                {title}
            </h3>
        </div>
    );
};

export default RetoCard;
