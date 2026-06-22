import type { Meta, StoryObj } from '@storybook/react-vite';

import { Pagination } from '.';

// SVG를 인라인 TSX 컴포넌트로 import → currentColor 상속, 플러그인 불필요
import { IconPlus, IconArrowDown } from '@shared/assets/images/icon';

// ─── meta 설정 ───────────────────────────────────────────────────────────────

/**
 * meta — 이 파일의 모든 스토리에 적용되는 공통 설정
 *
 * title        Storybook 사이드바 경로: shared > ui > atoms > Pagination
 * component    Storybook이 Pagination의 Props를 자동 감지하는 데 사용
 * parameters   캔버스 가운데 정렬
 * args         모든 스토리의 기본 Props
 * argTypes     Controls 패널의 각 Prop UI 위젯 설정
 *   variant    inline-radio → 4개 색상 테마를 라디오 버튼으로 전환
 *   size       inline-radio → 4개 크기를 라디오 버튼으로 전환
 *   leftIcon / rightIcon
 *              ReactNode는 Storybook Controls로 제어 불가 → 비활성화
 */
const meta = {
  title: 'shared/ui/atoms/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Read article',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'colorLine', 'grayLine'],
    },
    size: {
      control: 'inline-radio',
      options: ['xl', 'lg', 'md', 'sm'],
    },
    // ReactNode 타입은 Controls 패널에서 편집 불가 → 비활성화
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

// export const Primary: Story = {};
// ─── 개별 variant 스토리 ─────────────────────────────────────────────────────

/**
 * Primary — 파란 배경 + 흰 텍스트 (가장 강조되는 CTA)
 * args를 따로 지정하지 않으면 meta.defaultVariants가 적용됨
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Pagination',
  },
};

/**
 * Secondary — 흰 배경 + 회색 테두리(ring)
 * 호버 시 테두리가 짙은 회색(#333)으로 변경됨
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Pagination',
  },
};

/**
 * ColorLine — 파란 테두리 + 파란 텍스트, 투명 배경
 * 호버 시 10% 파란 틴트 배경이 적용됨
 */
export const ColorLine: Story = {
  args: {
    variant: 'colorLine',
    children: 'Pagination',
  },
};

/**
 * GrayLine — 연회색 테두리 + 짙은 텍스트, 흰 배경
 * 호버 시 테두리가 짙은 회색(#333)으로 변경됨
 */
export const GrayLine: Story = {
  args: {
    variant: 'grayLine',
    children: 'Pagination',
  },
};

// ─── 사이즈 스토리 ───────────────────────────────────────────────────────────

/** ExtraLarge — h=51px, rounded-lg */
export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Pagination',
  },
};

/** Large — h=47px, rounded-lg */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Pagination',
  },
};

/** Medium — h=39px, rounded-[5.5px] (기본값) */
export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Pagination',
  },
};

/** Small — h=35px, rounded-[5.5px] */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Pagination',
  },
};

// ─── 아이콘 스토리 ───────────────────────────────────────────────────────────

/**
 * WithLeftIcon — 텍스트 왼쪽에 아이콘 배치
 * leftIcon prop에 ReactNode를 전달하면 자동으로 아이콘이 표시됨
 */
export const WithLeftIcon: Story = {
  args: {
    children: 'Pagination',
    leftIcon: <IconPlus />,
  },
};

/**
 * WithRightIcon — 텍스트 오른쪽에 아이콘 배치
 */
export const WithRightIcon: Story = {
  args: {
    children: 'Pagination',
    rightIcon: <IconArrowDown />,
  },
};

/**
 * WithBothIcons — 텍스트 양쪽에 아이콘 배치
 */
export const WithBothIcons: Story = {
  args: {
    children: 'Pagination',
    leftIcon: <IconPlus />,
    rightIcon: <IconArrowDown />,
  },
};

// ─── 전체 조합 쇼케이스 ──────────────────────────────────────────────────────

/**
 * AllVariants — 4가지 색상 테마를 한눈에 비교
 * render 함수로 여러 버튼을 직접 렌더링 (Controls 패널 비활성)
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Pagination variant="primary">Primary</Pagination>
      <Pagination variant="secondary">Secondary</Pagination>
      <Pagination variant="colorLine">ColorLine</Pagination>
      <Pagination variant="grayLine">GrayLine</Pagination>
    </div>
  ),
};

/**
 * AllSizes — 4가지 크기를 한눈에 비교
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-3">
      <Pagination size="xl">Extra Large</Pagination>
      <Pagination size="lg">Large</Pagination>
      <Pagination size="md">Medium</Pagination>
      <Pagination size="sm">Small</Pagination>
    </div>
  ),
};

/**
 * AllVariantsWithIcons — 모든 variant에 아이콘 적용 모습 비교
 */
export const AllVariantsWithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Pagination variant="primary" leftIcon={<IconPlus />}>
        Primary
      </Pagination>
      <Pagination variant="secondary" rightIcon={<IconArrowDown />}>
        Secondary
      </Pagination>
      <Pagination variant="colorLine" leftIcon={<IconPlus />}>
        ColorLine
      </Pagination>
      <Pagination variant="grayLine" rightIcon={<IconArrowDown />}>
        GrayLine
      </Pagination>
    </div>
  ),
};

/**
 * Disabled — 비활성화 상태 (모든 variant 공통)
 * disabled prop을 전달하면 pointer-events-none + opacity-50 자동 적용
 */
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Pagination variant="primary" disabled leftIcon={<IconPlus/>} rightIcon={<IconArrowDown />}>Primary</Pagination>
      <Pagination variant="secondary" disabled leftIcon={<IconPlus/>} rightIcon={<IconArrowDown />}>Secondary</Pagination>
      <Pagination variant="colorLine" disabled leftIcon={<IconPlus/>} rightIcon={<IconArrowDown />}>ColorLine</Pagination>
      <Pagination variant="grayLine" disabled leftIcon={<IconPlus/>} rightIcon={<IconArrowDown />}>GrayLine</Pagination>
    </div>
  ),
};
