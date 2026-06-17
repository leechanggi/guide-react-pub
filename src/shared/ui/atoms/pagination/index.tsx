import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import cn from '@shared/lib/cn';

const paginationVariants = cva(
  // cva로 버튼의 기본 스타일과 변형(variant/size)별 클래스를 정의
  'inline-flex items-center justify-center gap-1.5 font-medium transition-colors whitespace-nowrap disabled:pointer-events-none disabled:bg-[#eee] disabled:text-[#B9B9B9] disabled:border disabled:border-[#dfdfdf]',
  {
    variants: {
      // variant — 버튼의 색상 테마
      variant: {
        primary:
          'bg-[#1A94FF] text-white hover:bg-[#0582F0]',
        secondary:
          'bg-[#36394F] text-[#fff] hover:bg-[#091242]',
        colorLine:
          'border border-[#1A94FF] text-[#0582F0] bg-transparent hover:bg-[#1A94FF]/10 hover:border-[#0582F0]',
        grayLine:
          'border border-[#DFDFDF] text-[#333] bg-white hover:border-[#333]'
      },

      // size — 버튼의 높이·패딩·텍스트·모서리
      size: {
        xl: 'px-4 py-[13px] text-base leading-[22px] rounded-lg',
        lg: 'px-3 py-2.5 text-[15px] leading-[20px] rounded-md',
        md: 'px-3 py-2 text-sm rounded-md',
        sm: 'px-2.5 py-[9px] text-[13px] leading-[14px] rounded',
      },
    },
    //  컴포넌트에 props를 따로 안 넘겼을 때 기본으로 적용할 값
    defaultVariants: {
      variant: 'primary',
      size: 'xl',
    },
  }
);

/**
 * ButtonProps 타입
 *
 * ButtonHTMLAttributes<HTMLButtonElement>
 *   → onClick, disabled, type, aria-label 등 표준 button 속성
 * VariantProps<typeof buttonVariants>
 *   → variant: 'primary' | 'secondary' | 'colorLine' | 'grayLine'  (선택적)
 *   → size: 'xl' | 'lg' | 'md' | 'sm'                              (선택적)
 * leftIcon / rightIcon
 *   → 텍스트 왼쪽/오른쪽에 렌더링할 아이콘 노드
 */
export type PaginationProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof paginationVariants> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  };

/**
 * Button 컴포넌트
 *
 * @param className  외부 추가 클래스 (cn()이 충돌을 자동 해결)
 * @param size       버튼 크기 ('xl' | 'lg' | 'md' | 'sm'), 기본값 'md'
 * @param type       button 타입, 기본값 'button' (form 내 실수 제출 방지)
 * @param variant    색상 테마, 기본값 'primary'
 * @param leftIcon   텍스트 왼쪽 아이콘 ReactNode
 * @param rightIcon  텍스트 오른쪽 아이콘 ReactNode
 * @param children   버튼 텍스트
 * @param ...props   나머지 네이티브 button 속성
 */
export const Pagination = ({
  className,
  size,
  type = 'button',
  variant,
  leftIcon,
  rightIcon,
  children,
  ...props
}: PaginationProps) => {
  return (
    <button
      type={type}
      className={cn(paginationVariants({ size, variant }), className)}
      {...props}
    >
      {/* 왼쪽 아이콘: shrink-0으로 아이콘이 찌그러지지 않도록 고정 */}
      {leftIcon && (
        <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      {children}
      {/* 오른쪽 아이콘 */}
      {rightIcon && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};
