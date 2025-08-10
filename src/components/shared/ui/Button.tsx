import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React, { Fragment } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  title?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  animated?: boolean;
}

const buttonVariants = cva(
  'flex items-center justify-center gap-x-2 transition-all duration-300 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-light hover:bg-dark hover:text-primary hover:shadow-lg shadow-primary/30 dark:bg-primary dark:text-light dark:hover:bg-light dark:hover:text-primary',
        destructive:
          'bg-danger text-light hover:bg-dark hover:text-danger dark:bg-danger dark:text-light dark:hover:bg-light dark:hover:text-danger',
        outline:
          'border border-primary text-primary hover:bg-primary hover:text-light dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-light',
        ghost:
          'hover:bg-primary hover:text-light text-primary hover:shadow-lg shadow-primary/30 dark:hover:bg-primary dark:hover:text-light dark:text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3',
        lg: 'h-10 px-8',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-[50px]',
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      animate: {
        default: '',
        animate: 'h-10 overflow-hidden relative group',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
      animate: 'default',
    },
  }
);
const Button = ({
  title,
  icon,
  onClick,
  className,
  disabled,
  variant,
  size,
  rounded,
  animate,
  animated,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ variant, size, rounded, animate, className }))}
      disabled={disabled}
    >
      {animated ? (
        <div className="relative overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            {icon}
            {title}
          </span>
          <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            {icon}
            {title}
          </span>
        </div>
      ) : (
        <>
          {icon}
          {title}
        </>
      )}
    </button>
  );
};

export default Button;
