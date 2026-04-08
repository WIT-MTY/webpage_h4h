import HeaderAdmin from '../componentes/admin_comp/HeaderAdmin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-stretch" style={{ background: "#F0CEE3" }}>
      <HeaderAdmin />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}