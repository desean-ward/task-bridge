import React from "react";
import {
  Avatar,
  OurTeamContainer,
  OurTeamWrapper,
  TeamMember,
  TeamMembersContainer,
} from "./our-team.styles";
import team from "@/data/team.json";
import Image from "next/image";

const OurTeam = () => {
  return (
    <OurTeamWrapper id='team'>
      <OurTeamContainer>
        <p className='text-3xl font-semibold'>Meet</p>

        {/* Heading */}
        <h2 className='text-6xl font-bold'>
          Our <span className='text-accent'>Team</span>
        </h2>

        {/* Subheading */}
        <p>Dedicated professionals driving our mission forward.</p>

        {/* Team Members */}
        <TeamMembersContainer>
          {team.map((member, idx) => (
            <TeamMember key={idx}>
              <Avatar>
                <Image
                  src={member.avatar}
                  width={100}
                  height={100}
                  alt='Member Image'
                  className='object-cover size-full'
                />
              </Avatar>

              <div className='text-center'>
                <h3 className='text-2xl font-bold'>{member.name}</h3>

                <span className='text-xl text-accent font-semibold'>
                  {member.title}
                </span>
              </div>

              <span className='text-balance'>{member.desc}</span>
            </TeamMember>
          ))}
        </TeamMembersContainer>

        {/* Our Team Foter */}
        <div
          id='hiring'
          className='flex flex-col items-center justify-center gap-4'
        >
          <h3 className='text-3xl font-bold'>We&apos;re hiring!</h3>

          <p>Join our dynamic team and make an impact.</p>

          <button className='border rounded-lg p-4 bg-secondary hover:bg-secondary/70 text-white font-semibold'>
            Open Positions
          </button>
        </div>
      </OurTeamContainer>
    </OurTeamWrapper>
  );
};

export default OurTeam;
