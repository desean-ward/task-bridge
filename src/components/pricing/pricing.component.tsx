import React from "react";
import {
  PlansContainer,
  PlansWrapper,
  PricingContainer,
  PricingWrapper,
} from "./pricing.styles";
import PlanCard from "../plan-card/plan-card.component";
import planCardInfo from "@/data/planCardInfo.json";

type Plan = {
  id: string;
  title: string;
  tagline: string;
  price_monthly: string;
  price_yearly?: string;
  features: string[];
  button_text: string;
};

const Pricing = () => {
  // Parse the JSON data
  const plans = planCardInfo as Plan[];

  return (
    <PricingWrapper id='pricing'>
      <PricingContainer>
        <p className='text-xl font-semibold'>Plans</p>

        <h2 className='text-5xl font-bold'>Pricing <span className="text-accent">Options</span></h2>

        {/* Tagline */}
        <p>Choose the plan that fits your business needs.</p>

        {/* Plans */}
        <PlansWrapper>
          <PlansContainer>
            {plans.map((plan: Plan, idx: number) => (
              <PlanCard key={idx} plan={plan} />
            ))}
          </PlansContainer>
        </PlansWrapper>
      </PricingContainer>
    </PricingWrapper>
  );
};

export default Pricing;
