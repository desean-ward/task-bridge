import tw from "tailwind-styled-components";

export const AiInfoWrapper = tw.section`
    relative
    top-0
    w-full
    lg:h-screen 
    mb-8 
    py-24 
    px-4
    bg-white 
    z-10
`;

export const AiInfoContainer = tw.div`
    container 
    flex 
    flex-col 
    items-center 
    gap-12

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
    bg-gradient-to-b from-black to-primary
    p-8
    rounded-lg
`;

export const ContentBtns = tw.div`
    flex 
    gap-4
    font-semibold
    text-xl
`;

export const ContentBtn = tw.button`
    px-4
    pt-2
    pb-3
    rounded-md
    duration-300 
    transitions-colors
    font-semibold
`;
