"use client";
import {
  TestimonialCards,
  TestimonialsContainer,
  TestimonialsWrapper,
} from "./testimonials.styles";
import testimonials from "@/data/testimonials.json";
import Testimonial from "../testimonial-card/testimonial-card.component";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testimonials = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".heading", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 70%",
        toggleActions: "play reverse restart reverse",
      },
    });

    gsap.from("#testimonial-cards", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#testimonial-cards",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <TestimonialsWrapper id='testimonials'>
      <TestimonialsContainer>
        <h2 className='heading text-5xl font-bold mb-8'>
          Customer <span className='text-accent'>Testimonials</span>
        </h2>

        <p className='heading'>
          Task Bridge transformed our Instagram engagement strategy.
        </p>

        {/* Customer Testimonials */}
        <TestimonialCards id='testimonial-cards'>
          {testimonials.map((person, idx) => (
            <Testimonial key={idx} person={person} />
          ))}
        </TestimonialCards>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
