import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link href="/" className="text-slate-300 hover:text-slate-100">
          <h3 className="font-bold text-3xl">Basic NextCRUD</h3>
        </Link>
        <ul className="flex gap-x-6 text-lg font-bold">
          <li>
            <Link href="/" className="text-slate-300 hover:text-slate-100">
              Lista de tareas
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-100">
              Crear tarea
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-300 hover:text-slate-100">
              Acerca de
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
