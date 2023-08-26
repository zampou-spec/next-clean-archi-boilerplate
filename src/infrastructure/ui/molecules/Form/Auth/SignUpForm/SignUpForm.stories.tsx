import type { Meta, StoryObj } from '@storybook/react';

import SignUpForm from '.';

const meta = {
  title: 'molecules/Form/auth/Sign Up Form',
  component: SignUpForm,
  args: {},
  argTypes: {}
} satisfies Meta<typeof SignUpForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
