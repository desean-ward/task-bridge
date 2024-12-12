import React from "react";
import {
  LeftContentContainer,
  RightContentContainer,
  UnlockThePowerContainer,
  UnlockThePowerWrapper,
} from "./unlock-the-power.styles";
import Image from "next/image";

const UnlockThePower = () => {
  return (
    <UnlockThePowerWrapper>
      <UnlockThePowerContainer>
        <LeftContentContainer>
          {/* Heading */}
          <h2 className='text-5xl font-bold'>
            <span className='text-accent'>Unlock</span> the Power of{" "}
            <span className='text-secondary'>Automation</span> with Task{" "}
            <span className='text-accent'>Bridge</span>
          </h2>

          {/* Text */}
          <p>
            Task Bridge empowers your business to connect with customers
            effortlessly, enhancing engagement through automated responses.
            Transform every interaction into a valuable opportunity and watch
            your brand thrive on Instagram.
          </p>
        </LeftContentContainer>

        {/* Right Content */}
        <RightContentContainer>
          <Image
            src='/images/automation-2.jpg'
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
