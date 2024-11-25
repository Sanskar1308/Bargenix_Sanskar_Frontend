import { ArrowRight, MessageCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Animated gradient background component
const AnimatedGradient = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10" />
  );
  
  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let startTime;
      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(end * percentage));
        if (percentage < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      requestAnimationFrame(updateCount);
    }, [end, duration]);
  
    return <span>{count.toLocaleString()}+</span>;
  };
  

const Hero = () => (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      <AnimatedGradient />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Next-Generation
            </span>
            <br />
            AI Chat Solutions
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Transform your customer experience with our intelligent chatbot platform.
            Available 24/7, infinitely scalable, and endlessly customizable.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors flex items-center justify-center space-x-2 shadow-lg">
              <span>Watch Demo</span>
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { count: 1000, label: 'Active Users' },
              { count: 5000000, label: 'Messages Sent' },
              { count: 99, label: 'Satisfaction Rate %' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-indigo-600">
                  <AnimatedCounter end={stat.count} />
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  

export default Hero
