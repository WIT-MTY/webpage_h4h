'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const NAV_ITEMS = [
    {
    label: "Estadísticas",
    href: "/Admin",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: "Gestión de Participantes",
    href: "/Admin/Panel",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Gestión de Equipos",
    href: "/Admin/Equipos",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    label: "Gestión de Retos",
    href: "/Admin/Retos",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l-2 5H9l-1 1h8l-1-1h-1l-2-5m0 0V9m0 6a6 6 0 006-6V4H6v5a6 6 0 006 6zM6 4H4v2a4 4 0 002.268 3.634M18 4h2v2a4 4 0 01-2.268 3.634" />
      </svg>
    ),
  },
  {
    label: "Gestión de Asistencia",
    href: "/Admin/Asistencia",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  
];

export default function HeaderAdmin() {
  const pathname = usePathname();
  const router = useRouter(); 
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    try {
        const token = document.cookie
            .split("; ")
            .find(row => row.startsWith("token="))
            ?.split("=")[1];

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    } finally {
        document.cookie = "token=; path=/; max-age=0";
        router.push("/registro/iniciosesion");
    }
};

  return (
    <>
      {/* Botón hamburguesa: solo en pantallas de móvil y tablets ── */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#F0CEE3] border border-[#4A0C32]/20 text-[#4A0C32] shadow"
        aria-label="Abrir menú"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="md:static md:translate-x-0 md:h-full md:self-stretch md:shrink-0"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        style={{ background: "#F0CEE3" }}
        className={`
          fixed top-0 left-0 z-50 h-full w-56 flex flex-col
          border-r border-[#4A0C32]/20
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:h-auto md:self-stretch md:shrink-0
        `}
      >
        {/* Botón cerrar sesión en móvil */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden self-end m-4 p-1 text-[#4A0C32]"
          aria-label="Cerrar menú"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        <div className="px-6 py-6 border-b border-[#4A0C32]/20">
          <img
            src="/images/h4h_logos/logo_h4h_corto.svg"
            alt="H4H Logo"
            className="h-40 w-auto"
          />
          <p className="text-[#4A0C32] font-bold">Admin</p>
        </div>

        {/* Navegación */}
        <nav className="flex flex-col flex-1 px-4 py-6 gap-1">
          {NAV_ITEMS.map(({ label, href, icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive
                    ? "bg-[#4A0C32] text-white"
                    : "text-[#4A0C32] hover:bg-[#4A0C32]/10"
                  }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Cerrar sesión */}
        <div className="px-4 pb-6 border-t border-[#4A0C32]/20 pt-4">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[#4A0C32] hover:bg-[#4A0C32]/30 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>
    </>
  );
}