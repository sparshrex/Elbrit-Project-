import { TestTube, Leaf, Flag, Truck, Shield, Atom } from 'lucide-react';

const features = [
  {
    icon: TestTube,
    title: 'Clinically Studied',
    description: 'All products that we offer have undergone lab and safety tests'
  },
  {
    icon: Leaf,
    title: 'Vegetarian Friendly',
    description: 'We have a wide selection of vegetarian products to meet your needs'
  },
  {
    icon: Flag,
    title: 'Made In India',
    description: 'Shop local and explore health products made right here in India'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'We deliver to your door with no shipping costs on your orders'
  },
  {
    icon: Shield,
    title: 'No Risk',
    description: 'We ensure that all products are safe and within their shelf life'
  },
  {
    icon: Atom,
    title: 'GMO Free',
    description: 'Natural, no modified products and alternatives for those who need it'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-teal-800 transition-colors">
              <feature.icon className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-teal-100">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}