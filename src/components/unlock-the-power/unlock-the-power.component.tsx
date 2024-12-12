"use client";
import {
  LeftContentContainer,
  RightContentContainer,
  UnlockThePowerContainer,
  UnlockThePowerWrapper,
} from "./unlock-the-power.styles";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const UnlockThePower = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#power-left", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "ease.in",
      scrollTrigger: {
        trigger: "#power-wrapper",
        start: "top 30%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from("#power-right", {
      opacity: 0,
      duration: 1,
      ease: "ease.in",
      scrollTrigger: {
        trigger: "#power-wrapper",
        start: "top 30%",

        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <UnlockThePowerWrapper id='power-wrapper'>
      <UnlockThePowerContainer>
        <LeftContentContainer id='power-left'>
          {/* Heading */}
          <h2 className='text-5xl font-bold text-balance'>
            <span className='text-accent'>Unlock</span> the Power of{" "}
            <span className='text-secondary'>Automation</span> with Task{" "}
            <span className='text-accent'>Bridge</span>
          </h2>

          {/* Text */}
          <p className='text-xl'>
            Task Bridge empowers your business to connect with customers
            effortlessly, enhancing engagement through automated responses.
            Transform every interaction into a valuable opportunity and watch
            your brand thrive on Instagram.
          </p>
        </LeftContentContainer>

        {/* Right Content */}
        <RightContentContainer id='power-right'>
          <Image
            src='/images/automation-3.jpg'
            alt='Automation'
            fill
            className='object-cover h-screen'
          />
        </RightContentContainer>
      </UnlockThePowerContainer>
    </UnlockThePowerWrapper>
  );
};

export default UnlockThePower;
