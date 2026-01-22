import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Cidade } from './components/Cidade';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Cidade />
      <Footer />
    </div>
  );
}
