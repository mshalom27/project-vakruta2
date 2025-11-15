import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#e2d0bb] to-[#d9c3a8] border-b-2 border-amber-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white p-1 shadow-md">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F2b1a5895495e4fb98781781147a0dfc0?format=webp&width=200"
                alt="Vakruta"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display text-2xl md:text-3xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
              Vakruta
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-blue-900 font-cinzel font-semibold hover:text-amber-600 transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
