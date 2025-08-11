import MyLottie from '@/components/shared/ui/MyLottie';
import Image from 'next/image';
const animationData = require('@/animations/cover.json');
const HeroImage = () => {
  return (
    <div className=" flex-1 min-w-[250px] flex justify-center">
      <MyLottie
        animationData={animationData}
        className="relative overflow-hidden w-[300px] md:h-[580px]"
      >
        <Image
          src="/assets/profile.jpg"
          alt="profile"
          className="rounded-full object-cover w-1/2  absolute top-[calc(50%+1px)] left-[calc(50%+10px)] -translate-x-1/2 -translate-y-1/2 border-2 border-dark dark:border-light z-10"
          width={400}
          height={400}
        />
      </MyLottie>
    </div>
  );
};

export default HeroImage;
