import Image from "next/image";
import Link from "next/link";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const stats = [
  { icon: <LibraryMusicOutlinedIcon />, value: "+2,000", label: "Obras disponibles" },
  { icon: <MusicNoteOutlinedIcon />, value: "450", label: "Compositores" },
  { icon: <GroupsOutlinedIcon />, value: "12K+", label: "Usuarios activos" },
  { icon: <StarBorderOutlinedIcon />, value: "98%", label: "Satisfaccion" },
];

const features = [
  {
    icon: <AutoStoriesOutlinedIcon />,
    title: "Biblioteca interactiva",
    description: "Partituras con vistas claras, cifrados, arreglos y audios sincronizados.",
    cta: "Explorar biblioteca",
    image: "/imagenPartitura.jpeg",
    href: "/partituras",
  },
  {
    icon: <PlayCircleOutlineOutlinedIcon />,
    title: "Conciertos en vivo",
    description: "Transmisiones, sesiones de estudio y eventos curados para la comunidad.",
    cta: "Ver proximos eventos",
    image: "/tocando_piano.jpeg",
    href: "/home",
  },
  {
    icon: <GroupsOutlinedIcon />,
    title: "Comunidad",
    description: "Comparte avances, comenta arreglos y conecta con musicos y estudiantes.",
    cta: "Ir a la comunidad",
    image: "/tocando_piano.jpeg",
    href: "/hola",
  },
  {
    icon: <BookmarkBorderOutlinedIcon />,
    title: "Guardados y favoritos",
    description: "Organiza tus obras favoritas y continua donde dejaste cada practica.",
    cta: "Ver mis favoritos",
    image: "/imagenPartitura.jpeg",
    href: "/perfil",
  },
];

const trustItems = [
  { icon: <SecurityOutlinedIcon />, title: "Acceso seguro", text: "Protegemos tu informacion y tu biblioteca." },
  { icon: <DevicesOutlinedIcon />, title: "Disponible en todos tus dispositivos", text: "Web, tablet y movil sin perder contexto." },
  { icon: <CloudOutlinedIcon />, title: "Sincroniza tu progreso", text: "Continua desde la ultima obra que revisaste." },
  { icon: <HeadsetMicOutlinedIcon />, title: "Soporte dedicado", text: "Estamos aqui para ayudarte en cada paso." },
];

export default function HomeLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff9f4] text-[#201816]">
      <section className="relative w-screen min-h-[760px] bg-[#f8eee6]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(255,249,244,1)_0%,rgba(255,249,244,1)_42%,rgba(255,249,244,0.18)_60%,rgba(32,24,22,0.28)_80%)]" />
          <div
            className="absolute inset-y-0 right-0 w-[100%] bg-no-repeat"
            style={{
              backgroundImage: "url('/contemporaneo_landing.png')",
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-36 pt-28 lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#f1dfd3] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8d3f21]">
              <span className="h-2 w-2 rounded-full bg-[#a75b38]" />
              Plataforma de musica clasica contemporanea
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              La musica clasica, reinventada para nuestros tiempos
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#3d312d]">
              Explora partituras interactivas, escucha obras maestras y conecta con una comunidad apasionada por crear musica con criterio.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/partituras" className="inline-flex items-center gap-3 rounded-xl bg-[#8d3f21] px-6 py-4 font-bold text-white shadow-xl shadow-[#8d3f21]/20 transition hover:bg-[#733217]">
                <AutoStoriesOutlinedIcon fontSize="small" />
                Explorar biblioteca
              </Link>
              <Link href="/home" className="inline-flex items-center gap-3 rounded-xl border border-[#ead8ca] bg-white/80 px-6 py-4 font-bold text-[#201816] shadow-sm transition hover:border-[#c89278]">
                <LiveTvOutlinedIcon fontSize="small" />
                Ver en vivo
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <div className="flex -space-x-3">
                {["MC", "AR", "LS", "JF", "AM"].map((avatar) => (
                  <span key={avatar} className="grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-[#8d3f21] text-xs font-bold text-white shadow-sm">
                    {avatar}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-6">
                <strong className="block text-base">12K+ usuarios activos</strong>
                en nuestra comunidad
              </p>
              <TrendingUpOutlinedIcon className="rotate-45 text-[#8d3f21]" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-24 max-w-7xl px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-[#ead8ca] bg-white/90 shadow-2xl shadow-[#8d3f21]/10 backdrop-blur md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="flex items-center gap-5 border-[#ead8ca] p-8 md:border-r md:last:border-r-0">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f7ece4] text-[#a14a28]">
                {item.icon}
              </span>
              <div>
                <strong className="block text-3xl">{item.value}</strong>
                <span className="text-sm text-[#5f514c]">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-center font-serif text-4xl leading-tight">
          Descubre todo lo que <span className="text-[#8d3f21]">Contemporaneo</span> ofrece
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-[#ead8ca] bg-white/70 p-6 shadow-sm">
              <div className="flex gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#f7ece4] text-[#a14a28]">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold">{feature.title}</h3>
                  <p className="mt-2 leading-7 text-[#5f514c]">{feature.description}</p>
                  <Link href={feature.href} className="mt-3 inline-flex font-bold text-[#8d3f21] hover:text-[#733217]">
                    {feature.cta} -&gt;
                  </Link>
                </div>
              </div>
              <div className="mt-6 h-40 overflow-hidden rounded-xl bg-[#ead8ca]">
                <Image src={feature.image} alt="" width={640} height={240} className="h-full w-full object-cover" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid items-center rounded-2xl border border-[#ead8ca] bg-white/80 p-8 shadow-sm lg:grid-cols-[1fr_auto_1fr] lg:p-10">
          <blockquote className="font-serif text-3xl leading-tight">
            <span className="mb-3 block text-6xl text-[#a14a28]">&ldquo;</span>
            La tecnica sin emocion es ruido; la emocion sin tecnica, silencio.
            <cite className="mt-5 block font-sans text-base not-italic text-[#5f514c]">- Nota de ensayo</cite>
          </blockquote>
          <div className="my-8 h-px bg-[#ead8ca] lg:mx-12 lg:my-0 lg:h-40 lg:w-px" />
          <div className="flex flex-col items-start gap-5 sm:flex-row">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-[#f7ece4] text-[#201816]">
              <GroupsOutlinedIcon fontSize="large" />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-bold">Unete a Contemporaneo</h3>
              <p className="mt-2 max-w-sm leading-7 text-[#5f514c]">
                Crea tu cuenta gratuita y empieza a explorar la musica clasica como nunca antes.
              </p>
              <Link href="/perfil/register" className="mt-5 inline-flex rounded-xl bg-[#8d3f21] px-7 py-4 font-bold text-white transition hover:bg-[#733217]">
                Crear cuenta gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ead8ca] bg-[#fffaf6]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1fr_2fr] lg:px-10">
          <div className="flex items-center gap-3">
            <span className="font-serif text-5xl text-[#8d3f21]">C</span>
            <div>
              <strong className="block font-serif text-xl">Contemporaneo</strong>
              <span className="text-sm text-[#5f514c]">Â© 2026 Plataforma de musica clasica contemporanea</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#ead8ca] bg-white text-[#a14a28]">
                  {item.icon}
                </span>
                <div>
                  <strong className="text-sm">{item.title}</strong>
                  <p className="mt-1 text-xs leading-5 text-[#5f514c]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}


