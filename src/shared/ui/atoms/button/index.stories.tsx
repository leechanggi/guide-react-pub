import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '.';

// SVG를 인라인 TSX 컴포넌트로 import → currentColor 상속, 플러그인 불필요
import PlusIcon from '../../../assets/images/icon/IconPlus';
import IconArrowDown from '../../../assets/images/icon/IconArrowDown';

// ─── meta 설정 ───────────────────────────────────────────────────────────────

/**
 * meta — 이 파일의 모든 스토리에 적용되는 공통 설정
 *
 * title        Storybook 사이드바 경로: shared > ui > atoms > Button
 * component    Storybook이 Button의 Props를 자동 감지하는 데 사용
 * parameters   캔버스 가운데 정렬
 * args         모든 스토리의 기본 Props
 * argTypes     Controls 패널의 각 Prop UI 위젯 설정
 *   variant    inline-radio → 4개 색상 테마를 라디오 버튼으로 전환
 *   size       inline-radio → 4개 크기를 라디오 버튼으로 전환
 */
const meta = {
  title: 'shared/ui/atoms/Button',
  component: Button,
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
    round: {
      control: 'inline-radio',
      options: ['rounded', 'square']
    }
  },
} satisfies Meta<typeof Button>;

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
    children: 'Button',
  },
};

/**
 * Secondary — 흰 배경 + 회색 테두리(ring)
 * 호버 시 테두리가 짙은 회색(#333)으로 변경됨
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

/**
 * ColorLine — 파란 테두리 + 파란 텍스트, 투명 배경
 * 호버 시 10% 파란 틴트 배경이 적용됨
 */
export const ColorLine: Story = {
  args: {
    variant: 'colorLine',
    children: 'Button',
  },
};

/**
 * GrayLine — 연회색 테두리 + 짙은 텍스트, 흰 배경
 * 호버 시 테두리가 짙은 회색(#333)으로 변경됨
 */
export const GrayLine: Story = {
  args: {
    variant: 'grayLine',
    children: 'Button',
  },
};

// ─── 사이즈 스토리 ───────────────────────────────────────────────────────────

/** ExtraLarge — h=51px, rounded-lg */
export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Button',
  },
};

/** Large — h=47px, rounded-lg */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

/** Medium — h=39px, rounded-[5.5px] (기본값) */
export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

/** Small — h=35px, rounded-[5.5px] */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

// ─── 아이콘 스토리 ───────────────────────────────────────────────────────────

/** WithLeftIcon — 텍스트 왼쪽에 아이콘 배치 */
export const WithLeftIcon: Story = {
  render: () => <Button><PlusIcon /> Button</Button>,
};

/** WithRightIcon — 텍스트 오른쪽에 아이콘 배치 */
export const WithRightIcon: Story = {
  render: () => <Button>Button <IconArrowDown /></Button>,
};

/** WithBothIcons — 텍스트 양쪽에 아이콘 배치 */
export const WithBothIcons: Story = {
  render: () => <Button><PlusIcon /> Button <IconArrowDown /></Button>,
};

// ─── 전체 조합 쇼케이스 ──────────────────────────────────────────────────────

/**
 * AllVariants — 4가지 색상 테마를 한눈에 비교
 * render 함수로 여러 버튼을 직접 렌더링 (Controls 패널 비활성)
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="colorLine">ColorLine</Button>
      <Button variant="grayLine">GrayLine</Button>
    </div>
  ),
};

/**
 * AllSizes — 4가지 크기를 한눈에 비교
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-3">
      <Button size="xl">Extra Large</Button>
      <Button size="lg">Large</Button>
      <Button size="md">Medium</Button>
      <Button size="sm">Small</Button>
    </div>
  ),
};

/**
 * AllVariantsWithIcons — 모든 variant에 아이콘 적용 모습 비교
 */
export const AllVariantsWithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary"><PlusIcon /> Primary</Button>
      <Button variant="secondary">Secondary <IconArrowDown /></Button>
      <Button variant="colorLine"><PlusIcon /> ColorLine</Button>
      <Button variant="grayLine">GrayLine <IconArrowDown /></Button>
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
      <Button variant="primary" disabled><PlusIcon /> Primary <IconArrowDown /></Button>
      <Button variant="secondary" disabled><PlusIcon /> Secondary <IconArrowDown /></Button>
      <Button variant="colorLine" disabled><PlusIcon /> ColorLine <IconArrowDown /></Button>
      <Button variant="grayLine" disabled><PlusIcon /> GrayLine <IconArrowDown /></Button>
    </div>
  ),
};

export const Square: Story = {
  // args: {
  //   children: 'Button',
  //   leftIcon: <PlusIcon />,
  //   round: 'rounded'
  // }
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="skyGrayLine" size="md" round="rounded">Button</Button>
      <Button variant="colorLine" size="md" round="rounded">Button</Button>
    </div>
  )
}