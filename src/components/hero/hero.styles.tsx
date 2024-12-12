import Image from "next/image";
import tw from "tailwind-styled-components";

export const HeroWrapper = tw.section`
    relative 
    -mt-32   
    md:-top-40
    container
    w-full 
    h-full
    flex 
    flex-col
    text-white 
    overflow-hidden
`;

export const HeroContainer = tw.div`
    grid 
    grid-rows-2
    lg:grid-cols-2 
    px-12
    lg:px-0
`;

export const LeftContent = tw.div`
    flex 
    flex-col 
    justify-center  
    gap-12     
    relative
    top-20 
    md:-top-20
    lg:top-28

    lg:pr-24
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
    lg:h-screen
    gap-8
    relative
    top-28
    md:-top-[40vh]
    lg:top-32
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
    md:top-8 
    lg:top-28
`;

export const HeroImg = tw(Image)`
    w-full 
    h-full
    round-lg
    object-cover
`;
