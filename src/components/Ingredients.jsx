const ingredients = [
  {
    name: 'Vitamin C',
    description: 'Vitamin C as ascorbic acid',
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=300'
  },
  {
    name: 'Vitamin B3',
    description: 'Niacin for healthy gut and skin',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=300'
  },
  {
    name: 'Magnesium',
    description: 'Boost energy and support muscle function',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=300'
  }
];

export default function Ingredients() {
  return (
    <section className="py-16 bg-white" id="ingredients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Better Ingredients</h2>
        <p className="text-gray-600 mb-12">Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-sky-50 p-6">
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="w-full h-48 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{ingredient.name}</h3>
              <p className="text-gray-600">{ingredient.description}</p>
              <button className="mt-4 text-blue-900 font-semibold hover:text-blue-700">
                SEE MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}