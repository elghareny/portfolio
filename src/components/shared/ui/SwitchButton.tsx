import { motion } from 'framer-motion';

interface SwitchButtonProps {
  isDefault: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

const SwitchButton = ({ isDefault, toggle, children }: SwitchButtonProps) => {
  return (
    <motion.button
      onClick={toggle}
      className={`relative flex items-center w-20 h-10 rounded-[50px] p-1
        ${isDefault ? 'bg-gray-800' : 'bg-yellow-300'}
        transition-colors duration-500`}
    >
      <motion.div
        className="absolute inset-0 rounded-[50px]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isDefault ? 0.6 : 0.5,
          boxShadow: isDefault
            ? '0 0 10px rgba(59,130,246,0.7), 0 0 20px rgba(59,130,246,0.5)'
            : '0 0 10px rgba(253,224,71,0.7), 0 0 20px rgba(253,224,71,0.5)',
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        animate={{
          x: isDefault ? 39 : 0,
        }}
        className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md z-10"
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

export default SwitchButton;
