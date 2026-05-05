export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-background flex items-center pt-16 transition-colors duration-300 pb-0">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-10">
        <div>
          <span className="inline-block text-brand-red text-xs font-semibold tracking-[0.2em] uppercase border border-brand-red px-3 py-1 mb-6">
            High Performance Entertainment
          </span>
          <h1 className="text-foreground text-6xl md:text-7xl font-black uppercase leading-tight">
            TU EVENTO
            <br />
            <span className="text-brand-red italic">NECESITA SU</span>
            <br />
            PIT CREW
          </h1>
          <p className="text-foreground-secondary mt-6 max-w-md leading-relaxed text-sm">
            Llevamos la adrenalina de la F1 a tu evento corporativo o social.
            Simuladores profesionales, realidad virtual y cabinas de fotos de alta gama.
          </p>
          <a
            href="#reservas"
            className="inline-block mt-8 bg-brand-red text-white font-bold tracking-widest uppercase px-8 py-4 hover:bg-red-800 transition-colors text-sm"
          >
            RESERVAR AHORA
          </a>
        </div>

        {/* Image */}
        <img
          src="/Imagenes_ia/sim1.webp"
          alt="Simulador"
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
