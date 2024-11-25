import { Menu } from 'lucide-react';
import { useState } from 'react';
import Logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src={Logo} alt="Elbrit" />
          </div>
          
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              <a href="#products" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#ingredients" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Ingredients</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </nav>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="#ingredients" className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium">Ingredients</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}