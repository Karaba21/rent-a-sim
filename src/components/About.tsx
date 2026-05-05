export default function About() {
  return (
    <section id="nosotros" className="py-10 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground-tertiary mb-4 block">
            Engineered Emotions
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6 text-foreground">
            EXPERTOS EN
            <br />
            <span className="text-brand-red italic">INGENIERÍA</span> DE
            <br />
            EMOCIONES
          </h2>
          <p className="text-foreground-secondary mb-4 leading-relaxed text-sm">
            No solo alquilamos equipos: diseñamos experiencias que quedan grabadas en la memoria de
            cada asistente.
          </p>
          <p className="text-foreground-secondary mb-10 leading-relaxed text-sm">
            Nuestra precisión técnica se une a la pasión por el detalle para transformar cualquier
            espacio en un paddock de alto rendimiento.
          </p>
          <div className="flex gap-12">
            <div>
              <div className="text-3xl font-black text-foreground">150+</div>
              <div className="text-xs tracking-widest text-foreground-tertiary uppercase mt-1">
                Eventos Anuales
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-foreground">15ms</div>
              <div className="text-xs tracking-widest text-foreground-tertiary uppercase mt-1">
                Latencia Zero
              </div>
            </div>
          </div>
        </div>

        {/* Image mosaic */}
        <div className="grid grid-cols-2 gap-3">
          <img src="Imagenes_ia/sim1.webp" alt="Simulador F1" className="aspect-square object-cover w-full" />
          <img src="Imagenes_ia/sim2.webp" alt="Simulador en evento" className="aspect-square object-cover w-full" />
          <img src="Imagenes_ia/sim_vr.webp" alt="Experiencia VR" className="aspect-square object-cover w-full" />
          <img src="Imagenes_ia/vr_kids.webp" alt="VR para eventos" className="aspect-square object-cover w-full" />
        </div>
      </div>
    </section>
  );
}
