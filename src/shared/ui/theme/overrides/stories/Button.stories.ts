import Button from '@mui/material/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'overrides/Button',
  component: Button,
  args: {
    disabled: false,
    fullWidth: false,
    color: 'primary',
    variant: 'contained',
    children: 'Click me !'
  },
  argTypes: {
    variant: {
      options: ['text', 'hover', 'outlined', 'contained'],
      control: { type: 'radio' }
    },
    color: {
      options: ['primary', 'error'],
      control: { type: 'radio' }
    },
    disabled: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
