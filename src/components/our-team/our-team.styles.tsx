import tw from "tailwind-styled-components";

export const OurTeamWrapper = tw.section`
    relative
    top-0
    w-full
    h-full
    bg-white
    text-black
    text-xl
    z-10
    py-24
`;

export const OurTeamContainer = tw.div`
    container
    flex
    flex-col
    gap-12
    items-center
    h-full
`;

export const TeamMembersContainer = tw.div`
    container
    grid
    md:grid-cols-2
    lg:grid-cols-3 
    gap-4
    px-8
`;

export const TeamMember = tw.div`
    flex 
    flex-col 
    justify-center 
    items-center 
    gap-4
    mb-8
    text-center
`;

export const Avatar = tw.div`
    size-32
    rounded-full
    overflow-hidden
`;
