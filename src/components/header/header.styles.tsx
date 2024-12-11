"use client";
import Image from "next/image";
import tw from "tailwind-styled-components";

export const HeaderWrapper = tw.section`
    w-full
    px-12 
    bg-secondary
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
`;

export const SignInBtn = tw.button`
    px-4 
    py-2 
    rounded-md 
    bg-accent
    hover:bg-accent/70
    text-black
    font-semibold
`;
