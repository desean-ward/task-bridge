"use client";
import Image from "next/image";
import Link from "next/link";
import tw from "tailwind-styled-components";

export const HeaderWrapper = tw.section`
    sticky 
    top-0 
    z-50
    bg-primary
    text-text
    px-8
    md:px-12
`;

export const HeaderContainer = tw.div`
    container
    flex 
    justify-between 
    items-center 
    w-full 
`;

export const Logo = tw(Image)``;

export const NavbarWrapper = tw.nav`
    hidden 
    lg:block
`;

export const NavBar = tw.ul`
    flex 
    flex-col 
    lg:flex-row 
    justify-center 
    lg:justify-between
    items-center
    w-full 
    gap-4
`;

export const NavbarItem = tw.li`
    hover:text-accent
    duration-300 
    transition-colors
    p-8
    text-2xl
    lg:text-lg
`;

export const SignInBtn = tw.button`
    px-4 
    py-1
    rounded-md 
    bg-accent
    hover:bg-accent/70
    text-black
    text-md
    font-semibold
    duration-300 
    transition-colors
    relative 
    -left-10
    lg:left-0
`;

export const Subheader = tw.div`
    absolute 
    left-0
    top-[60vh]
    md:top-[80vh]
    lg:top-20
    w-fit
    bg-primary
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
    flex-col 
    md:flex-row 
    gap-2 
    md:gap-0
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

export const MobileMenuWrapper = tw.div`
    lg:hidden
    absolute
    top-0
    bg-primary
    fixed 
    overflow-hidden
    
`;

export const MobileMenuContainer = tw.div`
    flex 
    flex-col
    w-screen 
    h-screen 
    justify-center 
    items-center
`;

export const Hamburger = tw.div`
    absolute 
    right-4
    md:right-8
    top-6
    z-10
    lg:hidden
`;

export const MobileMenuContent = tw.div`
    w-full 
    h-full 
`;
