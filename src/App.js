import React from 'react';
import SyntaxHighlighter from './SyntaxHighlit';
import PricingCard from './PricingCard';

function App() {
  const priceData = [
    {
      title: 'Basic Plan',
      price: '$9.99/month',
      features: ['Unmetered traffic (Unlimited GB)', '100 Websites', 'Free Weekly Backups'],
      buttonText: 'Buy Now'
    },
    {
      title: 'Pro Plan',
      price: '$19.99/month',
      features: ['Free Domain', 'Website builder', 'Website builder', 'Full DNS Editor'],
      buttonText: 'Buy Now'
    }
  ];

  return (
    <div className="container">
      <h1>Syntax Highlighter</h1>
      <SyntaxHighlighter />


      <h1>Pricing Card</h1>
      <div className="pricing-container">
        {priceData.map((pricing, index) => (
          <PricingCard
            key={index}
            title={pricing.title}
            price={pricing.price}
            features={pricing.features}
            buttonText={pricing.buttonText}
          />
        ))}
      </div>

      <style jsx>{`
        *{ 
          margin:0; 
          padding:0
        }
          .container { 
            text-align:center;
            background: linear-gradient(to bottom, #1A237E, #0D47A1) ;
            color: white;
           }
        `}
        </style>
    </div>  
  );
}

export default App;
