'use client';

import { motion, useInView } from 'framer-motion';
import Player from 'lottie-react';
import { useRef } from 'react';

interface MyLottieProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  children?: React.ReactNode;
}
const MyLottie = ({
  animationData,
  loop = true,
  autoplay = true,
  className,
  children,
}: MyLottieProps) => {
  return (
    <Player
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={` ${className}`}
    >
      {children}
    </Player>
    // <motion.div
    //   ref={containerRef}
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={{ opacity: inView ? 1 : 0.5, y: inView ? 0 : 50 }}
    //   transition={{ duration: 0.6 }}
    //   className={`flex justify-center items-center ${className}`}
    // >

    // </motion.div>
  );
};

export default MyLottie;
