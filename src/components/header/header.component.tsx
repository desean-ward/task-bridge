import React from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  NavBar,
  NavbarItem,
  NavbarWrapper,
  SignInBtn,
} from "./header.styles";
import Link from "next/link";
import navLinks from "@/data/navLinks.json";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link href='/' className='flex items-center justify-center gap-4'>
          <Logo
            src='/images/task-bridge-logo.png'
            alt='logo'
            width={100}
            height={100}
            className='-ml-12 mt-4 w-16 h-16'
          />
          <span className='font-semibold text-xl'>
            Task <span className='text-accent'>Bridge</span>
          </span>
        </Link>

        {/* Nav Links */}
        <NavbarWrapper>
          <NavBar>
            {navLinks.map((link) => (
              <NavbarItem key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </NavbarItem>
            ))}
          </NavBar>

          {/* Sign In Button */}
        </NavbarWrapper>
        <SignInBtn>
          <Link href='/sign-in'>Sign In</Link>
        </SignInBtn>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
