export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-white dark:bg-brand-dark flex items-center pt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
        <div>
          <span className="inline-block text-brand-red text-xs font-semibold tracking-[0.2em] uppercase border border-brand-red px-3 py-1 mb-6">
            High Performance Entertainment
          </span>
          <h1 className="text-gray-900 dark:text-white text-6xl md:text-7xl font-black uppercase leading-tight">
            TU EVENTO
            <br />
            <span className="text-brand-red italic">NECESITA SU</span>
            <br />
            PIT CREW
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-md leading-relaxed text-sm">
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

        {/* Image placeholder */}
        <div className="bg-gray-100 dark:bg-gray-800 aspect-video w-full" />
      </div>
    </section>
  );
}
