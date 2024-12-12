import tw from "tailwind-styled-components";

export const PricingWrapper = tw.section`
    relative
    top-0
    w-full
    h-full
    text-xl
    bg-gradient-to-b from-black to-primary
    text-white
    py-24
`;

export const PricingContainer = tw.div`
    container
    flex
    flex-col
    gap-12
    items-center
    h-full
`;

export const PlansWrapper = tw.div`
    w-full 
    flex 
    justify-center
`;

export const PlansContainer = tw.div`
    grid 
    grid-cols-1 
    md:grid-cols-2 
    gap-4
    w-full 
    max-w-7xl
`;
