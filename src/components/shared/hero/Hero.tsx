import { Facebook, Github, Linkedin, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const socialLinks = [
  {
    icon: <Github className="p-1" />,
    href: 'https://github.com/elghareny',
  },
  {
    icon: <Linkedin className="p-1" />,
    href: 'https://www.linkedin.com/in/elghareny',
  },
  {
    icon: <Facebook className="p-1" />,
    href: 'https://www.facebook.com/semporay',
  },
  {
    icon: <PhoneCall className="p-1" />,
    href: 'tel:+201027318124',
  },
];

const Hero = () => {
  return (
    <section className=" min-h-[calc(100vh-50px)]  md:min-h-[calc(100vh-60px)]">
      <div className="flex flex-wrap items-center justify-center gap-6 px-4 md:px-8 py-4 md:py-0 h-full">
        <HeroContent>
          <h1 className="special-font text-[8vw] md:text-[4vw] leading-tight ">
            Hey, I'm <span className="text-primary">Mohamed</span>
          </h1>
          <p className="mt-4 text-[5vw] md:text-[3vw] ">
            <span className="special-font text-success font-semibold text-[6vw] md:text-[3vw]">
              Frontend Developer
            </span>{' '}
            <span className="text-primary font-semibold text-[5vw] md:text-[3vw]">
              React & Next.js
            </span>{' '}
            Specialist
          </p>
        </HeroContent>

        <HeroImage />

        <HeroContent>
          <p className="special-font text-[5vw] md:text-[3vw] ">
            Ready to bring your ideas to life
          </p>
          <div className="mt-4 flex items-center justify-center md:justify-start gap-3 md:gap-4 w-full ">
            {/* online point */}
            <span className="relative inline-flex w-[3.5vw] h-[3.5vw] md:w-[1vw] md:h-[1vw] bg-success rounded-full">
              <span className="animate-ping absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-full w-full rounded-full bg-success/75"></span>
              <span className="relative inline-flex rounded-full w-[3.5vw] h-[3.5vw] md:w-[1vw] md:h-[1vw] bg-success"></span>
            </span>

            <p className=" text-[4vw] md:text-[2vw] text-primary ">open to Work</p>
          </div>

          {/* social icons */}

          <div className="mt-4 flex items-center justify-center gap-2 w-fit bg-dark dark:bg-light px-4 py-1 rounded-md">
            {socialLinks.map((link, index) => (
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                aria-label={link.href}
                className="cursor-pointer text-[4vw] md:text-[2vw] text-light dark:text-dark p-1 rounded-full hover:bg-light/90 dark:hover:bg-dark/90 hover:text-dark hover:dark:text-light transition-all duration-300"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </HeroContent>
      </div>
    </section>
  );
};

export default Hero;
