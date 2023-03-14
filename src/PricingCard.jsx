import React from 'react';

const PricingCard = ({ title, price, features, buttonText }) => {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <h3>{price}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>{buttonText}</button>
      <style jsx>{`
            .pricing-card{
                margin:auto;
                margin-top: 20px;
                border: 1px solid gray;
                width:50%;
                padding: 1rem;
            }
            li{
                list-style-type: none;
                margin: 10px 5px;
            }
            button{
                margin-top: 5px;
                padding: 10px;
                border-radius: 5px;
                border:none;
                font-size: 1.1rem;
                cursor:pointer;
            }
            button:hover{
                font-size:1.2rem;
            }
    `}</style>
    </div>
  );
};

export default PricingCard;
