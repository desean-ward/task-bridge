import React from "react";
import {
  Stars,
  TestimonialFooter,
  TestimonialWrapper,
} from "./testimonial-card.styles";
import Image from "next/image";
import { FaWebflow } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

type PersonProps = {
  person: {
    text: string;
    avatar: string;
    name: string;
    title: string;
  };
};

const Testimonial = ({ person }: PersonProps) => {
  const { text, avatar, name, title } = person;
  return (
    <TestimonialWrapper>
      {/* Star Rating */}
      <Stars>
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
      </Stars>

      {/* Customer Quote */}
      <p className='italic'>&quot;{text}&quot;</p>
      {/* Footer */}
      <TestimonialFooter>
        <div className='flex gap-4 border-r pr-8'>
          <Image
            src={avatar}
            width={48}
            height={48}
            alt='Avatar'
            className='rounded-full object-cover bg-primary hidden md:block'
          />

          {/* Customer Info */}
          <div className='flex flex-col gap-1'>
            <span className='font-bold text-accent'>{name}</span>
            <span className="text-base">{title}</span>
          </div>
        </div>

        {/* Company */}
        <div className='pl-8 flex gap-2 items-center'>
          {/* Logo */}
          <FaWebflow size={28} className='text-secondary' />
          <span className='font-semibold text-xl text-accent'>Webflow</span>
        </div>
      </TestimonialFooter>
    </TestimonialWrapper>
  );
};

export default Testimonial;
