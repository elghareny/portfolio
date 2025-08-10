import animationData from '@/animations/avatar.json';
import MyLottie from '../ui/MyLottie';
import NavIcons from './NavIcons';

const Navbar = () => {
  return (
    <div className="fixed inset-0 w-full h-[60px] mx-auto bg-light/10 dark:bg-dark/10 backdrop-blur-sm z-[100]">
      <div className="container mx-auto flex items-center justify-between h-full backdrop:backdrop-blur-2xl">
        <div className="flex items-center justify-center gap-x-1 h-full">
          <MyLottie animationData={animationData} width={80} height={80} />
          {/* <Image alt="logo" width={40} height={40} src="/assets/logo.png" className="rounded-full" /> */}
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient cursor-default">
            Mohamed
          </h1>
          {/* <h1 className="text-2xl font-bold text-dark dark:text-light drop-shadow-[0_0_8px_rgba(124,58,237,0.8)] hover:drop-shadow-[0_0_12px_rgba(124,58,237,1)] transition-all cursor-pointer">
            Mohamed
          </h1> */}
        </div>
        <NavIcons />
      </div>
    </div>
  );
};

export default Navbar;
