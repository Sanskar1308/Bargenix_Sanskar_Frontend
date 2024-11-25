import { LineChart, Settings, Shield, Stars, Users, Zap } from 'lucide-react';
import React from 'react';

const Features = () => {
    const features = [
      {
        icon: <Stars className="h-8 w-8" />,
        title: 'AI-Powered Intelligence',
        description: 'Advanced natural language processing for human-like conversations'
      },
      {
        icon: <Zap className="h-8 w-8" />,
        title: 'Lightning Fast',
        description: 'Instant responses with 99.9% uptime guarantee'
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Enterprise Security',
        description: 'Bank-grade encryption and data protection'
      },
      {
        icon: <LineChart className="h-8 w-8" />,
        title: 'Advanced Analytics',
        description: 'Deep insights into customer interactions'
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: 'Multi-Channel Support',
        description: 'Deploy across web, mobile, and social platforms'
      },
      {
        icon: <Settings className="h-8 w-8" />,
        title: 'Easy Integration',
        description: 'Simple API and no-code deployment options'
      }
    ];
  
    return (
      <div id="features" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">Powerful Features</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need to deliver exceptional customer service</p>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Features
