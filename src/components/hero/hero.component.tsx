"use client";
import React from "react";
import {
  HeroContainer,
  HeroImg,
  HeroWrapper,
  LeftContent,
  LeftContentBtn,
  LeftContentBtns,
  LeftImgs,
  RightContent,
  RightImgs,
} from "./hero.styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  //******* Left Side Animation ****** */
  useGSAP(() => {
    gsap.from("#left", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "ease.in",
      delay: 2.3,
    });

    gsap.from("#right", {
      opacity: 0,
      duration: 1,
      ease: "ease.in",
      delay: 2.3,
    });
  }, []);

  return (
    <HeroWrapper>
      <HeroContainer>
        {/* Left Side Content */}
        <LeftContent id='left'>
          <h1 className='text-4xl md:text-5xl font-bold '>
            <span className='text-accent'>Transform</span> Your Instagram{" "}
            <span className='text-secondary'>Engagement</span> With Ease
          </h1>

          {/* Text */}
          <p className="text-xl">
            Welcome to Task Bridge, where conversational marketing meets
            automation. Effortlessly engage your audience and turn interactions
            into opportunities.
          </p>

          {/* Buttons */}
          <LeftContentBtns>
            <LeftContentBtn className='bg-accent hover:bg-accent/70 text-black'>
              Get Started
            </LeftContentBtn>
            <LeftContentBtn className='bg-secondary hover:bg-secondary/70'>
              Learn More
            </LeftContentBtn>
          </LeftContentBtns>
        </LeftContent>

        {/* Right Side Content */}
        <RightContent id='right'>
          <LeftImgs>
            <span className='rounded-lg overflow-hidden'>
              <HeroImg
                src='/images/woman-1.webp'
                alt='woman 1'
                width={400}
                height={400}
              />
            </span>

            <span className='rounded-lg overflow-hidden'>
              <HeroImg
                src='/images/man-1.webp'
                alt='man 1'
                width={400}
                height={400}
              />
            </span>
            <span className='rounded-lg overflow-hidden'>
              <HeroImg
                src='/images/woman-2.webp'
                alt='woman 2'
                width={400}
                height={400}
              />
            </span>
          </LeftImgs>

          {/* Right Images */}
          <RightImgs>
            <span className='rounded-lg overflow-hidden'>
              <HeroImg
                src='/images/man-2.webp'
                alt='man 2'
                width={400}
                height={400}
              />
            </span>

            <span className='shadow-inner-dark rounded-lg overflow-hidden'>
              <HeroImg
                src='/images/woman-3.webp'
                alt='woman 3'
                width={400}
                height={400}
                className='shadow-inner-dark'
              />
            </span>

            <span className='rounded-lg overflow-hidden'>
              <HeroImg
                src='/images/man-3.webp'
                alt='man 3'
                width={400}
                height={400}
              />
            </span>
          </RightImgs>
        </RightContent>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
