'use client';
import React from "react";

interface MemberData {
  imageMember: string;
  nameMember: string;
  rolMmeber: string;
}

interface MemberCardProps {
  memberData: MemberData;
}

const MemberCard: React.FC<MemberCardProps> = ({ memberData }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-full max-w-xs mx-auto">
      <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
       
       <img 
            src={memberData.imageMember} 
            alt={memberData.nameMember}
            className="w-full h-full object-cover"
        />
       
      </div>
      
      <div className="text-center">
        <h3 className="font-semibold text-gray-800 text-lg">{memberData.nameMember}</h3>
        <p className="text-[#FF69B4] font-medium mt-1">{memberData.rolMmeber}</p>
      </div>
      
    </div>
  );
};

export default MemberCard;