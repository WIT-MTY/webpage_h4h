import React from 'react';
import HeaderUser from '@/app/componentes/user_comp/HeaderUser';

export default function UserProfile() {
  return (
    <div className="" style={{ background: "#F0CEE3" }}>
            <HeaderUser />
            <main className="max-w-7xl mx-auto py-6 px-4">
                <h1 className="font-high-cruiser text-3xl text-[#4A0C32] mb-4">Mi Perfil</h1>
                <p>Información de usuario</p>

                <h1>Nombre</h1>
            </main>
        </div>
  );
}