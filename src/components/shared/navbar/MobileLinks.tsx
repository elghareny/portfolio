import { X } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import NavLink from './NavLink';

export const links = [
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

interface MobileLinksProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileLinks = ({ isOpen, setIsOpen }: MobileLinksProps) => {
  return (
    <div
      className={` h-screen w-full fixed inset-0 bg-light dark:bg-dark  z-[110] transition-all duration-500 ease-in-out ${
        isOpen
          ? 'opacity-100 translate-y-0 overflow-hidden'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8 md:space-y-10 px-5">
        {links.map(link => (
          <NavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.title}
          </NavLink>
        ))}

        <Link
          href="/Mohamed_Said_Frontend_Developer_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden"
        >
          <Button title="My CV?" animated animate={'animate'} size={'lg'} />
        </Link>
      </div>

      <div className="absolute top-5 right-5 md:top-10 md:right-10">
        <Button
          className=""
          animate={'animate'}
          animated
          onClick={() => setIsOpen(false)}
          size={'icon'}
          rounded={'full'}
          icon={<X width={24} height={24} />}
        />
      </div>
    </div>
  );
};

export default MobileLinks;
