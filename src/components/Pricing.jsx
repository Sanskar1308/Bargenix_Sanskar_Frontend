import { CheckCircle } from 'lucide-react';
import React from 'react';

const PricingCard = ({ title, price, features, recommended }) => (
    <div className={`rounded-lg shadow-lg ${recommended ? 'border-2 border-indigo-500' : ''} p-6 bg-white`}>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="mt-4">
        <span className="text-4xl font-extrabold text-gray-900">${price}</span>
        <span className="text-base font-medium text-gray-500">/month</span>
      </p>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex">
            <CheckCircle className="h-5 w-5 text-indigo-500" />
            <span className="ml-3 text-gray-500">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full py-3 px-4 rounded-md font-medium ${
        recommended 
          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
          : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
      }`}>
        Get Started
      </button>
    </div>
  );
  
  const Pricing = () => (
    <div id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Simple, Transparent Pricing</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <PricingCard
            title="Startup"
            price="49"
            features={[
              'Up to 1,000 chats/month',
              'Basic AI responses',
              'Email support',
              'Basic analytics'
            ]}
          />
          <PricingCard
            title="Business"
            price="99"
            features={[
              'Up to 5,000 chats/month',
              'Advanced AI capabilities',
              'Priority support',
              'Advanced analytics'
            ]}
            recommended={true}
          />
          <PricingCard
            title="Enterprise"
            price="299"
            features={[
              'Unlimited chats',
              'Custom AI training',
              '24/7 dedicated support',
              'Full analytics suite'
            ]}
          />
        </div>
      </div>
    </div>
  );
  

export default Pricing
