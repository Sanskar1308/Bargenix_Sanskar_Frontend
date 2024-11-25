import React from 'react';
import About from './components/About';
import ChatBox from './components/Chatbox';
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <About />
        <ChatBox />
      </main>
    </div>
  );
};

export default App;