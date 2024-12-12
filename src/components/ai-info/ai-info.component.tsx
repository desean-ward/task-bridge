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

const AiInfo = () => {
  return (
    <AiInfoWrapper>
      <AiInfoContainer>
        <div className='w-full max-w-5xl h-full flex flex-col items-center gap-12 text-center'>
          <p className='font-semibold text-xl'>Engage</p>

          {/* Heading */}
          <h2 className='text-4xl md:text-5xl font-bold'>
            <span className='text-accent'>Transform</span> Your Instagram{" "}
            <span className='text-secondary'>Interactions</span> With A.I.
          </h2>

          {/* Text */}
          <p>
            With Task Bridge, you can effortlessly connect with your audience
            through AI-driven responses. Our platform ensures that every comment
            and direct message is handled promptly and effectively.
          </p>
        </div>

        {/* Card Grid */}
        <CardsWrapper>
          {aiInfo.map((card) => (
            <CardsContainer>
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
        <ContentBtns>
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
