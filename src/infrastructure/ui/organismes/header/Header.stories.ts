import type { Meta, StoryObj } from '@storybook/react';

import Header from '.';

const meta = {
  title: 'Header',
  component: Header,
  args: {},
  argTypes: {}
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: undefined
  }
};
