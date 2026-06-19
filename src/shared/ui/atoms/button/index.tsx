import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import cn from '@shared/lib/cn';

const buttonVariants = cva(
  // cva로 버튼의 기본 스타일과 변형(variant/size)별 클래스를 정의
  'inline-flex items-center justify-center gap-1.5 font-medium transition-colors whitespace-nowrap disabled:pointer-events-none disabled:bg-[#eee] disabled:text-[#B9B9B9] disabled:border disabled:border-[#dfdfdf]',
  {
    variants: {
      // variant — 버튼의 색상 테마
      variant: {
        primary:
          'border bg-[#1A94FF] text-white hover:bg-[#0582F0]',
        secondary:
          'border bg-[#36394F] text-[#fff] hover:bg-[#091242]',
        colorLine:
          'border border-[#1A94FF] text-[#0582F0] bg-transparent hover:bg-[#1A94FF]/10 hover:border-[#0582F0]',
        grayLine:
          'border border-[#DFDFDF] text-[#333] hover:border-[#333]',
        skyGrayLine: 'border border-[#BEC1D3] text-[#BEC1D3] hover:border-[#333]',
        transparent: ''
      },

      // size — 버튼의 높이·패딩·텍스트·모서리
      size: {
        xl: 'px-4 py-[13px] text-base leading-[20px] rounded-lg',
        lg: 'px-3 py-2.5 text-[15px] leading-[18px] rounded-md',
        md: 'px-3 py-2 text-sm leading-[18px] rounded-md',
        sm: 'px-2.5 py-[9px] text-[13px] leading-[12px] rounded',
      },

      // round — 모서리 모양 (size의 rounded-* 를 덮어씀)
      round: {
        rounded: 'rounded-full',
        square:  '',
      },
    },
    //  컴포넌트에 props를 따로 안 넘겼을 때 기본으로 적용할 값
    defaultVariants: {
      variant: 'primary',
      size: 'xl',
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
  round,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ size, variant, round }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
