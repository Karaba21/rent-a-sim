import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 relative">
        <a href="#inicio">
          <Image src="/logo.webp" alt="Rent a Sim" width={140} height={40} priority />
        </a>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a
            href="#inicio"
            className="text-xs font-semibold tracking-widest text-brand-red border-b-2 border-brand-red pb-0.5"
          >
            INICIO
          </a>
          <a
            href="#servicios"
            className="text-xs font-semibold tracking-widest text-gray-900 hover:text-brand-red transition-colors"
          >
            SERVICIOS
          </a>
          <a
            href="#nosotros"
            className="text-xs font-semibold tracking-widest text-gray-900 hover:text-brand-red transition-colors"
          >
            QUIENES SOMOS
          </a>
          <a
            href="#reservas"
            className="text-xs font-semibold tracking-widest text-gray-900 hover:text-brand-red transition-colors"
          >
            RESERVA
          </a>
        </div>


      </div>
    </nav>
  );
}
