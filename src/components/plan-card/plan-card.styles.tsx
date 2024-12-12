import tw from "tailwind-styled-components";

export const PlanCardContainer = tw.div`
    w-full 
    flex 
    flex-col 
    justify-start 
    p-8 
    border 
    border-white/20
    rounded-xl
    shadow-black 
    shadow-2xl
`;

export const Title = tw.h3`
    text-3xl 
    font-bold 
`;

export const Tagline = tw.p`
    mb-8
`;

export const PriceMonthly = tw.span`
    text-5xl 
    font-bold 
`;

export const PriceYearly = tw.p`
    
`;

export const Feature = tw.p`
    flex 
    gap-2 
    items-center
`;
