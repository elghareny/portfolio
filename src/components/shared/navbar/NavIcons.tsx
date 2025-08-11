'use client';

import { AlignLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../ui/Button';
import MobileLinks from './MobileLinks';
import ToggleButtons from './ToggleButtons';
const NavIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-x-4">
        <Link
          href="/Mohamed_Said_Frontend_Developer_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <Button title="My CV ?" animated animate={'animate'} size={'lg'} />
        </Link>
        <ToggleButtons />
        <Button
          icon={<AlignLeft className="w-5 h-5 md:w-6 md:h-6" />}
          animate={'animate'}
          animated
          rounded={'full'}
          size={'icon'}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <MobileLinks isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default NavIcons;
