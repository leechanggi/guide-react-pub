import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import cn from '@shared/lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-slate-950 text-white hover:bg-slate-800',
        secondary:
          'bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-50',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-11 px-5 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = ({
  className,
  size,
  type = 'button',
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ size, variant }), className)}
      {...props}
    />
  );
};
