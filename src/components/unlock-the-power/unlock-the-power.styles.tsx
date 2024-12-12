import tw from "tailwind-styled-components";

export const UnlockThePowerWrapper = tw.section`
    w-full 
    h-screen
    text-white 
    relative
    
    lg:-top-16
`;

export const UnlockThePowerContainer = tw.div`
    grid 
    lg:grid-cols-2
    h-full
`;

export const LeftContentContainer = tw.div`
    flex 
    flex-col 
    h-full 
    justify-center 
    gap-8 
    relative 
    px-12 
    lg:px-24
`;
export const RightContentContainer = tw.div`
    relative 
    h-[50vh]
    lg:h-screen 
    top-10
    lg:top-0
    right-0
`;
