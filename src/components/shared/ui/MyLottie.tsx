'use client';

import { motion, useInView } from 'framer-motion';
import Player from 'lottie-react';
import { useRef } from 'react';

interface MyLottieProps {
  animationData: any;
  width: number;
  height: number;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}
const MyLottie = ({
  animationData,
  width,
  height,
  loop = true,
  autoplay = true,
  className,
}: MyLottieProps) => {
  return (
    <Player
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={{ width: width, height: height }}
      className={` ${className}`}
    />
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
