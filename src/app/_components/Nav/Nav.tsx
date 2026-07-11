import Link from "next/link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function Nav() {
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Biblioteca", href: "/partituras" },
    { label: "Conciertos", href: "/home" },
    { label: "Comunidad", href: "/hola" },
    { label: "Pricing", href: "/perfil/register" },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-20">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Ir al inicio">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-[#a75b38]/20 bg-white/50 text-5xl font-serif leading-none text-[#8d3f21] shadow-sm">
            C
          </span>
          <span className="font-serif text-2xl font-semibold tracking-tight text-[#201816]">
            Contemporaneo
          </span>
        </Link>

        <div className="hidden items-center gap-9 rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-[#201816] backdrop-blur md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative transition hover:text-[#8d3f21] ${
                index === 0
                  ? "after:absolute after:-bottom-3 after:left-0 after:h-px after:w-full after:bg-[#8d3f21]"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/perfil/login"
          className="inline-flex items-center gap-2 rounded-xl bg-[#8d3f21] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-[#8d3f21]/20 transition hover:bg-[#733217]"
        >
          <PersonOutlineOutlinedIcon fontSize="small" />
          <span className="hidden sm:inline">Iniciar sesion</span>
        </Link>
      </nav>
    </header>
  );
}
