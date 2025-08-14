
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#1d1d1b] min-h-screen antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
