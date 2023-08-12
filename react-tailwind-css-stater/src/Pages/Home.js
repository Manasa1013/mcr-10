import { DashboardCards, Navbar, SideNav } from "../Components";
import { useProduct } from "../Contexts/ProductContext";

export function Home() {
  const { state } = useProduct();

  return (
    <div className="bg-gray-100 grid-container">
      <Navbar />
      <aside className="aside z-2">
        <SideNav />
      </aside>
      <main className="main w-100 h-full">
        <DashboardCards state={state} />
      </main>
    </div>
  );
}
