"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export type Service = {
  title: string;
  description: string;
  details: string;
  specs: string[];
  images: string[];
};

type Props = {
  service: Service;
  onClose: () => void;
};

export default function ServiceModal({ service, onClose }: Props) {
  const [current, setCurrent] = useState(0);
  const total = service.images.length || 1;

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
        className="bg-white dark:bg-zinc-950 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Carousel */}
        <div className="relative aspect-video bg-gray-200 dark:bg-zinc-900 overflow-hidden">
          {total === 1 && service.images.length === 0 ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-zinc-800">
              <svg className="w-10 h-10 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-zinc-600 text-xs tracking-widest uppercase">Agregar imagen</span>
            </div>
          ) : (
            service.images.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  i === current ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image src={src} alt={`${service.title} ${i + 1}`} fill className="object-cover" />
              </div>
            ))
          )}

          {/* Prev / Next — only when multiple images */}
          {total > 1 && (
            <>
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
            </>
          )}

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white w-8 h-8 flex items-center justify-center transition-colors text-sm"
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Dots — only when multiple images */}
          {total > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {service.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Counter — only when multiple images */}
          {total > 1 && (
            <span className="absolute top-3 left-3 text-white text-xs font-semibold bg-black/40 px-2 py-1">
              {current + 1} / {total}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-8">
          <div className="w-8 h-0.5 bg-brand-red mb-4" />
          <h2 className="text-2xl font-black uppercase mb-3 dark:text-white">{service.title}</h2>
          <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">{service.details}</p>

          <ul className="space-y-2 mb-8">
            {service.specs.map((spec) => (
              <li key={spec} className="flex items-start gap-2 text-sm text-gray-700 dark:text-zinc-300">
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
