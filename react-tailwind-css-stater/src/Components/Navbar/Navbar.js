import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="bg-zinc-50 nav drop-shadow-100 w-full flex flex-row fixed p-4 top-0 left-0 right-0 z-10">
      <h1 className="text-gray-900 text-semibold text-md logo">
        Inventory Board
      </h1>
    </nav>
  );
}
