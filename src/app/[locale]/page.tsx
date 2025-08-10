import MyLottie from '@/components/shared/ui/MyLottie';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
const animationData = require('@/animations/cover.json');

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <main className="mt-[60px] h-[5000px] ">
      <div className="h-[calc(100vh-60px)]">
        <div className="relative flex items-center justify-center h-full">
          <MyLottie
            animationData={animationData}
            width={600}
            height={600}
            className="overflow-hidden z-20 absolute w-[600px] h-[600px]"
          />
          <Image
            src="/assets/profile.jpg"
            alt="profile"
            className="rounded-full object-cover w-[200px] h-[200px] absolute top-[calc(50%+1px)] left-[calc(50%+10px)] -translate-x-1/2 -translate-y-1/2 border-2 border-dark dark:border-light"
            width={200}
            height={200}
          />
        </div>
        <div></div>
      </div>
    </main>
  );
}
