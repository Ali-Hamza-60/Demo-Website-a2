import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsRibbon from './components/StatsRibbon';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FlightCase from './components/FlightCase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E8E0D0] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatsRibbon />
        <Services />
        <Gallery />
        <FlightCase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
