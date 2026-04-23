export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-brand-red font-bold italic text-xl mb-2">RENT A SIM</div>
          <p className="text-gray-500 text-xs">
            © 2024 Rent a Sim. Kinetic. Precision. Engineering.
          </p>
        </div>

        <div className="flex gap-6 text-xs text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
