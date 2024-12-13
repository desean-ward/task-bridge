"use client";
import React from "react";
import {
  PlansContainer,
  PlansWrapper,
  PricingContainer,
  PricingWrapper,
} from "./pricing.styles";
import PlanCard from "../plan-card/plan-card.component";
import planCardInfo from "@/data/planCardInfo.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".pricing-heading", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#pricing",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from("#plan-0", {
      opacity: 0,
      x: -100,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#plan-0",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from("#plan-1", {
      opacity: 0,
      x: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#plan-1",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <PricingWrapper id='pricing'>
      <PricingContainer>
        <p className='pricing-heading text-3xl font-semibold'>Plans</p>

        <h2 className='pricing-heading text-5xl font-bold'>
          Pricing <span className='text-accent'>Options</span>
        </h2>

        {/* Tagline */}
        <p className='pricing-heading'>
          Choose the plan that fits your business needs.
        </p>

        {/* Plans */}
        <PlansWrapper>
          <PlansContainer>
            {plans.map((plan: Plan, idx: number) => (
              <span id={`plan-${idx}`} key={idx}>
              <PlanCard plan={plan} />
              </span>
            ))}
          </PlansContainer>
        </PlansWrapper>
      </PricingContainer>
    </PricingWrapper>
  );
};

export default Pricing;
