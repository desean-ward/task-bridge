"use client";
import {
  Avatar,
  Heading,
  OurTeamContainer,
  OurTeamWrapper,
  TeamMember,
  TeamMembersContainer,
} from "./our-team.styles";
import team from "@/data/team.json";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const OurTeam = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#team-heading", {
      opacity: 0,
      y: 100,
      duration: 0.3,
      scrollTrigger: {
        trigger: "#team-heading",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".team-member", {
      opacity: 0,
      y: 100,
      duration: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".team-member",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    gsap.from("#team-hiring", {
      opacity: 0,
      y: 100,
      duration: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#team-hiring",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <OurTeamWrapper id='team-wrapper'>
      <OurTeamContainer>
        <Heading id='team-heading'>
          <p className='text-3xl font-semibold'>Meet</p>

          {/* Heading */}
          <h2 className='text-6xl font-bold'>
            Our <span className='text-accent'>Team</span>
          </h2>

          {/* Subheading */}
          <p>Dedicated professionals driving our mission forward.</p>
        </Heading>

        {/* Team Members */}
        <TeamMembersContainer>
          {team.map((member, idx) => (
            <TeamMember className='team-member' key={idx}>
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
          id='team-hiring'
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
