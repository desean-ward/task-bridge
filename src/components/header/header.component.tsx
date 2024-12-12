"use client";
import React, { useEffect, useState } from "react";
import {
  Hamburger,
  HeaderContainer,
  HeaderWrapper,
  Logo,
  MobileMenuContainer,
  MobileMenuWrapper,
  NavBar,
  NavbarItem,
  NavbarWrapper,
  SignInBtn,
  Subheader,
  SubheaderContent,
  SubheaderFooter,
  SubheaderItem,
} from "./header.styles";
import Link from "next/link";
import navLinks from "@/data/navLinks.json";
import subLinks from "@/data/subLinks.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoMdContacts } from "react-icons/io";
import { FaAngleDown, FaPencil } from "react-icons/fa6";
import { RiCloseLargeFill, RiMenu3Fill, RiSpeakLine } from "react-icons/ri";
import { BsFillInfoSquareFill } from "react-icons/bs";

const Header = () => {
  const [showSubheader, setShowSubheader] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  //***** Prevent Scrolling On Mobile Menu ***** */
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  //***** Header Animation ***** */
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#header", {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "expo.in",
    })
      .from("#logo", {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: "expo.in",
      })
      .from(
        "#sign-in",
        {
          opacity: 0,
          x: 100,
          duration: 0.5,
          ease: "expo.in",
        },
        "<"
      )
      .from(".nav-link", {
        opacity: 0,
        duration: 0.5,
        ease: "expo.in",
      });
  }, []);

  {
    /* Subheader Animation */
  }
  useGSAP(() => {
    const subheader = document.getElementById("subheader");
    if (!subheader) return;

    if (showSubheader) {
      // Show animation
      gsap.to(subheader, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power4.in",
        display: "flex", // Ensure it's visible
      });
    } else {
      // Hide animation
      gsap.to(subheader, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power4.out",
        onComplete: () => {
          // Ensure it's hidden after the animation
          gsap.set(subheader, { display: "none" });
        },
      });
    }
  }, [showSubheader]);

  {
    /* Mobile Menu Animation */
  }
  useGSAP(() => {
    if (showMenu) {
      gsap.set("#mobile-menu", {
        left: "100vw",
        opacity: 0,
      });

      gsap.to("#mobile-menu", {
        left: 0,
        opacity: 1,
        display: "flex",
        duration: 0.3,
      });
    } else {
      gsap.to("#mobile-menu", {
        left: "100vw",
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [showMenu]);

  return (
    <HeaderWrapper id='header'>
      <HeaderContainer>
        <Link
          id='logo'
          href='/'
          className='flex items-center justify-center gap-4'
        >
          <Logo
            src='/images/task-bridge-logo.png'
            alt='logo'
            width={100}
            height={100}
            className='-ml-8 mt-4 w-16 h-16 scroll-smooth'
          />
          <span className='font-semibold text-2xl'>
            Task <span className='text-accent'>Bridge</span>
          </span>
        </Link>

        {/* Nav Links */}
        <NavbarWrapper>
          <NavBar>
            {navLinks.map((link, idx) => (
              <NavbarItem className='nav-link' key={idx}>
                <Link href={link.href}>{link.name}</Link>
              </NavbarItem>
            ))}
            <NavbarItem
              className='nav-link cursor-pointer text-2xl'
              onMouseOver={() => setShowSubheader(true)}
              onMouseLeave={() => setShowSubheader(false)}
            >
              Support <FaAngleDown className='inline-block ml-2 -mt-1' />
            </NavbarItem>
          </NavBar>
        </NavbarWrapper>

        {/* Sign In Button */}
        <SignInBtn id='sign-in'>
          <Link href='/sign-in'>Sign In</Link>
        </SignInBtn>

        {/* Hamburger */}
        <Hamburger>
          {!showMenu ? (
            <RiMenu3Fill size={28} onClick={() => setShowMenu(true)} />
          ) : (
            <RiCloseLargeFill size={28} onClick={() => setShowMenu(false)} />
          )}
        </Hamburger>

        {/* Mobile Menu */}
        <MobileMenuWrapper id='mobile-menu'>
          <MobileMenuContainer>
            {/* Menu Links */}
            <NavBar>
              {navLinks.map((link, idx) => (
                <NavbarItem key={idx}>
                  <Link href={link.href} key={idx}>
                    {link.name}
                  </Link>
                </NavbarItem>
              ))}
              <NavbarItem
                className='cursor-pointer text-2xl'
                onClick={() => setShowSubheader(true)}
              >
                Support <FaAngleDown className='inline-block ml-2 -mt-1' />
              </NavbarItem>
            </NavBar>
          </MobileMenuContainer>
        </MobileMenuWrapper>
      </HeaderContainer>

      {/* Subheader */}
      <Subheader
        id='subheader'
        onMouseOver={() => setShowSubheader(true)}
        onMouseLeave={() => setShowSubheader(false)}
        style={{ opacity: 0, scale: 0, display: "none" }}
      >
        <SubheaderContent>
          {subLinks.map((link, idx) => (
            <SubheaderItem href={link.href} key={idx}>
              <span className='flex items-center gap-2'>
                {/* Icon */}
                {link.title === "About Us" && <BsFillInfoSquareFill />}
                {link.title === "Testimonials" && <RiSpeakLine />}
                {link.title === "Blog" && <FaPencil />}
                {link.title === "Contact Us" && <IoMdContacts />}

                {/* Title */}
                <span className='font-semibold'>{link.title}</span>
              </span>

              {/* Text */}
              <span className='text-muted-foreground'>{link.text}</span>
            </SubheaderItem>
          ))}
        </SubheaderContent>

        {/* Subheader Footer */}
        <SubheaderFooter>
          <span>Join our dynamic team today!</span>
          <Link
            href='#hiring'
            className='text-accent hover:text-accent/70 duration-300 transition-colors'
          >
            Reach out now
          </Link>
        </SubheaderFooter>
      </Subheader>
    </HeaderWrapper>
  );
};

export default Header;
