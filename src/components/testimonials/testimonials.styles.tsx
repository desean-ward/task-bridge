import tw from "tailwind-styled-components";

export const TestimonialsWrapper = tw.section`
    relative
    top-0
    w-full
    bg-gradient-to-b from-black to-primary
    text-white
    text-xl 
    py-24
    px-4
`;

export const TestimonialsContainer = tw.div`
   container 
   text-center
   lg:text-start
`;

export const TestimonialCards = tw.div`
    grid 
    grid-rows-1 
    lg:grid-cols-3
    mt-16
    justify-center
    lg:justify-start
`;
