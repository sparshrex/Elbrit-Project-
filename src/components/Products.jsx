import { Pill, Scale, Apple } from 'lucide-react';

const products = [
  {
    icon: Pill,
    title: 'Vitamins',
    description: 'Strengthen vitality and immunity with our supplements'
  },
  {
    icon: Scale,
    title: 'Weight Loss',
    description: 'Pure scientifically proven solutions'
  },
  {
    icon: Apple,
    title: 'Functional Foods',
    description: 'Fresh protein powers to help formula'
  }
];

export default function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex items-center space-x-4 p-6 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors">
              <div className="bg-blue-900 p-3 rounded-full">
                <product.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}