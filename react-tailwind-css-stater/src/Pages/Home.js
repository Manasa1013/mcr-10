import { Navbar, SideNav } from "../Components";

export function Home() {
  return (
    <div className="bg-gray-100 grid-container">
      <Navbar />
      <aside className="aside z-2">
        <SideNav />
      </aside>
      <main className="main"></main>
    </div>
  );
}
