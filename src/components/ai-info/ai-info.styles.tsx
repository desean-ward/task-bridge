import tw from "tailwind-styled-components";

export const AiInfoWrapper = tw.section`
    absolute
    top-[100vh]
    w-full 
    
    py-24 
    bg-white 
`;

export const AiInfoContainer = tw.div`
    container 
    flex 
    flex-col 
    items-center 
    gap-12
    px-8
`;

export const CardsWrapper = tw.div`
    w-full 
    grid 

    lg:grid-cols-3
    gap-4
`;

export const CardsContainer = tw.div`
    text-white
    w-full 
    flex 
    flex-col 
    justify-center 
    gap-8
    text-center
    bg-primary
    p-8
    rounded-lg
`;

export const ContentBtns = tw.div`
    flex 
    gap-4
    font-semibold
`;

export const ContentBtn = tw.button`
    px-4
    py-2
    rounded-md
    duration-300 
    transitions-colors
    font-semibold
`;
