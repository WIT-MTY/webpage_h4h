import Header from "../componentes/user_comp/Header";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-stretch" style={{ background: "#F0CEE3" }}>
      <Header />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}