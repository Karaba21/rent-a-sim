export default function Reservas() {
  return (
    <section id="reservas" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white p-10 md:p-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight">
              SOLICITA TU{" "}
              <span className="text-brand-red italic">COTIZACIÓN</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Configura tu experiencia a medida. Respuesta en menos de 24 horas.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="Escribe tu nombre"
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-red"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                Email Corporativo
              </label>
              <input
                type="email"
                placeholder="email@empresa.com"
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-red"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                Tipo de Evento
              </label>
              <select className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-brand-red bg-white">
                <option>Corporativo / Team Building</option>
                <option>Social / Fiesta</option>
                <option>Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                Fecha Estimada
              </label>
              <input
                type="date"
                className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-brand-red"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                Mensaje / Requisitos Especiales
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos más sobre tu visión..."
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-red resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-brand-red text-white font-bold tracking-widest uppercase py-4 hover:bg-red-800 transition-colors text-sm"
              >
                ENVIAR SOLICITUD
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
