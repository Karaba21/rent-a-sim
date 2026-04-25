export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white dark:bg-[#111111] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500 mb-4 block">
            Engineered Emotions
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6 dark:text-white">
            EXPERTOS EN
            <br />
            <span className="text-brand-red italic">INGENIERÍA</span> DE
            <br />
            EMOCIONES
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
            No solo alquilamos equipos: diseñamos experiencias que quedan grabadas en la memoria de
            cada asistente.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-sm">
            Nuestra precisión técnica se une a la pasión por el detalle para transformar cualquier
            espacio en un paddock de alto rendimiento.
          </p>
          <div className="flex gap-12">
            <div>
              <div className="text-3xl font-black dark:text-white">150+</div>
              <div className="text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase mt-1">
                Eventos Anuales
              </div>
            </div>
            <div>
              <div className="text-3xl font-black dark:text-white">15ms</div>
              <div className="text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase mt-1">
                Latencia Zero
              </div>
            </div>
          </div>
        </div>

        {/* Image mosaic placeholders */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-red-900 aspect-square" />
          <div className="bg-blue-900 aspect-square" />
          <div className="bg-gray-700 aspect-square" />
          <div className="bg-gray-800 aspect-square" />
        </div>
      </div>
    </section>
  );
}
