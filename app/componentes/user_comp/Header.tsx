'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const NAV_ITEMS = [
    {
    label: "Home",
    href: "/User",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: "Perfil",
    href: "/User/Profile",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter(); 

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
    <aside className="w-56 min-h-screen flex flex-col shrink-0 border-r border-[#4A0C32]/20" style={{ background: "#F0CEE3" }}>

      {/* Logo y título */}
      <div className="px-6 py-6 border-b border-[#4A0C32]/20">
        <img
          src="/images/h4h_logos/logo_h4h_corto.svg"
          alt="H4H Logo"
          className="h-40 w-auto mb-2"
        />
        
      </div>

      {/* Navegación vertical */}
      <nav className="flex flex-col flex-1 px-4 py-6 gap-1">
        {NAV_ITEMS.map(({ label, href, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
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
      <div className="px-4 pb-6 border-t border-[#4A0C39]/20 pt-4">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[#4A0C32]  hover:bg-[#4A0C32]/30 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Cerrar sesión</span>
        </button>
      </div>

    </aside>
  );
}