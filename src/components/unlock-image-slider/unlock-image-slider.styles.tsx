import Image from "next/image";
import tw from "tailwind-styled-components";

export const SliderContainer = tw.div`
    relative
    w-full 
    h-screen 
    overflow-hidden
`;

export const SliderImage = tw(Image)`
    absolute
    top-0 
    left-0 
    w-full 
    h-full 
    object-cover 
    transition-opacity 
    duration-300 
    ease
`
