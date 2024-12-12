import Image from "next/image";
import tw from "tailwind-styled-components";

export const HeroWrapper = tw.section`
    relative 
    -top-10
    w-full 
    h-fit
    flex 
    bg-gradient-to-b from-black to-primary
    text-white 
`;

export const HeroContainer = tw.div`
    container
    grid 
    grid-rows-2
    lg:grid-cols-2 
    px-8
    md:px-12
    lg:px-0
    h-screen
`;

export const LeftContent = tw.div`
    flex 
    flex-col 
    justify-center  
    gap-12     
    h-screen
    lg:pr-24 
    relative 
    -top-52
    md:-top-72
    lg:top-0
`;

export const LeftContentBtns = tw.div`
    flex 
    gap-4
    text-xl
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
    relative
    top-32
    md:-top-6
    lg:top-0
`;

export const LeftImgs = tw.div`
    grid 
    grid-rows-3 
    gap-8
    relative 
    -top-16
`;
export const RightImgs = tw.div`
    relative
    grid 
    grid-rows-3 
    gap-8 
    relative
    lg:top-20
`;

export const HeroImg = tw(Image)`
    w-full 
    h-full
    round-lg
    object-cover
`;
