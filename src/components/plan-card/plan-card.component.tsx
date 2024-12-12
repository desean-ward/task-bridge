import React from "react";
import {
  Feature,
  PlanCardContainer,
  PriceMonthly,
  PriceYearly,
  Tagline,
  Title,
} from "./plan-card.styles";

type PlanCardProps = {
  plan: {
    id: string;
    title: string;
    tagline: string;
    price_monthly: string;
    price_yearly?: string;
    features: string[];
    button_text: string;
  };
};

const PlanCard = ({ plan }: PlanCardProps) => {
  const { title, tagline, price_monthly, price_yearly, features, button_text } =
    plan;
  return (
    <PlanCardContainer>
      {/* Title */}
      <div>
        <Title className='text-accent'>{title}</Title>
        <Tagline>{tagline}</Tagline>
      </div>
      <hr className='opacity-[0.25]' />

      {/* Price */}
      <div className='flex flex-col justify-between gap-4 py-8 mb-4 relative top-0'>
        <div className='flex flex-col justify-start'>
          <PriceMonthly className='text-accent'>
            {price_monthly} <span className='text-lg font-normal'>/ month</span>
          </PriceMonthly>

          {price_yearly ? (
            <PriceYearly>or {price_yearly} yearly</PriceYearly>
          ) : (
            <div>Always free</div>
          )}
        </div>

        {/* Button */}
        <button className='w-full bg-secondary hover:bg-secondary/70 text-xl text-center pt-2 pb-3 font-semibold rounded-md duration-300 transition-colors'>
          {button_text}
        </button>
      </div>
      <hr className='opacity-[0.25]' />

      {/* Features */}
      <div className='flex flex-col gap-1 py-8'>
        {features.map((feature, idx) => (
          <Feature key={idx} className=''>
            <span className='text-accent'>✓</span>
            <span>{feature}</span>
          </Feature>
        ))}
      </div>
    </PlanCardContainer>
  );
};

export default PlanCard;
