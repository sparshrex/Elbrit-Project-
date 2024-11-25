import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Ingredients from './components/Ingredients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <Ingredients />
      </main>
      <Footer />
    </div>
  );
}

export default App;