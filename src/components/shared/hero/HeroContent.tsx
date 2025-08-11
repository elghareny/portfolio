interface HeroContentProps {
  children: React.ReactNode;
}

const HeroContent = ({ children }: HeroContentProps) => {
  return (
    <div className="flex-1 min-w-[250px] flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
      {children}
    </div>
  );
};

export default HeroContent;
