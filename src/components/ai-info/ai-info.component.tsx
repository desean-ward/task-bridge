"use client";
import React from "react";
import {
  AiInfoContainer,
  AiInfoWrapper,
  CardsContainer,
  CardsWrapper,
  ContentBtn,
  ContentBtns,
} from "./ai-info.styles";
import aiInfo from "@/data/aiInfo.json";
import { ImCogs } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AiInfo = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#heading", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "ease.in",
      scrollTrigger: {
        trigger: "#heading",
        start: "top 50%",
        toggleActions: "play none none none", 
      },
    });

    gsap.from("#cards", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "ease.in",
      scrollTrigger: {
        trigger: "#cards",
        start: "top 60%",

        toggleActions: "play none none none", 
      },
    });

    gsap.from("#btns", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "ease.in",
      scrollTrigger: {
        trigger: "#btns",
        start: "top 80%",

        toggleActions: "play none none none", 
      },
    });
  }, []);

  return (
    <AiInfoWrapper id='features'>
      <AiInfoContainer>
        <div
          id='heading'
          className='w-full max-w-5xl h-full flex flex-col items-center gap-12 text-center'
        >
          <p className='font-semibold text-3xl'>Engage</p>

          {/* Heading */}
          <h2 className='text-4xl md:text-5xl font-bold text-balance'>
            <span className='text-accent'>Transform</span> Your Instagram{" "}
            <span className='text-secondary'>Interactions</span> With A.I.
          </h2>

          {/* Text */}
          <p className='text-balance text-xl'>
            With Task Bridge, you can effortlessly connect with your audience
            through AI-driven responses. Our platform ensures that every comment
            and direct message is handled promptly and effectively.
          </p>
        </div>

        {/* Card Grid */}
        <CardsWrapper id='cards'>
          {aiInfo.map((card, idx) => (
            <CardsContainer key={idx}>
              <span className='w-full flex justify-center text-accent'>
                <ImCogs size={42} />
              </span>

              {/* Heading */}
              <h2 className='font-bold text-3xl'>{card.title}</h2>

              {/* Text */}
              <p className='text-secondary text-2xl font-semibold'>
                {card.text}
              </p>
            </CardsContainer>
          ))}
        </CardsWrapper>

        {/* Buttons */}
        <ContentBtns id='btns'>
          <ContentBtn className='bg-secondary hover:bg-secondary/70 text-white'>
            Learn More
          </ContentBtn>

          <ContentBtn className='bg-accent hover:bg-accent/70 flex items-center justify-center pr-[0.5rem]'>
            <span>Sign In</span>
            <MdKeyboardArrowRight size={28} />
          </ContentBtn>
        </ContentBtns>
      </AiInfoContainer>
    </AiInfoWrapper>
  );
};

export default AiInfo;
