import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '.';

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
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    children: 'View details',
    variant: 'secondary',
  },
};

export const Large: Story = {
  args: {
    children: 'Start reading',
    size: 'lg',
  },
};
