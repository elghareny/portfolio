import Link from 'next/link';

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

export default function NavLink({ href, onClick, children }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-lg md:text-2xl text-dark dark:text-light duration-300 hover:drop-shadow-[0_0_4px_rgba(255,107,107,1)] after:duration-300 before:duration-300 before:opacity-0 after:opacity-0 hover:text-primary hover:after:h-1  hover:after:w-4 hover:after:bg-primary hover:after:absolute hover:after:-left-1 hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:rounded-[5px] hover:after:transition-all hover:after:opacity-100 hover:before:opacity-100 hover:before:h-1  hover:before:w-4 hover:before:bg-primary hover:before:absolute hover:before:-right-1 hover:before:top-1/2 hover:before:-translate-y-1/2 hover:before:rounded-[5px] hover:before:transition-all transition-all py-2 px-8"
    >
      {children}
    </Link>
  );
}
