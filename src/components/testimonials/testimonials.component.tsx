import React from "react";
import {
  TestimonialCards,
  TestimonialsContainer,
  TestimonialsWrapper,
} from "./testimonials.styles";
import testimonials from "@/data/testimonials.json";
import Testimonial from "../testimonial-card/testimonial-card.component";

const Testimonials = () => {
  return (
    <TestimonialsWrapper id='testimonials'>
      <TestimonialsContainer>
        <h2 className='text-5xl font-bold mb-8'>
          Customer <span className='text-accent'>Testimonials</span>
        </h2>

        <p>Task Bridge transformed our Instagram engagement strategy.</p>

        {/* Customer Testimonials */}
        <TestimonialCards>
          {testimonials.map((person, idx) => (
            <Testimonial key={idx} person={person} />
          ))}
        </TestimonialCards>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
