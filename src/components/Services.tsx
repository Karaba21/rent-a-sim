"use client";

import { useState } from "react";
import Image from "next/image";
import ServiceModal, { type Service } from "./ServiceModal";

const services: Service[] = [
  {
    title: "SIMULADORES DE CARRERAS",
    images: [
      "/Imagenes_ia/sim1.webp",
      "/Imagenes_ia/sim2.webp",
      "/Imagenes_ia/sim_muchos.webp",
    ],
    description:
      "Siente la fuerza G y la precisión de un monoplaza con tecnología de simulación profesional.",
    details:
      "Nuestros simuladores de carreras replican con exactitud el comportamiento dinámico de un monoplaza de competición.",
    specs: [
      "Volante de fuerza directa Fanatec DD Pro",
      "Triple pantalla 27\" a 165Hz",
      "Asiento bucket con arnés de 4 puntos",
      "Vibración háptica sincronizada con telemetría",
      "Compatible con F1, GT3, rally y más",
    ],
  },
  {
    title: "REALIDAD VIRTUAL",
    images: [
      "/Imagenes_ia/vr3.webp",
      "/Imagenes_ia/vr_kid1.webp",
      "/Imagenes_ia/vr_kids.webp",
    ],
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
  },
  {
    title: "CABINA DE FOTOS",
    images: [
      "/Imagenes_ia/cabina2.png"
    ],
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
  },
];

export default function Services() {
  const [open, setOpen] = useState<Service | null>(null);

  return (
    <section id="servicios" className="py-10 bg-background transition-colors duration-300 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-4xl font-black uppercase text-foreground">
              NUESTROS <span className="text-blue-500 italic">SERVICIOS</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-red mt-3" />
          </div>
          <span className="text-foreground-secondary font-light text-lg">01 // 03</span>
        </div>

        <p className="text-foreground-secondary mb-12 max-w-sm text-sm leading-relaxed">
          Equipamiento técnico de vanguardia diseñado para la máxima inmersión y diversión.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <button
              key={s.title}
              onClick={() => setOpen(s)}
              className="text-left group cursor-pointer"
            >
              <div className="relative aspect-video w-full mb-4 bg-background-secondary overflow-hidden">
                {s.images[0] ? (
                  <Image
                    src={s.images[0]}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-foreground-secondary/30">
                    <svg className="w-8 h-8 text-foreground-secondary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-foreground-secondary/40 text-xs tracking-widest uppercase">Agregar imagen</span>
                  </div>
                )}
              </div>
              <h3 className="font-bold text-sm tracking-wider mb-2 text-foreground">{s.title}</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed mb-3">{s.description}</p>
              <span className="text-xs font-bold tracking-widest text-foreground group-hover:text-brand-red transition-colors">
                VER MÁS →
              </span>
            </button>
          ))}
        </div>
      </div>

      {open && <ServiceModal service={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
