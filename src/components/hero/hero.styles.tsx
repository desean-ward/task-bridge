import Image from "next/image";
import tw from "tailwind-styled-components";

export const HeroWrapper = tw.section`
    absolute 
    -mt-32   
    md:top-0
    container
    w-full 
    h-fit
    flex 
    flex-col
    text-white 
`;

export const HeroContainer = tw.div`
    grid 
    grid-rows-2
    lg:grid-cols-2 
`;

export const LeftContent = tw.div`
    flex 
    flex-col 
    justify-center 
    gap-12 
    px-12
    relative
    -top-24 
    md:top-0
`;

export const LeftContentBtns = tw.div`
    flex 
    gap-4
`;

export const LeftContentBtn = tw.button`
    px-4
    py-2
    rounded-md
    duration-300 
    transitions-colors
    font-semibold
`;

export const RightContent = tw.div`
    flex 
    justify-center
    lg:justify-end 
    w-full
    h-screen
    gap-8
    px-8
    lg:pr-12 

    relative
    md:-mt-56
    lg:mt-32
    overflow-hidden
`;

export const LeftImgs = tw.div`
    grid 
    grid-rows-3 
    gap-8
    relative 
    -top-8
`;
export const RightImgs = tw.div`
    relative
    grid 
    grid-rows-3 
    gap-8 
    relative 
    top-28
`;

export const HeroImg = tw(Image)`
    w-[320px] 
    h-full
    round-lg
    object-cover
`;
