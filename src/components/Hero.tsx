import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-sky-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Essential Vitamins
            </h1>
            <p className="text-gray-600 mb-4">Online Medical Supplies</p>
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Get Your Vitamins & Minerals
              </h2>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-800 transition-colors">
                EXPLORE
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-yellow-100 rounded-full p-8 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=500"
                alt="Vitamin Bottle"
                className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200"
                alt="Capsules"
                className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}