"use client";
import {
  LeftContentContainer,
  RightContentContainer,
  UnlockThePowerContainer,
  UnlockThePowerWrapper,
} from "./unlock-the-power.styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageSlider from "../unlock-image-slider/unlock-image-slider.component";

const UnlockThePower = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate #power-left
    gsap.from("#power-left", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#power-wrapper",
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });

    // Pin and animate #power-wrapper
    ScrollTrigger.create({
      trigger: "#power-wrapper",
      start: "top top", // Pin starts when wrapper hits top
      end: "+=100%", // Pin duration: adjust based on animation length
      pin: true, // Pin #power-wrapper to top
      pinSpacing: true, // Reverse the pinning
      markers: false, // Debug markers
    });

    // Scale animation for #power-right
    gsap.fromTo(
      "#power-right",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: "#power-wrapper",
          start: "top top", // Begin scaling as soon as wrapper is pinned
          end: "bottom top", // Stop scaling when wrapper scrolls out of view
          scrub: true, // Smooth scroll-tied animation
          markers: false, // Debug markers
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Parallax effect for the next section
    gsap.to("#power-right", {
      display: "fixed",
      top: 0, // Move content upwards for parallax
      ease: "none", // Smooth, linear motion
      scrollTrigger: {
        trigger: "#team-wrapper",
        start: "top bottom", // Start when #next-section enters viewport
        end: "bottom top", // End when it leaves viewport
        scrub: true, // Ties animation to scroll
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
          <ImageSlider />
        </RightContentContainer>
      </UnlockThePowerContainer>
    </UnlockThePowerWrapper>
  );
};

export default UnlockThePower;
