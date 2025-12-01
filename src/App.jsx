import { useEffect } from 'react';
import { initScrollSmoother } from './utils/gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Portfolio from './components/Portfolio';
import DigitalProducts from './components/DigitalProducts';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize GSAP ScrollSmoother
    const smoother = initScrollSmoother();

    return () => {
      // Cleanup
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />

            <About />
            <Portfolio />
            <DigitalProducts />
            <Contact />
            <Marquee />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
