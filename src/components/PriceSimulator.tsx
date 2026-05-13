"use client";

import { useState, useMemo } from "react";

const SERVICES = [
  { id: "sim", label: "Simuladores de Carreras", unitLabel: "simulador", pricePerHour: 15000 },
  { id: "vr", label: "Realidad Virtual", unitLabel: "estación", pricePerHour: 8000 },
  { id: "foto", label: "Cabina de Fotos", unitLabel: "cabina", pricePerHour: 5000 },
];

const HOURS_OPTIONS = [1, 2, 3, 4, 6, 8];

type Selections = Record<string, { active: boolean; units: number }>;

const initialSelections: Selections = Object.fromEntries(
  SERVICES.map((s) => [s.id, { active: false, units: 1 }])
);

export default function PriceSimulator() {
  const [selections, setSelections] = useState<Selections>(initialSelections);
  const [hours, setHours] = useState(2);

  const activeServices = SERVICES.filter((s) => selections[s.id].active);

  const total = activeServices.reduce((acc, s) => {
    return acc + selections[s.id].units * s.pricePerHour * hours;
  }, 0);

  const whatsappUrl = useMemo(() => {
    if (activeServices.length === 0) return "#";
    const lines = activeServices.map((s) => {
      const sel = selections[s.id];
      const subtotal = sel.units * s.pricePerHour * hours;
      return `• ${s.label}: ${sel.units} ${s.unitLabel}${sel.units > 1 ? "s" : ""} × ${hours}h → $${subtotal.toLocaleString("es-AR")}`;
    });
    const message = [
      "Hola! Me interesa realizar la reservas de los siguientes servicios para mi evento:",
      "",
      ...lines,
      "",
      `Total estimado: $${total.toLocaleString("es-AR")}`,
      "",
      "¿Pueden confirmarme el precio?",
    ].join("\n");
    return `https://wa.me/+59893350714?text=${encodeURIComponent(message)}`;
  }, [activeServices, selections, hours, total]);

  function toggleService(id: string) {
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], active: !prev[id].active },
    }));
  }

  function changeUnits(id: string, delta: number) {
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], units: Math.max(1, prev[id].units + delta) },
    }));
  }

  return (
    <section id="precios" className="py-24 bg-background-secondary transition-colors duration-300 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-4xl font-black uppercase text-foreground">
              SIMULÁ TU <span className="text-brand-red italic">PRECIO</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-red mt-3" />
          </div>
          <span className="text-foreground-secondary font-light text-lg">03 // 04</span>
        </div>
        <p className="text-foreground-secondary mb-12 max-w-sm text-sm leading-relaxed">
          Seleccioná los servicios y obtené una estimación instantánea para tu evento.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Configurator */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-foreground-secondary mb-4">
                Servicios
              </p>
              <div className="space-y-3">
                {SERVICES.map((s) => {
                  const sel = selections[s.id];
                  return (
                    <div
                      key={s.id}
                      className={`border p-4 transition-colors duration-200 ${
                        sel.active ? "border-brand-red" : "border-border"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => toggleService(s.id)}
                          className="flex items-center gap-3 flex-1 text-left"
                        >
                          <span
                            className={`w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                              sel.active ? "border-brand-red bg-brand-red" : "border-border"
                            }`}
                          >
                            {sel.active && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                                <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          <span
                            className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                              sel.active ? "text-foreground" : "text-foreground-secondary"
                            }`}
                          >
                            {s.label}
                          </span>
                        </button>

                        {sel.active && (
                          <div className="flex items-center gap-2 ml-4">
                            <button
                              onClick={() => changeUnits(s.id, -1)}
                              className="w-7 h-7 border border-border text-foreground hover:border-brand-red hover:text-brand-red transition-colors text-sm font-bold leading-none"
                            >
                              −
                            </button>
                            <span className="text-sm font-bold text-foreground w-4 text-center">
                              {sel.units}
                            </span>
                            <button
                              onClick={() => changeUnits(s.id, 1)}
                              className="w-7 h-7 border border-border text-foreground hover:border-brand-red hover:text-brand-red transition-colors text-sm font-bold leading-none"
                            >
                              +
                            </button>
                            <span className="text-xs text-foreground-secondary ml-1">
                              {s.unitLabel}{sel.units > 1 ? "s" : ""}
                            </span>
                          </div>
                        )}
                      </div>

                      {sel.active && (
                        <p className="text-xs text-foreground-secondary mt-2 ml-7">
                          ${s.pricePerHour.toLocaleString("es-AR")} / hr por {s.unitLabel}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-foreground-secondary mb-4">
                Duración del Evento
              </p>
              <div className="flex gap-2 flex-wrap">
                {HOURS_OPTIONS.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHours(h)}
                    className={`px-4 py-2 border text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                      hours === h
                        ? "bg-brand-red border-brand-red text-white"
                        : "border-border text-foreground-secondary hover:border-brand-red hover:text-foreground"
                    }`}
                  >
                    {h}h
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Price Summary */}
          <div className="bg-card-bg border border-border p-8 flex flex-col">
            <p className="text-xs font-semibold tracking-widest uppercase text-foreground-secondary mb-6">
              Resumen Estimado
            </p>

            <div className="flex-1 space-y-3">
              {activeServices.length === 0 ? (
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  Seleccioná al menos un servicio para ver tu estimación.
                </p>
              ) : (
                activeServices.map((s) => {
                  const sel = selections[s.id];
                  const subtotal = sel.units * s.pricePerHour * hours;
                  return (
                    <div key={s.id} className="flex justify-between items-start text-sm gap-4">
                      <span className="text-foreground-secondary">
                        {s.label} × {sel.units} × {hours}h
                      </span>
                      <span className="text-foreground font-semibold whitespace-nowrap">
                        ${subtotal.toLocaleString("es-AR")}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {activeServices.length > 0 && (
              <>
                <div className="border-t border-border mt-6 pt-6">
                  <div className="flex justify-between items-end gap-4">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-foreground-secondary">
                        Total Estimado
                      </p>
                      <p className="text-3xl font-black text-foreground mt-1">
                        ${total.toLocaleString("es-AR")}
                      </p>
                    </div>
                    <p className="text-xs text-foreground-secondary text-right max-w-[130px] leading-relaxed">
                      Precio referencial sujeto a confirmación
                    </p>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full bg-brand-red text-white font-bold tracking-widest uppercase py-4 hover:bg-red-800 transition-colors text-sm text-center block"
                >
                  SOLICITAR COTIZACIÓN →
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
