"use client";
import Image from "next/image";
import Link from "next/link";
import tw from "tailwind-styled-components";

export const HeaderWrapper = tw.section`
    absolute 
    top-0
    w-full
    px-12 
    bg-primary
    text-text
`;

export const HeaderContainer = tw.div`
    flex 
    justify-between 
    items-center 
    w-full 
`;

export const Logo = tw(Image)``;

export const NavbarWrapper = tw.nav`
`;

export const NavBar = tw.ul`
    flex 
    w-full 
    justify-between
    gap-4
`;

export const NavbarItem = tw.li`
    hover:text-accent
    duration-300 
    transition-colors
    p-8
`;

export const SignInBtn = tw.button`
    px-4 
    py-2 
    rounded-md 
    bg-accent
    hover:bg-accent/70
    text-black
    font-semibold
    duration-300 
    transition-colors
`;

export const Subheader = tw.div`
    border 
    border-black
    shadow-black/70
    shadow-xl
    rounded-lg
    w-full
    flex 
    flex-col
    pt-8 
`;

export const SubheaderItem = tw(Link)`
    w-fit 
    inline-block
    flex 
    flex-col
    hover:text-accent
    duration-300 
    transition-colors
`;

export const SubheaderContent = tw.div`
    flex 
    justify-between
    mb-8
    px-8
`;

export const SubheaderFooter = tw.div`
    bg-background 
    flex 
    justify-center 
    gap-2 
    py-8
`;
