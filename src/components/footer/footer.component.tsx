import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  LinkContainer,
  LinksWrapper,
  SocialIcons,
} from "./footer.styles";
import Link from "next/link";
import { Logo } from "../header/header.styles";
import footerLinks from "@/data/footerLinks.json";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Link href='/' className='flex items-center justify-center gap-4'>
          <Logo
            src='/images/task-bridge-logo.png'
            alt='logo'
            width={100}
            height={100}
            className='-ml-8 mt-4 w-16 h-16 scroll-smooth'
          />
          <span className='flex font-semibold text-2xl gap-1'>
            Task <span className='text-accent'>Bridge</span>
          </span>
        </Link>

        {/* Links */}
        <LinksWrapper>
          {footerLinks.map((link, idx) => (
            <LinkContainer key={idx}>
              <Link href={link.href}>{link.title}</Link>
            </LinkContainer>
          ))}
        </LinksWrapper>

        {/* Social Icons */}
        <SocialIcons>
          <Image
            src='/images/social/facebook.svg'
            alt='facebook'
            width={36}
            height={36}
          />
          <Image
            src='/images/social/instagram.svg'
            alt='instagram'
            width={36}
            height={36}
          />
          <Image
            src='/images/social/twitter.svg'
            alt='twitter'
            width={36}
            height={36}
          />
          <Image
            src='/images/social/linkedin.svg'
            alt='linkedin'
            width={36}
            height={36}
          />
          <Image
            src='/images/social/youtube.svg'
            alt='youtube'
            width={48}
            height={48}
          />
        </SocialIcons>
      </FooterContainer>
      <div className='flex justify-center items-center gap-8 bg-primary text-white py-8 relative bottom-0'>
        <span>
          &copy; {new Date().getFullYear()} Task Bridge. All rights reserved
        </span>

        <span className="cursor-pointer text-accent hover:text-accent/70">Privacy Policy</span>
        <span className="cursor-pointer text-accent hover:text-accent/70">Terms of Service</span>
        <span className="cursor-pointer text-accent hover:text-accent/70">Cookie Settings</span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
