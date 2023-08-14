import type { Meta, StoryObj } from '@storybook/react';

import BootstrapInput from '.';

const meta = {
  title: 'components/BootstrapInput',
  component: BootstrapInput,
  args: {
    fullWidth: false
  },
  argTypes: {
    fullWidth: { control: { type: 'boolean' } }
  }
} satisfies Meta<typeof BootstrapInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
