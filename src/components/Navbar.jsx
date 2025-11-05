import { Rocket, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-500 grid place-items-center text-white shadow-sm">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-gray-900 tracking-tight">Vibe Studio</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg shadow-sm">Get Started</button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-3 space-y-2 text-sm text-gray-700">
            <a href="#features" className="block">Features</a>
            <a href="#showcase" className="block">Showcase</a>
            <a href="#pricing" className="block">Pricing</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-3 py-2 border rounded-lg">Sign in</button>
              <button className="flex-1 px-3 py-2 rounded-lg text-white bg-gray-900">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
