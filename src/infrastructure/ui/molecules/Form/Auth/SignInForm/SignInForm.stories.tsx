import type { Meta, StoryObj } from '@storybook/react';

import SignInForm from '.';

const meta = {
  title: 'molecules/Form/auth/Sign In Form',
  component: SignInForm,
  args: {},
  argTypes: {}
} satisfies Meta<typeof SignInForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
