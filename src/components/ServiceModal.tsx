"use client";

import { useState, useEffect } from "react";

export type Service = {
  title: string;
  description: string;
  details: string;
  specs: string[];
  slides: number;
};

type Props = {
  service: Service;
  onClose: () => void;
};

export default function ServiceModal({ service, onClose }: Props) {
  const [current, setCurrent] = useState(0);
  const total = service.slides;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + total) % total);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, total]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Carousel */}
        <div className="relative aspect-video bg-gray-200 overflow-hidden">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-gray-300 transition-opacity duration-300 flex items-center justify-center ${
                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* placeholder — swap with <Image> when ready */}
              <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">
                Foto {i + 1}
              </span>
            </div>
          ))}

          {/* Prev / Next */}
          <button
            onClick={() => setCurrent((c) => (c - 1 + total) % total)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-9 h-9 flex items-center justify-center transition-colors"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % total)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-9 h-9 flex items-center justify-center transition-colors"
            aria-label="Siguiente"
          >
            ›
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white w-8 h-8 flex items-center justify-center transition-colors text-sm"
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="absolute top-3 left-3 text-white text-xs font-semibold bg-black/40 px-2 py-1">
            {current + 1} / {total}
          </span>
        </div>

        {/* Info */}
        <div className="p-8">
          <div className="w-8 h-0.5 bg-brand-red mb-4" />
          <h2 className="text-2xl font-black uppercase mb-3">{service.title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.details}</p>

          <ul className="space-y-2 mb-8">
            {service.specs.map((spec) => (
              <li key={spec} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-brand-red font-bold mt-0.5">—</span>
                {spec}
              </li>
            ))}
          </ul>

          <a
            href="#reservas"
            onClick={onClose}
            className="inline-block bg-brand-red text-white font-bold tracking-widest uppercase px-8 py-4 hover:bg-red-800 transition-colors text-sm"
          >
            RESERVAR ESTE SERVICIO
          </a>
        </div>
      </div>
    </div>
  );
}
