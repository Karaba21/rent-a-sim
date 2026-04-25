"use client";

import { useState } from "react";
import ServiceModal, { type Service } from "./ServiceModal";

const services: Service[] = [
  {
    title: "SIMULADORES DE CARRERAS",
    description:
      "Siente la fuerza G y la precisión de un monoplaza con tecnología de simulación profesional.",
    details:
      "Nuestros simuladores de carreras replican con exactitud el comportamiento dinámico de un monoplaza de competición. Con asientos de bucket, volante de fuerza directa y pantallas de 180°, cada piloto vive una experiencia única e irrepetible.",
    specs: [
      "Volante de fuerza directa Fanatec DD Pro",
      "Triple pantalla 27\" a 165Hz",
      "Asiento bucket con arnés de 4 puntos",
      "Vibración háptica sincronizada con telemetría",
      "Compatible con F1, GT3, rally y más",
    ],
    slides: 3,
  },
  {
    title: "REALIDAD VIRTUAL",
    description:
      "Experiencias inmersivas 360° que rompen las barreras de lo convencional en tus eventos.",
    details:
      "Con los headsets VR más avanzados del mercado llevamos a tus invitados a pistas icónicas de todo el mundo sin moverse del lugar. Ideal para eventos corporativos, activaciones de marca y fiestas privadas.",
    specs: [
      "Headsets Meta Quest 3 y Valve Index",
      "Seguimiento de movimiento de cuerpo completo",
      "Estaciones independientes para hasta 8 usuarios",
      "Biblioteca de +20 experiencias disponibles",
      "Técnico dedicado en sitio",
    ],
    slides: 3,
  },
  {
    title: "CABINA DE FOTOS",
    description:
      "Captura momentos únicos con nuestras cabinas digitales de alta resolución y filtros Pro.",
    details:
      "Nuestra cabina de fotos combina iluminación profesional, cámara DSLR de alta resolución y software de impresión instantánea para que cada asistente se lleve un recuerdo premium del evento.",
    specs: [
      "Cámara Canon EOS R6 Mark II",
      "Impresión instantánea en papel fotográfico",
      "Más de 30 marcos y filtros temáticos",
      "Galería digital compartible por QR",
      "Impresora de sublimación DNP",
    ],
    slides: 3,
  },
];

export default function Services() {
  const [open, setOpen] = useState<Service | null>(null);

  return (
    <section id="servicios" className="py-24 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-4xl font-black uppercase dark:text-white">
              NUESTROS <span className="text-blue-500 italic">SERVICIOS</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-red mt-3" />
          </div>
          <span className="text-gray-400 dark:text-gray-500 font-light text-lg">01 // 03</span>
        </div>

        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-sm text-sm leading-relaxed">
          Equipamiento técnico de vanguardia diseñado para la máxima inmersión y diversión.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title}>
              <div className="bg-gray-100 dark:bg-[#1a1a1a] aspect-video w-full mb-4" />
              <h3 className="font-bold text-sm tracking-wider mb-2 dark:text-white">{s.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">{s.description}</p>
              <button
                onClick={() => setOpen(s)}
                className="text-xs font-bold tracking-widest text-gray-900 dark:text-gray-200 hover:text-brand-red dark:hover:text-brand-red transition-colors cursor-pointer"
              >
                VER MÁS →
              </button>
            </div>
          ))}
        </div>
      </div>

      {open && <ServiceModal service={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
