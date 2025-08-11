import animationData from '@/animations/avatar.json';
import MyLottie from '../ui/MyLottie';
import NavIcons from './NavIcons';

const Navbar = () => {
  return (
    <div className="fixed inset-0 w-full h-[50px] md:h-[60px] mx-auto bg-light/10 dark:bg-dark/10 backdrop-blur-sm z-[100]">
      <div className="container mx-auto px-2 md:px-0 flex items-center justify-between h-full backdrop:backdrop-blur-2xl">
        <div className="flex items-center justify-center gap-x-[1px] h-full">
          <MyLottie
            animationData={animationData}
            className="rounded-full w-[60px] h-[60px] md:w-[70px] md:h-[70px] "
          />
          <h1 className=" special-font drop-shadow-[0_0_8px_rgba(124,58,237,0.8)] text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient cursor-default">
            Mohamed
          </h1>
        </div>
        <NavIcons />
      </div>
    </div>
  );
};

export default Navbar;
