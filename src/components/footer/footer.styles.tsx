import tw from "tailwind-styled-components";

export const FooterWrapper = tw.section`
    w-full 
    flex 
    flex-col
    justify-between
    bg-white 
    text-black
    text-xl
    pt-24
`;

export const FooterContainer = tw.div`
    container
    flex 
    justify-between 
    items-center
    pb-24
`;

export const LinksWrapper = tw.ul`
    flex 
    gap-4
`;
export const LinkContainer = tw.li`
    font-semibold 
    hover:text-accent
`;

export const SocialIcons = tw.div`
    flex 
    gap-2
`;

export const Copyright = tw.div`
    w-full 
    text-center
`;
