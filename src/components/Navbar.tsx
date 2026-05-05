"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 relative">
        <a href="#inicio">
          <Image src="/logo.webp" alt="Rent a Sim" width={140} height={40} priority />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a
            href="#inicio"
            className="text-xs font-semibold tracking-widest text-foreground hover:text-brand-red transition-colors"
          >
            INICIO
          </a>
          <a
            href="#servicios"
            className="text-xs font-semibold tracking-widest text-foreground hover:text-brand-red transition-colors"
          >
            SERVICIOS
          </a>
          <a
            href="#nosotros"
            className="text-xs font-semibold tracking-widest text-foreground hover:text-brand-red transition-colors"
          >
            QUIENES SOMOS
          </a>
          <a
            href="#reservas"
            className="text-xs font-semibold tracking-widest text-brand-red border-b-2 border-brand-red pb-0.5"
          >
            RESERVA
          </a>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <button
            onClick={toggle}
            aria-label="Cambiar tema"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-foreground-secondary hover:border-brand-red hover:text-brand-red transition-colors duration-200 cursor-pointer"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Menu"
            className="md:hidden flex items-center justify-center w-9 h-9 text-foreground-secondary"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-background border-b border-border px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 py-6' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col gap-6">
          <a
            href="#inicio"
            onClick={toggleMenu}
            className="text-sm font-semibold tracking-widest text-foreground hover:text-brand-red transition-colors"
          >
            INICIO
          </a>
          <a
            href="#servicios"
            onClick={toggleMenu}
            className="text-sm font-semibold tracking-widest text-foreground hover:text-brand-red transition-colors"
          >
            SERVICIOS
          </a>
          <a
            href="#nosotros"
            onClick={toggleMenu}
            className="text-sm font-semibold tracking-widest text-foreground hover:text-brand-red transition-colors"
          >
            QUIENES SOMOS
          </a>
          <a
            href="#reservas"
            onClick={toggleMenu}
            className="text-sm font-semibold tracking-widest text-brand-red"
          >
            RESERVA
          </a>
        </div>
      </div>
    </nav>
  );
}
